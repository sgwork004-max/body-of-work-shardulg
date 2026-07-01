"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

/* ═══════════════════════════════════════════════════════════════════════════
   INTERACTIVE MIND MAP
   Each node is clickable — smooth-scrolls to the work card and opens it.
   ═══════════════════════════════════════════════════════════════════════════ */

interface MapNode {
  id: string;
  label: string;
  role: string;
  stat: string;
  cx: number;
  cy: number;
  w: number;
  h: number;
  target: string;   // DOM id to scroll to
  isCurrent?: boolean;
  isProject?: boolean;
}

// ViewBox: 1100 × 680  Centre: (550, 340)
const NODES: MapNode[] = [
  {
    id: "yelloskye", label: "YelloSKYE", role: "Founder's Office",
    stat: "current ●", cx: 845, cy: 95, w: 178, h: 65,
    target: "work-yelloskye", isCurrent: true,
  },
  {
    id: "koel", label: "KOEL Research", role: "Research & Strategy",
    stat: "73 interviews · 5 cities", cx: 295, cy: 80, w: 178, h: 65,
    target: "projects", isProject: true,
  },
  {
    id: "therefore", label: "Therefore Design", role: "Business Dev",
    stat: "200+ reach-outs", cx: 80, cy: 262, w: 172, h: 65,
    target: "work-therefore",
  },
  {
    id: "rayden", label: "Rayden Design", role: "Business Dev",
    stat: "228 outreaches", cx: 968, cy: 335, w: 164, h: 65,
    target: "work-rayden",
  },
  {
    id: "hide-and-sneak", label: "Hide & Sneak", role: "Sales & Retail",
    stat: "₹6L in sales", cx: 118, cy: 565, w: 164, h: 65,
    target: "work-hide-and-sneak",
  },
  {
    id: "projects", label: "Projects", role: "10+ sprints",
    stat: "500+ hours", cx: 840, cy: 570, w: 150, h: 65,
    target: "projects", isProject: true,
  },
];

// Cubic bezier paths from center oval to each node
const PATHS: Record<string, string> = {
  yelloskye:        "M 622 316 C 700 240 770 165 756 128",
  koel:             "M 484 316 C 428 228 372 155 384 113",
  therefore:        "M 462 336 C 360 314 242 280 166 262",
  rayden:           "M 638 342 C 742 340 858 337 886 335",
  "hide-and-sneak": "M 474 370 C 378 452 248 526 200 562",
  projects:         "M 622 370 C 714 456 800 538 765 553",
};

function WorkMap() {
  const [drawn, setDrawn] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setDrawn(true), 280);
    return () => clearTimeout(t);
  }, []);

  const handleClick = (node: MapNode) => {
    const el = document.getElementById(node.target);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      if (!node.isProject) {
        setTimeout(() => {
          window.dispatchEvent(
            new CustomEvent("open-work-card", { detail: { id: node.id } })
          );
        }, 680);
      }
    }
  };

  const lineStyle = (id: string, delay: number): React.CSSProperties => ({
    strokeDasharray: 500,
    strokeDashoffset: drawn ? 0 : 500,
    transition: `stroke-dashoffset 1.1s cubic-bezier(0.4,0,0.2,1) ${delay}s`,
  });

  const fade = (delay: number): React.CSSProperties => ({
    opacity: drawn ? 1 : 0,
    transition: `opacity 0.4s ease ${delay}s`,
  });

  return (
    <svg
      viewBox="0 0 1100 680"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      style={{ overflow: "visible" }}
      aria-label="Shardul's body of work — click any node to explore"
    >
      {/* ── Outer decorative ring ── */}
      <ellipse cx="550" cy="340" rx="195" ry="160"
        stroke="rgb(var(--color-line))" strokeWidth="1" strokeDasharray="6 8"
        fill="none" style={fade(0.1)} />

      {/* ── Connection paths ── */}
      {Object.entries(PATHS).map(([id, d], i) => (
        <path
          key={id}
          d={d}
          stroke="rgb(var(--color-line-dark))"
          strokeWidth={hovered === id ? 2.5 : 1.8}
          strokeLinecap="round"
          fill="none"
          style={{
            ...lineStyle(id, 0.15 + i * 0.12),
            opacity: hovered && hovered !== id ? 0.35 : 1,
            transition: `stroke-dashoffset 1.1s cubic-bezier(0.4,0,0.2,1) ${0.15 + i * 0.12}s, stroke-width 0.2s ease, opacity 0.2s ease`,
          }}
        />
      ))}

      {/* ── Centre node ── */}
      <ellipse cx="550" cy="340" rx="88" ry="42"
        fill="rgb(var(--color-yellow))" fillOpacity="0.9"
        stroke="rgb(var(--color-line-dark))" strokeWidth="1.5"
        style={fade(0.05)} />
      <text x="550" y="334" textAnchor="middle"
        fontFamily="var(--font-space)" fontSize="22" fontWeight="700"
        fill="rgb(var(--color-ink))" style={fade(0.1)}>
        Shardul
      </text>
      <text x="550" y="354" textAnchor="middle"
        fontFamily="var(--font-caveat)" fontSize="14"
        fill="rgb(var(--color-ink-muted))" style={fade(0.15)}>
        body of work
      </text>

      {/* ── Experience nodes ── */}
      {NODES.map((node, i) => {
        const isHov = hovered === node.id;
        const bgFill = node.isCurrent
          ? `rgb(var(--color-yellow) / ${isHov ? "0.9" : "0.45"})`
          : node.isProject
          ? `rgb(var(--color-surface-alt))`
          : `rgb(var(--color-surface))`;
        const borderColor = isHov
          ? "rgb(var(--color-yellow))"
          : node.isCurrent
          ? "rgb(var(--color-yellow))"
          : "rgb(var(--color-line-dark))";

        return (
          <g
            key={node.id}
            onClick={() => handleClick(node)}
            onMouseEnter={() => setHovered(node.id)}
            onMouseLeave={() => setHovered(null)}
            style={{
              cursor: "pointer",
              ...fade(0.25 + i * 0.13),
            }}
          >
            {/* Shadow / glow on hover */}
            {isHov && (
              <rect
                x={node.cx - node.w / 2 - 4}
                y={node.cy - node.h / 2 - 4}
                width={node.w + 8}
                height={node.h + 8}
                rx="8"
                fill="rgb(var(--color-yellow))"
                fillOpacity="0.12"
              />
            )}

            {/* Node background */}
            <rect
              x={node.cx - node.w / 2}
              y={node.cy - node.h / 2}
              width={node.w}
              height={node.h}
              rx="5"
              fill={bgFill}
              stroke={borderColor}
              strokeWidth={isHov ? 1.8 : 1.2}
            />

            {/* Current indicator dot */}
            {node.isCurrent && (
              <circle
                cx={node.cx + node.w / 2 - 10}
                cy={node.cy - node.h / 2 + 10}
                r="4"
                fill="#22C55E"
              />
            )}

            {/* Label */}
            <text
              x={node.cx}
              y={node.cy - 8}
              textAnchor="middle"
              fontFamily="var(--font-space)"
              fontSize="15"
              fontWeight="600"
              fill="rgb(var(--color-ink))"
            >
              {node.label}
            </text>

            {/* Role */}
            <text
              x={node.cx}
              y={node.cy + 8}
              textAnchor="middle"
              fontFamily="var(--font-caveat)"
              fontSize="13"
              fill="rgb(var(--color-ink-faint))"
            >
              {node.role}
            </text>

            {/* Stat */}
            <text
              x={node.cx}
              y={node.cy + 24}
              textAnchor="middle"
              fontFamily="var(--font-mono)"
              fontSize="10"
              letterSpacing="0.08em"
              fill={node.isCurrent ? "rgb(var(--color-ink-muted))" : "rgb(var(--color-ink-faint))"}
            >
              {node.stat}
            </text>

            {/* Hover CTA arrow */}
            {isHov && (
              <text
                x={node.cx + node.w / 2 - 14}
                y={node.cy + 5}
                textAnchor="middle"
                fontFamily="var(--font-mono)"
                fontSize="14"
                fill="rgb(var(--color-ink-muted))"
              >
                →
              </text>
            )}
          </g>
        );
      })}

      {/* ── "click to explore" hint ── */}
      <text
        x="550" y="660"
        textAnchor="middle"
        fontFamily="var(--font-caveat)"
        fontSize="14"
        fill="rgb(var(--color-ink-faint))"
        style={fade(1.4)}
      >
        click any node to explore the full story
      </text>
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   HERO
   ═══════════════════════════════════════════════════════════════════════════ */
export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-paper"
    >
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid pointer-events-none" style={{ opacity: 0.22 }} />
      {/* Bottom fade */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent 50%, rgb(var(--color-paper)) 90%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-14 pt-28 pb-16 w-full">
        <div className="grid md:grid-cols-[360px_1fr] gap-6 md:gap-8 items-center">

          {/* LEFT */}
          <div className="order-2 md:order-1">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="w-6 h-px bg-line-dark" />
              <span className="label-accent">Body of Work — Shardul Gupta</span>
            </motion.div>

            {/* Title */}
            {["Figuring out", "how to figure", "things out."].map((line, i) => (
              <div key={i} className="overflow-hidden">
                <motion.h1
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.75, delay: 0.18 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className={`font-display font-semibold leading-[1.06] ${i === 2 ? "mb-9" : "mb-0"}`}
                  style={{ fontSize: "clamp(2.6rem, 5.8vw, 5rem)" }}
                >
                  {i === 2 ? (
                    <span className="highlight-yellow">things out.</span>
                  ) : (
                    <span className="text-ink">{line}</span>
                  )}
                </motion.h1>
              </div>
            ))}

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.58 }}
              className="text-ink-muted text-base leading-relaxed max-w-md mb-10"
            >
              Five companies. Two years. Sales, brand, research, hiring, and GTM —
              each one owned end-to-end.<br />I walk into ambiguous problems and ship outcomes.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.78 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href="#work"
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-ink text-paper text-sm font-medium hover:bg-yellow hover:text-ink transition-colors duration-200"
              >
                See the work
                <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block">→</span>
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-line text-ink-muted text-sm hover:border-ink hover:text-ink transition-colors duration-200"
              >
                Who I am
              </a>
            </motion.div>

            {/* Annotation */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="font-sketch text-ink-faint mt-6"
            >
              research → sales → strategy → execution ↓
            </motion.p>
          </div>

          {/* RIGHT — Interactive mind map */}
          <motion.div
            className="order-1 md:order-2 w-full"
            style={{ minHeight: 640 }}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.12 }}
          >
            <WorkMap />
          </motion.div>
        </div>
      </div>

      {/* Scroll nudge */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-ink-faint text-xs"
        >
          ↓
        </motion.div>
        <span className="font-sketch text-ink-faint" style={{ fontSize: "0.95rem" }}>scroll</span>
      </motion.div>
    </section>
  );
}
