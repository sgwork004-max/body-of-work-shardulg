const debuggingHost = process.env.RESPONSIVE_AUDIT_CDP || "http://127.0.0.1:9223";
const siteRoot = process.argv[2] || "http://127.0.0.1:4173";

const routeCatalog = [
  "/",
  "/Work/",
  "/Projects/",
  "/Studio/",
  "/Writing/",
  "/Index/",
  "/contact/",
  "/Work/yelloskye/",
  "/Work/therefore/",
  "/Projects/koel/",
  "/Projects/history-lit-fest/",
  "/Projects/digital-marketing/",
];

const viewportCatalog = [
  { name: "phone-320", width: 320, height: 720 },
  { name: "phone-390", width: 390, height: 844 },
  { name: "phone-landscape", width: 844, height: 390 },
  { name: "tablet-portrait", width: 768, height: 1024 },
  { name: "tablet-landscape", width: 1024, height: 768 },
  { name: "small-laptop", width: 1280, height: 720 },
];

const routes = process.env.RESPONSIVE_AUDIT_ROUTE
  ? routeCatalog.filter((route) => route === process.env.RESPONSIVE_AUDIT_ROUTE)
  : routeCatalog;
const viewports = process.env.RESPONSIVE_AUDIT_VIEWPORT
  ? viewportCatalog.filter((viewport) => viewport.name === process.env.RESPONSIVE_AUDIT_VIEWPORT)
  : viewportCatalog;

const target = await fetch(`${debuggingHost}/json/new?about:blank`, { method: "PUT" }).then((response) => response.json());
const socket = new WebSocket(target.webSocketDebuggerUrl);
await new Promise((resolve, reject) => {
  socket.addEventListener("open", resolve, { once: true });
  socket.addEventListener("error", reject, { once: true });
});

let commandId = 0;
const pending = new Map();
const events = new Map();

socket.addEventListener("message", ({ data }) => {
  const message = JSON.parse(data);
  if (message.id) {
    const request = pending.get(message.id);
    if (!request) return;
    pending.delete(message.id);
    if (message.error) request.reject(new Error(message.error.message));
    else request.resolve(message.result);
    return;
  }

  const queue = events.get(message.method);
  if (queue?.length) queue.shift()(message.params);
});

function send(method, params = {}) {
  const id = ++commandId;
  socket.send(JSON.stringify({ id, method, params }));
  return new Promise((resolve, reject) => pending.set(id, { resolve, reject }));
}

function once(method) {
  return new Promise((resolve) => {
    const queue = events.get(method) || [];
    queue.push(resolve);
    events.set(method, queue);
  });
}

await send("Page.enable");
await send("Runtime.enable");
await send("Network.enable");
await send("Network.setCacheDisabled", { cacheDisabled: true });

const results = [];
for (const viewport of viewports) {
  await send("Emulation.setDeviceMetricsOverride", {
    width: viewport.width,
    height: viewport.height,
    deviceScaleFactor: 1,
    mobile: viewport.width < 768,
    screenWidth: viewport.width,
    screenHeight: viewport.height,
  });
  await send("Emulation.setTouchEmulationEnabled", { enabled: viewport.width < 1024 });

  for (const route of routes) {
    const loaded = once("Page.loadEventFired");
    await send("Page.navigate", { url: `${siteRoot}${route}` });
    await loaded;
    await new Promise((resolve) => setTimeout(resolve, 120));

    const { result } = await send("Runtime.evaluate", {
      returnByValue: true,
      expression: `(() => {
        const root = document.documentElement;
        const body = document.body;
        const visible = [...document.querySelectorAll('*')].filter((element) => {
          const style = getComputedStyle(element);
          const rect = element.getBoundingClientRect();
          return style.display !== 'none' && style.visibility !== 'hidden' && rect.width > 0 && rect.height > 0;
        });
        const isInsideScroller = (element) => {
          for (let parent = element.parentElement; parent && parent !== body; parent = parent.parentElement) {
            const overflowX = getComputedStyle(parent).overflowX;
            if ((overflowX === 'auto' || overflowX === 'scroll') && parent.scrollWidth > parent.clientWidth) return true;
          }
          return false;
        };
        const offenders = visible
          .map((element) => {
            const rect = element.getBoundingClientRect();
            return {
              selector: element.id ? '#' + element.id : element.classList.length ? element.tagName.toLowerCase() + '.' + [...element.classList].slice(0, 3).join('.') : element.tagName.toLowerCase(),
              left: Math.round(rect.left),
              right: Math.round(rect.right),
              width: Math.round(rect.width),
              insideScroller: isInsideScroller(element),
            };
          })
          .filter(({ left, right, width, insideScroller }) => !insideScroller && (left < -1 || right > innerWidth + 1 || width > innerWidth + 1))
          .sort((a, b) => b.right - a.right)
          .slice(0, 8);
        const smallTargets = visible
          .filter((element) => element.matches('.site-header a, button, summary, .button, .chip, .story-index a, .dossier-nav a, .contact-links a, .contact-home-foot a, .hero-atlas-rail a, .writing-direct-link, .writing-more-link'))
          .map((element) => {
            const rect = element.getBoundingClientRect();
            return { label: (element.getAttribute('aria-label') || element.textContent || element.tagName).trim().replace(/\\s+/g, ' ').slice(0, 42), width: Math.round(rect.width), height: Math.round(rect.height) };
          })
          .filter(({ width, height }) => width < 44 || height < 44)
          .slice(0, 12);
        const inspected = ['.site-header', '.site-header .mark', '.site-header .nav', '.site-header .contact-pill', '.hero-atlas', '.hero-atlas-copy', '.hero-atlas h1', '.contact-home-panel']
          .map((selector) => {
            const element = document.querySelector(selector);
            if (!element) return null;
            const rect = element.getBoundingClientRect();
            const style = getComputedStyle(element);
            return { selector, left: Math.round(rect.left), right: Math.round(rect.right), width: Math.round(rect.width), height: Math.round(rect.height), display: style.display, position: style.position, boxSizing: style.boxSizing, padding: style.padding, grid: style.gridTemplateColumns, overflow: style.overflow };
          })
          .filter(Boolean);
        return {
          title: document.title,
          innerWidth,
          clientWidth: root.clientWidth,
          scrollWidth: Math.max(root.scrollWidth, body.scrollWidth),
          offenders,
          smallTargets,
          inspected,
        };
      })()`,
    });

    results.push({ viewport: viewport.name, route, ...result.value });

    if (process.env.RESPONSIVE_AUDIT_SCREENSHOT && routes.length === 1 && viewports.length === 1) {
      const screenshot = await send("Page.captureScreenshot", { format: "png", fromSurface: true, captureBeyondViewport: false });
      await writeFile(process.env.RESPONSIVE_AUDIT_SCREENSHOT, Buffer.from(screenshot.data, "base64"));
    }
  }
}

socket.close();

const layoutFailures = results
  .filter((entry) => entry.scrollWidth > entry.clientWidth + 1 || entry.offenders.length)
  .map((entry) => ({
    viewport: entry.viewport,
    route: entry.route,
    clientWidth: entry.clientWidth,
    scrollWidth: entry.scrollWidth,
    offenders: entry.offenders,
    inspected: entry.inspected,
  }));
const touchFailures = results
  .filter((entry) => entry.viewport !== "small-laptop" && entry.smallTargets.length)
  .map((entry) => ({ viewport: entry.viewport, route: entry.route, targets: entry.smallTargets }));

console.log(JSON.stringify({
  summary: {
    checked: results.length,
    layoutFailures: layoutFailures.length,
    touchFailurePages: touchFailures.length,
  },
  layoutFailures,
  touchFailures,
}, null, 2));
import { writeFile } from "node:fs/promises";
