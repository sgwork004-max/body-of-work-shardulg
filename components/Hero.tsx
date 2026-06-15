"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

/* ═══════════════════════════════════════════════════════════════════
   CONSULTANT MIND MAP
   Three functional domains radiate from a center node.
   Nodes: square/dot markers + typography. No rectangles.
   Bezier lines animate in sequentially on mount.
   ═══════════════════════════════════════════════════════════════════ */

interface CompanyNode {
  name: string;
  sub: string;
  dx: number;
  dy: number;
  major?: boolean;
  isCurrent?: boolean;
  cardId?: string;
  scrollTarget?: string;
}

// Center of the SVG
const CX = 580;
const CY = 320;

// Domain junction node positions
const D_RESEARCH = { x: 178, y: 320 };
const D_SALES    = { x: 1062, y: 142 };
const D_BRAND    = { x: 1062, y: 508 };

// Company nodes — left arm (Research)
const RESEARCH: CompanyNode[] = [
  {
    name: "KOEL Research",
    sub:  "73 interviews · 5 cities · MD boardroom",
    dx: 62, dy: 162, major: true,
    cardId: "koel", scrollTarget: "projects",
  },
  {
    name: "Stahl",
    sub:  "5 domains in 5 weeks · retail to legal",
    dx: 56, dy: 320, major: true,
    cardId: "stahl-5week", scrollTarget: "projects",
  },
  {
    name: "Field Immersion",
    sub:  "Wardha · UP · hand-drawn village maps",
    dx: 62, dy: 478, major: false,
    scrollTarget: "arc",
  },
];

// Company nodes — top-right arm (Sales & BD)
const SALES: CompanyNode[] = [
  {
    name: "Hide & Sneak",
    sub:  "₹6L · 432 hrs on floor · 50+ deals",
    dx: 1338, dy: 48, major: true,
    cardId: "hide-and-sneak", scrollTarget: "work",
  },
  {
    name: "Rayden Design",
    sub:  "228 outreaches · 20+ meetings",
    dx: 1338, dy: 158, major: true,
    cardId: "rayden", scrollTarget: "work",
  },
  {
    name: "Therefore Design",
    sub:  "200+ reach-outs · 328 hrs · 9 weeks",
    dx: 1338, dy: 268, major: true,
    cardId: "therefore", scrollTarget: "work",
  },
  {
    name: "History Lit Fest",
    sub:  "113 cafes · 9 colleges · 26 meetings in a day",
    dx: 1338, dy: 378, major: false,
    cardId: "history-lit-fest", scrollTarget: "projects",
  },
];

// Company nodes — bottom-right arm (Brand & Ops)
const BRAND: CompanyNode[] = [
  {
    name: "YelloSKYE",
    sub:  "current · Brand · Website · Hiring",
    dx: 1338, dy: 418, major: true, isCurrent: true,
    cardId: "yelloskye", scrollTarget: "work",
  },
  {
    name: "Brand + Content",
    sub:  "CLV mapping · Amazon PDPs · brand messaging",
    dx: 1338, dy: 518, major: false,
    cardId: "yelloskye", scrollTarget: "work",
  },
  {
    name: "MIS + 3 hires",
    sub:  "Automated at 18:30 daily · 80+ candidates screened",
    dx: 1338, dy: 618, major: false,
    cardId: "yelloskye", scrollTarget: "work",
  },
];

// Cubic bezier: center → domain junction
const ctod = (dx: number, dy: number) => {
  const mx = (CX + dx) / 2;
  return `M ${CX} ${CY} C ${mx} ${CY} ${mx} ${dy} ${dx} ${dy}`;
};

// Cubic bezier: domain junction → company dot
const dtoc = (ax: number, ay: number, bx: number, by: number) => {
  const mx = (ax + bx) / 2;
  return `M ${ax} ${ay} C ${mx} ${ay} ${mx} ${by} ${bx} ${by}`;
};

/* ──────────────────────────────────────────────── */

function ConsultantMap() {
  const [drawn, setDrawn] = useState(false);
  const [hoverId, setHoverId] = useState<string | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setDrawn(true), 320);
    return () => clearTimeout(t);
  }, []);

  const fade = (delay: number): React.CSSProperties => ({
    opacity: drawn ? 1 : 0,
    transition: `opacity 0.5s ease ${delay}s`,
  });

  const dash = (delay: number, len = 520): React.CSSProperties => ({
    strokeDasharray: len,
    strokeDashoffset: drawn ? 0 : len,
    transition: `stroke-dashoffset 1.0s cubic-bezier(0.4,0,0.2,1) ${delay}s`,
  });

  const handleClick = (node: CompanyNode) => {
    const target = node.scrollTarget ? document.getElementById(node.scrollTarget) : null;
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      if (node.cardId) {
        setTimeout(() => {
          window.dispatchEvent(
            new CustomEvent("open-work-card", { detail: { id: node.cardId } })
          );
        }, 680);
      }
    }
  };

  return (
    <svg
      viewBox="0 0 1400 680"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      style={{ overflow: "visible" }}
      aria-label="Shardul's body of work — three domains, nine companies"
    >
      {/* ── CENTER → DOMAIN BEZIERS (thick, primary) ── */}
      <path d={ctod(D_RESEARCH.x, D_RESEARCH.y)}
        stroke="rgb(var(--color-line-dark))" strokeWidth="2" strokeLinecap="round"
        style={dash(0.1, 480)} />
      <path d={ctod(D_SALES.x, D_SALES.y)}
        stroke="rgb(var(--color-line-dark))" strokeWidth="2" strokeLinecap="round"
        style={dash(0.2, 560)} />
      <path d={ctod(D_BRAND.x, D_BRAND.y)}
        stroke="rgb(var(--color-line-dark))" strokeWidth="2" strokeLinecap="round"
        style={dash(0.3, 560)} />

      {/* ── DOMAIN → COMPANY BEZIERS (thin, secondary) ── */}
      {RESEARCH.map((c, i) => (
        <path key={`rl${i}`}
          d={dtoc(D_RESEARCH.x, D_RESEARCH.y, c.dx, c.dy)}
          stroke="rgb(var(--color-line))" strokeWidth="1.2" strokeLinecap="round"
          style={dash(0.48 + i * 0.13, 380)} />
      ))}
      {SALES.map((c, i) => (
        <path key={`sl${i}`}
          d={dtoc(D_SALES.x, D_SALES.y, c.dx, c.dy)}
          stroke="rgb(var(--color-line))" strokeWidth="1.2" strokeLinecap="round"
          style={dash(0.52 + i * 0.13, 400)} />
      ))}
      {BRAND.map((c, i) => (
        <path key={`bl${i}`}
          d={dtoc(D_BRAND.x, D_BRAND.y, c.dx, c.dy)}
          stroke="rgb(var(--color-line))" strokeWidth="1.2" strokeLinecap="round"
          style={dash(0.58 + i * 0.13, 400)} />
      ))}

      {/* ══════════════════════════════════════════════
          CENTER NODE
      ══════════════════════════════════════════════ */}
      <ellipse cx={CX} cy={CY} rx={116} ry={54}
        fill="#FFE141" fillOpacity="0.2"
        stroke="rgb(var(--color-line-dark))" strokeWidth="1.5"
        style={fade(0)} />
      <text x={CX} y={CY - 9}
        textAnchor="middle"
        fontFamily="var(--font-space)"
        fontSize="22" fontWeight="700"
        fill="rgb(var(--color-ink))"
        style={fade(0.06)}>
        Shardul Gupta
      </text>
      <text x={CX} y={CY + 14}
        textAnchor="middle"
        fontFamily="var(--font-caveat)"
        fontSize="16"
        fill="rgb(var(--color-ink-muted))"
        style={fade(0.12)}>
        body of work · 2023 – 2026
      </text>

      {/* ══════════════════════════════════════════════
          DOMAIN NODE — Research (LEFT)
      ══════════════════════════════════════════════ */}
      <circle cx={D_RESEARCH.x} cy={D_RESEARCH.y} r={8}
        fill="#FFE141"
        stroke="rgb(var(--color-ink))" strokeWidth="1.5"
        style={fade(0.2)} />
      {/* Label above-left */}
      <text
        x={D_RESEARCH.x - 18} y={D_RESEARCH.y - 16}
        textAnchor="end"
        fontFamily="var(--font-mono)"
        fontSize="10"
        fill="rgb(var(--color-ink-faint))"
        letterSpacing="3"
        style={fade(0.22)}>
        RESEARCH &amp; INSIGHT
      </text>
      <line
        x1={D_RESEARCH.x - 18} y1={D_RESEARCH.y - 10}
        x2={D_RESEARCH.x - 128} y2={D_RESEARCH.y - 10}
        stroke="#FFE141" strokeWidth="2"
        style={fade(0.24)} />

      {/* ══════════════════════════════════════════════
          DOMAIN NODE — Sales & BD (TOP RIGHT)
      ══════════════════════════════════════════════ */}
      <circle cx={D_SALES.x} cy={D_SALES.y} r={8}
        fill="#FFE141"
        stroke="rgb(var(--color-ink))" strokeWidth="1.5"
        style={fade(0.28)} />
      <text
        x={D_SALES.x + 18} y={D_SALES.y - 16}
        textAnchor="start"
        fontFamily="var(--font-mono)"
        fontSize="10"
        fill="rgb(var(--color-ink-faint))"
        letterSpacing="3"
        style={fade(0.30)}>
        SALES &amp; BD
      </text>
      <line
        x1={D_SALES.x + 18} y1={D_SALES.y - 10}
        x2={D_SALES.x + 98} y2={D_SALES.y - 10}
        stroke="#FFE141" strokeWidth="2"
        style={fade(0.32)} />

      {/* ══════════════════════════════════════════════
          DOMAIN NODE — Brand & Ops (BOTTOM RIGHT)
      ══════════════════════════════════════════════ */}
      <circle cx={D_BRAND.x} cy={D_BRAND.y} r={8}
        fill="rgb(var(--color-surface-alt))"
        stroke="rgb(var(--color-line-dark))" strokeWidth="1.5"
        style={fade(0.34)} />
      <text
        x={D_BRAND.x + 18} y={D_BRAND.y - 16}
        textAnchor="start"
        fontFamily="var(--font-mono)"
        fontSize="10"
        fill="rgb(var(--color-ink-faint))"
        letterSpacing="3"
        style={fade(0.36)}>
        BRAND &amp; OPS
      </text>
      <line
        x1={D_BRAND.x + 18} y1={D_BRAND.y - 10}
        x2={D_BRAND.x + 98} y2={D_BRAND.y - 10}
        stroke="rgb(var(--color-line-dark))" strokeWidth="1.5"
        style={fade(0.38)} />

      {/* ══════════════════════════════════════════════
          COMPANY NODES — Research (left, text right of dot)
      ══════════════════════════════════════════════ */}
      {RESEARCH.map((c, i) => {
        const hov = hoverId === `r${i}`;
        return (
          <g key={`rn${i}`}
            onClick={() => handleClick(c)}
            onMouseEnter={() => setHoverId(`r${i}`)}
            onMouseLeave={() => setHoverId(null)}
            style={{ cursor: "pointer", ...fade(0.62 + i * 0.11) }}
          >
            <rect
              x={c.dx - 5} y={c.dy - 5}
              width={10} height={10}
              fill={c.major ? "#FFE141" : "rgb(var(--color-paper))"}
              stroke={c.major ? "rgb(var(--color-ink))" : "rgb(var(--color-line-dark))"}
              strokeWidth="1.5"
            />
            <text
              x={c.dx + 16} y={c.dy + 4}
              textAnchor="start"
              fontFamily="var(--font-space)"
              fontSize="14" fontWeight="600"
              fill={hov ? "#C8A800" : "rgb(var(--color-ink))"}
            >
              {c.name}
            </text>
            <text
              x={c.dx + 16} y={c.dy + 20}
              textAnchor="start"
              fontFamily="var(--font-caveat)"
              fontSize="13"
              fill="rgb(var(--color-ink-faint))"
            >
              {c.sub}
            </text>
          </g>
        );
      })}

      {/* ══════════════════════════════════════════════
          COMPANY NODES — Sales (right, text left of dot)
      ══════════════════════════════════════════════ */}
      {SALES.map((c, i) => {
        const hov = hoverId === `s${i}`;
        return (
          <g key={`sn${i}`}
            onClick={() => handleClick(c)}
            onMouseEnter={() => setHoverId(`s${i}`)}
            onMouseLeave={() => setHoverId(null)}
            style={{ cursor: "pointer", ...fade(0.67 + i * 0.11) }}
          >
            <rect
              x={c.dx - 5} y={c.dy - 5}
              width={10} height={10}
              fill={c.major ? "#FFE141" : "rgb(var(--color-paper))"}
              stroke={c.major ? "rgb(var(--color-ink))" : "rgb(var(--color-line-dark))"}
              strokeWidth="1.5"
            />
            <text
              x={c.dx - 16} y={c.dy + 4}
              textAnchor="end"
              fontFamily="var(--font-space)"
              fontSize="14" fontWeight="600"
              fill={hov ? "#C8A800" : "rgb(var(--color-ink))"}
            >
              {c.name}
            </text>
            <text
              x={c.dx - 16} y={c.dy + 20}
              textAnchor="end"
              fontFamily="var(--font-caveat)"
              fontSize="13"
              fill="rgb(var(--color-ink-faint))"
            >
              {c.sub}
            </text>
          </g>
        );
      })}

      {/* ══════════════════════════════════════════════
          COMPANY NODES — Brand (right, text left of dot)
      ══════════════════════════════════════════════ */}
      {BRAND.map((c, i) => {
        const hov = hoverId === `b${i}`;
        return (
          <g key={`bn${i}`}
            onClick={() => handleClick(c)}
            onMouseEnter={() => setHoverId(`b${i}`)}
            onMouseLeave={() => setHoverId(null)}
            style={{ cursor: "pointer", ...fade(0.72 + i * 0.11) }}
          >
            {/* Current indicator — green live dot for YelloSKYE */}
            {c.isCurrent && (
              <circle cx={c.dx + 6} cy={c.dy - 8} r={4} fill="#22C55E" style={fade(0.78)} />
            )}
            <rect
              x={c.dx - 5} y={c.dy - 5}
              width={10} height={10}
              fill={c.major ? "#FFE141" : "rgb(var(--color-paper))"}
              stroke={c.major ? "rgb(var(--color-ink))" : "rgb(var(--color-line-dark))"}
              strokeWidth="1.5"
            />
            <text
              x={c.dx - 16} y={c.dy + 4}
              textAnchor="end"
              fontFamily="var(--font-space)"
              fontSize="14" fontWeight="600"
              fill={hov ? "#C8A800" : "rgb(var(--color-ink))"}
            >
              {c.name}
            </text>
            <text
              x={c.dx - 16} y={c.dy + 20}
              textAnchor="end"
              fontFamily="var(--font-caveat)"
              fontSize="13"
              fill="rgb(var(--color-ink-faint))"
            >
              {c.sub}
            </text>
          </g>
        );
      })}

      {/* ── Interaction hint ── */}
      <text
        x={CX} y={656}
        textAnchor="middle"
        fontFamily="var(--font-caveat)"
        fontSize="13"
        fill="rgb(var(--color-ink-faint))"
        style={fade(1.5)}
      >
        click any node to explore the full story
      </text>
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   HERO
   Full-screen consultant mind map.
   Copy and CTA anchored to bottom strip.
   Mobile: simplified text layout.
   ═══════════════════════════════════════════════════════════════════════════ */

const MOBILE_DOMAINS = [
  { label: "Research & Insight", stat: "73 interviews · 5 cities" },
  { label: "Sales & BD",         stat: "228 outreaches · 20+ meetings" },
  { label: "Brand & Ops",        stat: "YelloSKYE · 3 hires · MIS" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col overflow-hidden bg-paper"
    >
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid pointer-events-none" style={{ opacity: 0.2 }} />

      {/* ── DESKTOP: Full consultant map ── */}
      <motion.div
        className="hidden md:flex flex-1 items-center justify-center px-6 lg:px-10 pt-10 pb-0"
        initial={{ opacity: 0, scale: 0.975 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
      >
        <ConsultantMap />
      </motion.div>

      {/* ── MOBILE: Text layout ── */}
      <div className="md:hidden flex-1 flex flex-col justify-center px-6 pt-24 pb-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-5 h-px bg-line-dark" />
            <span className="label-accent">Body of Work · 2023–2026</span>
          </div>
          <h1
            className="font-display font-semibold text-ink leading-tight mb-8"
            style={{ fontSize: "clamp(2.2rem, 10vw, 3.2rem)" }}
          >
            Three years.<br />
            <span className="highlight-yellow">Always figured it out.</span>
          </h1>

          {/* Domain list */}
          <div className="space-y-4 mb-10">
            {MOBILE_DOMAINS.map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="flex flex-col gap-0.5 border-l-2 border-yellow pl-4"
              >
                <span className="font-mono text-[0.6rem] tracking-widest uppercase text-ink-faint">{d.label}</span>
                <span className="font-sketch text-base text-ink-muted">{d.stat}</span>
              </motion.div>
            ))}
          </div>

          <motion.a
            href="#work"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85 }}
            className="group inline-flex items-center gap-2 px-7 py-3.5 bg-ink text-paper text-sm font-medium hover:bg-yellow hover:text-ink transition-colors duration-200"
          >
            See the work
            <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
          </motion.a>
        </motion.div>
      </div>

      {/* ── BOTTOM STRIP: Title + CTA (desktop only) ── */}
      <div className="hidden md:block relative z-10 border-t border-line">
        <div className="max-w-7xl mx-auto px-8 lg:px-14 py-3.5 flex items-center justify-between gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05, duration: 0.4 }}
              className="flex items-center gap-3 mb-1"
            >
              <span className="w-5 h-px bg-line-dark" />
              <span className="label-accent">Body of Work — Shardul Gupta</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.18, duration: 0.5 }}
              className="font-display font-semibold text-ink leading-tight"
              style={{ fontSize: "clamp(1.2rem, 2.2vw, 2rem)" }}
            >
              Three years.{" "}
              <span className="highlight-yellow">Always figured it out.</span>
            </motion.h1>
          </div>
          <motion.a
            href="#work"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.35 }}
            className="group inline-flex items-center gap-2 px-6 py-3 bg-ink text-paper text-sm font-medium hover:bg-yellow hover:text-ink transition-colors duration-200 shrink-0"
          >
            See the work
            <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
