const currentSection = window.location.pathname.split("/").filter(Boolean)[0]?.toLowerCase() || "";
document.querySelectorAll(".nav a").forEach((link) => {
  const linkSection = new URL(link.href, window.location.origin).pathname.split("/").filter(Boolean)[0]?.toLowerCase() || "";
  if (linkSection === currentSection) link.setAttribute("aria-current", "page");
});

const contactPill = document.querySelector(".contact-pill");
if (contactPill && currentSection === "contact") {
  contactPill.setAttribute("aria-current", "page");
}

if (window.location.hash) {
  window.addEventListener("load", () => {
    document.querySelector(window.location.hash)?.scrollIntoView({ block: "start" });
  });
}

document.querySelectorAll("[data-project]").forEach((project) => {
  const frames = Array.from(project.querySelectorAll(".media-frame"));
  const prev = project.querySelector("[data-prev]");
  const next = project.querySelector("[data-next]");
  let index = 0;

  const show = (nextIndex) => {
    frames[index].classList.remove("is-active");
    index = (nextIndex + frames.length) % frames.length;
    frames[index].classList.add("is-active");
  };

  prev?.addEventListener("click", () => show(index - 1));
  next?.addEventListener("click", () => show(index + 1));
});

const chips = document.querySelectorAll("[data-filter]");
const entries = document.querySelectorAll("[data-entry]");
const registerCount = document.querySelector("[data-register-count]");

const applyRegisterFilter = (filter) => {
  let shown = 0;
  entries.forEach((entry) => {
    const visible = filter === "all" || (filter === "selected" ? entry.dataset.tier === "selected" : entry.dataset.entry === filter);
    entry.classList.toggle("is-hidden", !visible);
    if (visible) shown += 1;
  });
  if (registerCount) {
    registerCount.textContent = `${shown} ${shown === 1 ? "entry" : "entries"} shown`;
  }
};

chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    chips.forEach((c) => {
      const active = c === chip;
      c.classList.toggle("is-active", active);
      c.setAttribute("aria-pressed", String(active));
    });
    const filter = chip.dataset.filter;
    applyRegisterFilter(filter);
  });
});

const initialRegisterFilter = document.querySelector("[data-filter].is-active")?.dataset.filter;
if (initialRegisterFilter) applyRegisterFilter(initialRegisterFilter);

const pageMain = document.querySelector("main");
if (pageMain && !document.querySelector(".skip-link")) {
  if (!pageMain.id) pageMain.id = "main-content";
  const skipLink = document.createElement("a");
  skipLink.className = "skip-link";
  skipLink.href = `#${pageMain.id}`;
  skipLink.textContent = "Skip to main content";
  document.body.prepend(skipLink);
}

const copyEmail = document.querySelector("[data-copy-email]");
const copyStatus = document.querySelector("[data-copy-status]");
copyEmail?.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText("sg.work004@gmail.com");
    copyEmail.textContent = "Copied.";
    if (copyStatus) copyStatus.textContent = "Email address copied to clipboard.";
  } catch {
    copyEmail.textContent = "sg.work004@gmail.com";
    if (copyStatus) copyStatus.textContent = "Copy failed. Email address shown on screen.";
  }
});

const journey = document.querySelector(".hero-journey");
if (journey) {
  const stops = Array.from(journey.querySelectorAll(".journey-stop"));
  const kicker = journey.querySelector("[data-journey-kicker]");
  const title = journey.querySelector("[data-journey-title]");
  const copy = journey.querySelector("[data-journey-copy]");
  const link = journey.querySelector("[data-journey-link]");
  const stageCount = journey.querySelector("[data-stage-count]");

  const activateStage = (stop) => {
    stops.forEach((item) => {
      const active = item.dataset.stage === stop.dataset.stage;
      item.classList.toggle("is-active", active);
      if (active) item.setAttribute("aria-current", "true");
      else item.removeAttribute("aria-current");
    });
    journey.dataset.activeStage = stop.dataset.stage;
    if (kicker) kicker.textContent = stop.dataset.kicker;
    if (title) title.textContent = stop.dataset.title;
    if (copy) copy.textContent = stop.dataset.copy;
    if (link) link.href = stop.dataset.href;
    if (stageCount) stageCount.textContent = String(stop.dataset.stage).padStart(3, "0");
  };

  stops.forEach((stop) => {
    stop.addEventListener("pointerenter", () => activateStage(stop));
    stop.addEventListener("focus", () => activateStage(stop));
    stop.addEventListener("click", () => activateStage(stop));
  });

}

const tickerItems = document.querySelectorAll(".ticker-item");
if (tickerItems.length > 1) {
  const tickerCount = document.querySelector("[data-ticker-count]");
  let live = 0;
  tickerItems[live].classList.add("is-live");
  window.setInterval(() => {
    const leaving = tickerItems[live];
    leaving.classList.remove("is-live");
    leaving.classList.add("is-out");
    window.setTimeout(() => leaving.classList.remove("is-out"), 200);
    live = (live + 1) % tickerItems.length;
    tickerItems[live].classList.add("is-live");
    if (tickerCount) {
      tickerCount.textContent = `${live + 1} / ${tickerItems.length}`;
    }
  }, 4500);
}

const homePreviewContent = {
  YelloSKYE: {
    intro: "The role grew from isolated execution into a connected commercial operating layer.",
    sections: [
      ["Website", "Built the company website from sitemap and positioning through copy, design direction, launch, and SEO/GEO iterations."],
      ["Brand system", "Turned founder inputs, customer insight, and market research into one messaging system across the website, LinkedIn, sales collateral, and outreach."],
      ["Ops MIS", "Automated visibility across pipeline, WIP, delays, SLA health, bottlenecks, and weekly delivery forecasts."],
      ["Platform", "Supported product GTM through messaging, use-case narratives, sales collateral, and dashboard-led positioning."],
      ["Hiring", "Screened 150+ candidates across three roles and built evaluation frameworks that led to three final hires."]
    ]
  },
  "Rayden Design Studio": {
    intro: "The assignment was not to send more messages. It was to build a repeatable route from the right account to a real conversation.",
    sections: [
      ["Built", "Defined the ICP, assembled the prospect base, wrote the outreach logic, and documented the operating SOP."],
      ["Tested", "Iterated hooks, proof, sequencing, and follow-ups against live response patterns across three continents."],
      ["Learned", "Premium buyers respond to relevance and commercial clarity, not volume dressed up as personalization."]
    ]
  },
  "Hide & Sneak": {
    intro: "A live sales floor compressed buyer psychology into decisions that had to be read in real time.",
    sections: [
      ["Context", "Premium sneaker retail with high-consideration purchases, visible hesitation, and no room for abstract selling advice."],
      ["Practice", "Read taste, surfaced objections, adjusted the recommendation, and built trust without forcing the close."],
      ["Result", "Closed more than 50 deals worth ₹6L+, including a highest single sale of ₹48.4k."]
    ]
  },
  "KOEL Research": {
    intro: "The work moved from field signal to a decision room, with every conclusion traceable to a real conversation.",
    sections: [
      ["Fieldwork", "Ran 73 structured interviews across five Maharashtra cities and hand-transcribed the conversations."],
      ["Synthesis", "Clustered more than 1,000 data points into patterns around adoption, trust, service, and purchase behavior."],
      ["Outcome", "Presented the findings to the Managing Director, where the research moved into live strategic discussion."]
    ]
  },
  "History Lit Fest": {
    intro: "A distribution problem solved street by street, café by café, and rejection by rejection.",
    sections: [
      ["Route", "Mapped relevant neighborhoods and built a ground-level outreach plan around cafés, colleges, and cultural pockets."],
      ["Execution", "Pitched venues directly, tracked responses, and changed the approach as local patterns became visible."],
      ["Outcome", "Helped the festival reach more than 5,000 people without relying on a large paid distribution engine."]
    ]
  },
  "Digital Marketing": {
    intro: "A zero-budget acquisition experiment built to prove that distribution mechanics matter more than polished theory.",
    sections: [
      ["Funnel", "Combined on-foot lead capture, cold calls, and free-tool automation into one simple conversion path."],
      ["Iteration", "Changed timing, framing, and follow-up based on what prospects actually did rather than what the plan predicted."],
      ["Result", "Converted two paid registrations at 10 AM and fifteen by close, recovering momentum in the final hours."]
    ]
  },
  LifeOS: {
    intro: "A personal operating surface for reducing the distance between noticing something and acting on it.",
    sections: [
      ["Problem", "Planning, rituals, reviews, and decisions were spread across tools with no shared operating context."],
      ["Build", "Combined capture, tracking, review prompts, and AI-assisted reflection into one daily system."],
      ["Use", "Built for one demanding user, tested through actual routines rather than hypothetical product requirements."]
    ]
  },
  Meridian: {
    intro: "A weekly cockpit designed around speed of thought, not feature count.",
    sections: [
      ["Capture", "Record the signal before the moment disappears."],
      ["Pulse", "See whether the week is moving toward the stated priority."],
      ["Review", "Close the loop with a compact reflection before planning the next cycle."]
    ]
  },
  "Paisa Paisa": {
    intro: "A money interface built around visibility, because behavior changes faster when the pattern is difficult to ignore.",
    sections: [
      ["Input", "Capture spending without turning the act into another administrative task."],
      ["Pattern", "Translate transactions into visual signals about category, frequency, and cash movement."],
      ["Decision", "Use the pattern to correct behavior while the month is still in motion."]
    ]
  },
  Manager: {
    intro: "The subscription decision became a product brief: build a planning environment that matched how an operator actually moves between immediate execution and longer planning horizons.",
    sections: [
      ["Operating rhythm", "Connected daily notes, weekly planning, and quarterly direction inside one working system."],
      ["Infrastructure", "Built local Markdown storage, calendar logic, file watching, themes, importers, and extensible desktop utilities."],
      ["Release", "Packaged and signed the production macOS app after passing core, TypeScript, Rust, Vite, and signature checks."]
    ]
  },
  ProofLog: {
    intro: "Work was happening faster than it could be remembered, explained, or converted into evidence. ProofLog closes that gap while the context is still alive.",
    sections: [
      ["Capture", "Records the work, impact, approach, time, status, projects, links, and supporting proof."],
      ["Organise", "Groups activity across projects and boards without losing the original evidence trail."],
      ["Communicate", "Turns raw logs into weekly updates, standups, executive briefs, retrospectives, and content directions."]
    ]
  },
  "Second Brain": {
    intro: "A file-native operating memory designed to connect work, learning, people, meetings, principles, and output instead of leaving them trapped in separate apps.",
    sections: [
      ["Structure", "Separates raw inbox material from maintained wiki pages, periodic reflection, and published output."],
      ["Connections", "Links projects, frameworks, sources, people, and reflections into one navigable graph."],
      ["Application", "Used the archive to recover evidence, sharpen positioning, and shape the body of work presented on this site."]
    ]
  },
  BrainDrop: {
    intro: "The capture problem was not storage. It was the friction between noticing something and getting it into the system before the thought disappeared.",
    sections: [
      ["Capture", "Accepts dragged files, valid web links, or typed thoughts from a lightweight menu-bar panel."],
      ["Route", "Sends each input to the correct local Second Brain inbox while preserving filenames and timestamps."],
      ["Operate", "Runs as a native macOS accessory with a global shortcut, single-instance protection, and a local-first workflow."]
    ]
  },
  "Playing With Freedom": {
    intro: "An essay about what happens after the script disappears and choice becomes responsibility.",
    sections: [
      ["Tension", "Freedom sounds expansive until there is no external structure left to blame."],
      ["Argument", "Agency is not the absence of constraint. It is the willingness to choose and carry the consequence."],
      ["Question", "What do you build when nobody is assigning the next move?"]
    ]
  },
  "Dis-traction": {
    intro: "A closer look at why attention problems are often treated as tool problems instead of decision problems.",
    sections: [
      ["Tension", "Removing notifications does not help if every open loop is still competing for importance."],
      ["Argument", "Focus begins with deciding what deserves exclusion, not finding a more sophisticated timer."],
      ["Practice", "Reduce unresolved choices before trying to increase concentration."]
    ]
  },
  "'Don't Give Up' Is Bad Advice": {
    intro: "A case for treating quitting as a judgment call rather than a character failure.",
    sections: [
      ["Tension", "Persistence is praised even when the original reason for continuing has disappeared."],
      ["Argument", "The sharper move is sometimes to stop cleanly, preserve the lesson, and redirect the effort."],
      ["Test", "If the goal, evidence, and opportunity cost have changed, the decision should be allowed to change too."]
    ]
  }
};

const homePreviewEditorial = {
  YelloSKYE: {
    hook: "Brand, operations, product, and hiring, built as one operating system.",
    outcome: "Website shipped. MIS automated. Platform GTM supported. Three hires completed.",
    takeaway: "Founder’s office work forces you to understand the whole machine, not just the part carrying your name.",
    tags: ["Positioning", "Website", "Ops MIS", "Product GTM", "Hiring"]
  },
  "Rayden Design Studio": {
    hook: "A premium outbound engine built from zero, then made repeatable.",
    outcome: "228 touches led to 34+ replies and 20+ meetings.",
    takeaway: "Good outbound is not a writing trick. It is a system for matching relevance, timing, proof, and follow-through.",
    tags: ["ICP", "Outbound", "Sales copy", "SOP"]
  },
  "Hide & Sneak": {
    hook: "The sales floor where buyer hesitation became readable.",
    outcome: "₹6L+ sold across more than 50 premium retail closes.",
    takeaway: "The buyer rarely states the real objection first. Trust is built by reading the pause before answering it.",
    tags: ["Live selling", "Buyer psychology", "Objections"]
  },
  "KOEL Research": {
    hook: "Field conversations carried all the way into a decision room.",
    outcome: "73 interviews became 1,000+ data points and a Managing Director presentation.",
    takeaway: "Research becomes commercially useful when the route from raw signal to recommendation remains visible.",
    tags: ["Field research", "Synthesis", "Strategy"]
  },
  "History Lit Fest": {
    hook: "A city-level distribution problem solved one gatekeeper at a time.",
    outcome: "61 cafés and 9 of 11 colleges helped the festival reach 5,000+ people.",
    takeaway: "Rejection becomes useful when every no changes the next pitch, route, or choice of gatekeeper.",
    tags: ["Distribution", "Outreach", "Partnerships"]
  },
  "Digital Marketing": {
    hook: "A zero-budget funnel rescued in the final hours.",
    outcome: "Two paid at 10 AM became fifteen by close, with ₹0 in ad spend.",
    takeaway: "When the budget is zero, speed of feedback matters more than elegance of plan.",
    tags: ["Conversion", "Cold calls", "Automation"]
  },
  LifeOS: {
    hook: "One daily surface for rituals, decisions, tracking, and review.",
    outcome: "Four fragmented behaviors moved into one operating loop.",
    takeaway: "A personal system earns its place by reducing friction on an ordinary day, not by looking impressive in a demo.",
    tags: ["Personal OS", "AI review", "Daily use"]
  },
  Meridian: {
    hook: "A weekly cockpit designed to preserve speed of thought.",
    outcome: "Capture, pulse, and review now happen inside one compact weekly loop.",
    takeaway: "The useful dashboard is the one that changes the next decision before the week disappears.",
    tags: ["Weekly review", "Vite", "Decision surface"]
  },
  "Paisa Paisa": {
    hook: "Money visibility designed to make behavior difficult to ignore.",
    outcome: "Transactions became a readable pattern instead of a monthly surprise.",
    takeaway: "Clarity changes behavior faster when the feedback arrives while the month is still in motion.",
    tags: ["Next.js", "Money", "Visualization"]
  },
  Manager: {
    hook: "A commercial-ready NotePlan alternative built around an operator’s day, week, and quarter.",
    outcome: "A signed macOS app moved planning, notes, calendars, review, and local Markdown into one operator-grade system.",
    takeaway: "The best planning system is not the one with the longest feature list. It is the one shaped around the cadence of the person making decisions.",
    tags: ["macOS", "Tauri", "Local Markdown", "Operator planning"]
  },
  ProofLog: {
    hook: "Work captured as evidence while the context is still alive.",
    outcome: "Raw activity now converts into five leadership-ready report formats without reconstructing the week from memory.",
    takeaway: "Visible work compounds. If the impact, decision, and proof are captured together, reporting becomes synthesis rather than archaeology.",
    tags: ["Work logs", "Proof", "Executive reporting", "Tauri"]
  },
  "Second Brain": {
    hook: "A file-native knowledge graph that turned accumulated context into usable operating memory.",
    outcome: "Projects, meetings, learning, people, and reflections became one connected archive that directly informed this site.",
    takeaway: "A second brain becomes valuable when it changes the quality of the next decision and output, not when it merely stores more notes.",
    tags: ["Obsidian", "Knowledge graph", "Local files", "Synthesis"]
  },
  BrainDrop: {
    hook: "A native capture inlet for anything worth keeping.",
    outcome: "Files, links, and raw thoughts now move into the Second Brain through one menu-bar action and a global shortcut.",
    takeaway: "Capture systems work when they preserve the signal before organisation becomes an excuse to postpone it.",
    tags: ["Swift", "macOS", "Menu bar", "Local-first"]
  },
  "Playing With Freedom": {
    hook: "What freedom feels like after the script disappears.",
    outcome: "An essay about choice, responsibility, and the discomfort of self-direction.",
    takeaway: "Agency is not the absence of constraint. It is the willingness to choose and carry the consequence.",
    tags: ["Identity", "Freedom", "Responsibility"],
    url: "https://letsenterprise.in/what-the-fck-do-i-do-now/"
  },
  "Dis-traction": {
    hook: "The focus problem underneath the notification problem.",
    outcome: "A sharper distinction between attention management and unresolved choice.",
    takeaway: "Focus begins with deciding what deserves exclusion, not finding a more sophisticated timer.",
    tags: ["Attention", "Focus", "Digital behavior"],
    url: "https://medium.com/@escapingaverage/dis-traction-why-were-missing-the-point-about-focus-in-the-digital-age-2c18522babbe"
  },
  "'Don't Give Up' Is Bad Advice": {
    hook: "A case for quitting as judgment, not failure.",
    outcome: "Persistence tested against changed goals, new evidence, and opportunity cost.",
    takeaway: "Stopping can be the higher-ownership move when the reason for continuing no longer survives scrutiny.",
    tags: ["Decisions", "Quitting", "Opportunity cost"],
    url: "https://medium.com/@escapingaverage/dont-give-up-is-bad-advice-here-s-why-c32a0ff7d5b9"
  }
};

document.querySelectorAll(".home-page .feature:not(.contact-feature), .home-page .pcard").forEach((card, index) => {
  const title = card.querySelector("h3")?.textContent.trim();
  const content = homePreviewContent[title];
  const editorial = homePreviewEditorial[title];
  const host = card.classList.contains("feature") ? card.querySelector(".feature-body") : card;
  const isWriting = Boolean(card.closest("#writing"));
  if (!content || !editorial || !host) return;

  host.querySelector(".field-note")?.remove();
  const lead = host.querySelector(".lead");
  if (lead) {
    lead.textContent = editorial.hook;
    lead.classList.add("preview-hook");
  }

  const details = document.createElement("details");
  const contentId = `preview-more-${index + 1}`;
  details.className = "preview-more";
  details.innerHTML = isWriting ? `
    <summary aria-controls="${contentId}">
      <span><strong>Read more</strong></span>
      <b aria-hidden="true">+</b>
    </summary>
    <div class="preview-more-body writing-more-body" id="${contentId}">
      <div class="writing-more-grid">
        <section>
          <small>The tension</small>
          <p>${content.intro}</p>
        </section>
        <section>
          <small>The argument</small>
          <p>${editorial.takeaway}</p>
        </section>
        <a class="writing-more-link" href="${editorial.url}" rel="noopener">Read the full essay <span>↗</span></a>
      </div>
    </div>
  ` : `
    <summary aria-controls="${contentId}">
      <span><strong>Read more</strong></span>
      <b aria-hidden="true">+</b>
    </summary>
    <div class="preview-more-body" id="${contentId}">
      <p class="preview-outcome"><span>→</span>${editorial.outcome}</p>
      <div class="preview-case-grid">
        <div class="preview-context">
          <section>
            <small>The situation</small>
            <p>${content.intro}</p>
          </section>
          <section>
            <small>What I took away</small>
            <p>${editorial.takeaway}</p>
          </section>
        </div>
        <div class="preview-shipped">
          <small>What moved</small>
          <ul>
            ${content.sections.map(([label, copy]) => `
              <li><strong>${label}</strong><span>${copy}</span></li>
            `).join("")}
          </ul>
          <div class="preview-tags">
            ${editorial.tags.map((tag) => `<span>${tag}</span>`).join("")}
          </div>
        </div>
      </div>
    </div>
  `;

  details.addEventListener("toggle", () => {
    const label = details.querySelector("summary strong");
    const icon = details.querySelector("summary b");
    if (label) label.textContent = details.open ? "Read less" : "Read more";
    if (icon) icon.textContent = details.open ? "−" : "+";
    card.classList.toggle("is-expanded", details.open);
  });

  (isWriting ? card : host).append(details);
});

document.querySelectorAll(".work-more").forEach((details) => {
  details.addEventListener("toggle", () => {
    const label = details.querySelector("summary span");
    if (label) label.textContent = details.open ? "Read less" : "Read more";
  });
});

document.querySelectorAll("[data-project-slideshow]").forEach((slideshow) => {
  const slides = Array.from(slideshow.querySelectorAll("[data-project-slide]"));
  const progress = slideshow.querySelector(".project-slideshow-progress");
  const count = slideshow.querySelector(".project-slideshow-count");
  const previous = slideshow.querySelector("[data-project-prev]");
  const next = slideshow.querySelector("[data-project-next]");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let current = 0;
  let timer;
  let pointerStartX = null;

  if (!slides.length || !progress) return;

  const selectors = slides.map((slide, index) => {
    slide.hidden = false;
    const button = document.createElement("button");
    button.type = "button";
    button.setAttribute("aria-label", `Show photograph ${index + 1} of ${slides.length}`);
    progress.append(button);
    return button;
  });

  const show = (nextIndex, restart = true) => {
    current = (nextIndex + slides.length) % slides.length;
    slides.forEach((slide, index) => {
      const active = index === current;
      slide.classList.toggle("is-active", active);
      slide.setAttribute("aria-hidden", String(!active));
    });
    selectors.forEach((button, index) => {
      const active = index === current;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-current", active ? "true" : "false");
    });
    if (count) {
      count.textContent = `${String(current + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
    }
    if (restart) start();
  };

  const stop = () => {
    window.clearInterval(timer);
  };

  const start = () => {
    stop();
    if (!reduceMotion && !document.hidden) {
      timer = window.setInterval(() => show(current + 1, false), 4800);
    }
  };

  previous?.addEventListener("click", () => show(current - 1));
  next?.addEventListener("click", () => show(current + 1));
  selectors.forEach((button, index) => button.addEventListener("click", () => show(index)));
  slideshow.addEventListener("pointerenter", stop);
  slideshow.addEventListener("pointerleave", start);
  slideshow.addEventListener("focusin", stop);
  slideshow.addEventListener("focusout", (event) => {
    if (!slideshow.contains(event.relatedTarget)) start();
  });
  slideshow.addEventListener("pointerdown", (event) => {
    pointerStartX = event.clientX;
  });
  slideshow.addEventListener("pointerup", (event) => {
    if (pointerStartX === null) return;
    const distance = event.clientX - pointerStartX;
    pointerStartX = null;
    if (Math.abs(distance) > 45) show(current + (distance < 0 ? 1 : -1));
  });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stop();
    else start();
  });

  show(0);
});

document.querySelectorAll(".ledger-more").forEach((details) => {
  const updateLabel = () => {
    const label = details.querySelector("summary strong");
    if (label) {
      label.textContent = details.open ? "Read less" : "Read more";
    }
  };

  details.addEventListener("toggle", updateLabel);
  updateLabel();
});
