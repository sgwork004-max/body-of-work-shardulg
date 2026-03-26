"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

/* ─────────────────────────────────────────────────────────────
   Full Work Map — all 4 companies + key projects as one diagram
   ──────────────────────────────────────────────────────────── */
function WorkMap() {
  const [drawn, setDrawn] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDrawn(true), 400);
    return () => clearTimeout(t);
  }, []);

  const line = (delay: number): React.CSSProperties => ({
    strokeDasharray: 320,
    strokeDashoffset: drawn ? 0 : 320,
    transition: `stroke-dashoffset 1.1s cubic-bezier(0.4,0,0.2,1) ${delay}s`,
  });

  const fade = (delay: number): React.CSSProperties => ({
    opacity: drawn ? 1 : 0,
    transition: `opacity 0.5s ease ${delay}s`,
  });

  return (
    <svg
      viewBox="0 0 700 540"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      style={{ overflow: "visible" }}
      aria-label="Shardul's body of work map"
    >
      {/* ── Faint outer ring ── */}
      <ellipse cx="346" cy="268" rx="145" ry="118"
        stroke="#E5E3DC" strokeWidth="1" strokeDasharray="7 6"
        fill="none" style={fade(0.1)} />

      {/* ══════════════════════════════════════
          BRANCH LINES — center to each node
          ══════════════════════════════════════ */}

      {/* → Therefore Design (top-left) */}
      <path d="M 288 252 C 230 228, 165 196, 100 175"
        stroke="#C8C5BC" strokeWidth="1.8" strokeLinecap="round" style={line(0.2)} />

      {/* → Hide & Sneak (bottom-left) */}
      <path d="M 295 290 C 232 325, 168 358, 112 390"
        stroke="#C8C5BC" strokeWidth="1.8" strokeLinecap="round" style={line(0.35)} />

      {/* → KOEL Research (top) */}
      <path d="M 336 235 C 318 176, 300 120, 278 72"
        stroke="#C8C5BC" strokeWidth="1.8" strokeLinecap="round" style={line(0.5)} />

      {/* → YelloSKYE (top-right) */}
      <path d="M 406 245 C 460 198, 508 158, 556 118"
        stroke="#C8C5BC" strokeWidth="1.8" strokeLinecap="round" style={line(0.65)} />

      {/* → Rayden Design (right) */}
      <path d="M 412 268 C 468 270, 524 274, 576 278"
        stroke="#C8C5BC" strokeWidth="1.8" strokeLinecap="round" style={line(0.8)} />

      {/* → Stahl (bottom-right) */}
      <path d="M 386 292 C 416 348, 446 396, 474 444"
        stroke="#C8C5BC" strokeWidth="1.8" strokeLinecap="round" style={line(0.95)} />

      {/* ══════════════════════════════════════
          CENTRAL NODE
          ══════════════════════════════════════ */}
      <ellipse cx="346" cy="268" rx="70" ry="34"
        fill="#FFE141" fillOpacity="0.9" stroke="#C8C5BC" strokeWidth="1.5"
        style={fade(0.05)} />
      <text x="346" y="263" textAnchor="middle"
        fontFamily="var(--font-caveat)" fontSize="22" fontWeight="600" fill="#1A1A1A"
        style={fade(0.1)}>
        Shardul
      </text>
      <text x="346" y="282" textAnchor="middle"
        fontFamily="var(--font-caveat)" fontSize="12" fill="#6B6860"
        style={fade(0.15)}>
        body of work
      </text>

      {/* ══════════════════════════════════════
          COMPANY / PROJECT NODES
          ══════════════════════════════════════ */}

      {/* ── Therefore Design ── */}
      <ellipse cx="72" cy="172" rx="62" ry="26"
        fill="#F5F4F0" stroke="#E5E3DC" strokeWidth="1.5" style={fade(0.38)} />
      <text x="72" y="177" textAnchor="middle"
        fontFamily="var(--font-caveat)" fontSize="16" fill="#1A1A1A" style={fade(0.42)}>
        Therefore
      </text>
      {/* Stats */}
      <text x="72" y="144" textAnchor="middle"
        fontFamily="var(--font-caveat)" fontSize="11" fill="#AAAAAA" style={fade(0.55)}>
        credential decks
      </text>
      <text x="72" y="155" textAnchor="middle"
        fontFamily="var(--font-caveat)" fontSize="11" fill="#AAAAAA" style={fade(0.58)}>
        12+ meetings · BD ops
      </text>
      <path d="M 72 160 L 72 148" stroke="#E5E3DC" strokeWidth="0.8"
        strokeDasharray="2 2" style={fade(0.6)} />

      {/* ── Hide & Sneak ── */}
      <ellipse cx="84" cy="392" rx="68" ry="26"
        fill="#F5F4F0" stroke="#E5E3DC" strokeWidth="1.5" style={fade(0.52)} />
      <text x="84" y="397" textAnchor="middle"
        fontFamily="var(--font-caveat)" fontSize="16" fill="#1A1A1A" style={fade(0.56)}>
        Hide & Sneak
      </text>
      {/* Stats */}
      <text x="84" y="425" textAnchor="middle"
        fontFamily="var(--font-caveat)" fontSize="11" fill="#AAAAAA" style={fade(0.68)}>
        ₹6L in sales · 50+ deals
      </text>
      <text x="84" y="437" textAnchor="middle"
        fontFamily="var(--font-caveat)" fontSize="11" fill="#AAAAAA" style={fade(0.7)}>
        432 hours on the floor
      </text>

      {/* ── KOEL Research ── */}
      <ellipse cx="272" cy="60" rx="74" ry="26"
        fill="#FFFCE0" stroke="#C8C5BC" strokeWidth="1.5" style={fade(0.65)} />
      <text x="272" y="65" textAnchor="middle"
        fontFamily="var(--font-caveat)" fontSize="16" fill="#1A1A1A" style={fade(0.68)}>
        KOEL Research
      </text>
      {/* Sub-branches from KOEL */}
      <path d="M 246 36 L 216 14" stroke="#E5E3DC" strokeWidth="1"
        strokeDasharray="3 3" style={fade(0.78)} />
      <text x="208" y="12" textAnchor="middle"
        fontFamily="var(--font-caveat)" fontSize="11" fill="#AAAAAA" style={fade(0.8)}>
        73 interviews
      </text>
      <path d="M 296 36 L 318 14" stroke="#E5E3DC" strokeWidth="1"
        strokeDasharray="3 3" style={fade(0.82)} />
      <text x="328" y="12" textAnchor="middle"
        fontFamily="var(--font-caveat)" fontSize="11" fill="#AAAAAA" style={fade(0.84)}>
        5 cities · boardroom
      </text>
      <text x="272" y="90" textAnchor="middle"
        fontFamily="var(--font-caveat)" fontSize="11" fill="#AAAAAA" style={fade(0.86)}>
        500+ hours · MD presentation
      </text>

      {/* ── YelloSKYE ── */}
      <ellipse cx="580" cy="108" rx="58" ry="24"
        fill="#FFE141" fillOpacity="0.35" stroke="#C8C5BC" strokeWidth="1.5"
        style={fade(0.78)} />
      <text x="580" y="113" textAnchor="middle"
        fontFamily="var(--font-caveat)" fontSize="16" fill="#1A1A1A" style={fade(0.82)}>
        YelloSKYE
      </text>
      <text x="580" y="82" textAnchor="middle"
        fontFamily="var(--font-caveat)" fontSize="11" fill="#AAAAAA" style={fade(0.9)}>
        current ●
      </text>
      <text x="580" y="136" textAnchor="middle"
        fontFamily="var(--font-caveat)" fontSize="11" fill="#AAAAAA" style={fade(0.92)}>
        strategy · execution
      </text>

      {/* ── Rayden Design ── */}
      <ellipse cx="614" cy="278" rx="66" ry="26"
        fill="#F5F4F0" stroke="#E5E3DC" strokeWidth="1.5" style={fade(0.92)} />
      <text x="614" y="283" textAnchor="middle"
        fontFamily="var(--font-caveat)" fontSize="16" fill="#1A1A1A" style={fade(0.95)}>
        Rayden Design
      </text>
      {/* Stats to the right */}
      <text x="614" y="250" textAnchor="middle"
        fontFamily="var(--font-caveat)" fontSize="11" fill="#AAAAAA" style={fade(1.05)}>
        228 outreaches
      </text>
      <text x="614" y="308" textAnchor="middle"
        fontFamily="var(--font-caveat)" fontSize="11" fill="#AAAAAA" style={fade(1.08)}>
        20+ meetings · 300+ leads
      </text>

      {/* ── Stahl ── */}
      <ellipse cx="486" cy="458" rx="62" ry="24"
        fill="#F5F4F0" stroke="#E5E3DC" strokeWidth="1.5" style={fade(1.05)} />
      <text x="486" y="463" textAnchor="middle"
        fontFamily="var(--font-caveat)" fontSize="16" fill="#1A1A1A" style={fade(1.08)}>
        Stahl
      </text>
      <text x="486" y="487" textAnchor="middle"
        fontFamily="var(--font-caveat)" fontSize="11" fill="#AAAAAA" style={fade(1.15)}>
        5 domains · CLV + legal
      </text>
      <text x="486" y="432" textAnchor="middle"
        fontFamily="var(--font-caveat)" fontSize="11" fill="#AAAAAA" style={fade(1.18)}>
        brand strategy · retail
      </text>
    </svg>
  );
}

const STATS = [
  { num: "4",    label: "companies" },
  { num: "15",   label: "projects"  },
  { num: "500+", label: "hours"     },
  { num: "73",   label: "interviews"},
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-paper"
    >
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid pointer-events-none" style={{ opacity: 0.28 }} />
      {/* Fade out toward bottom */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent 50%, #FAFAF8 88%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-14 pt-28 pb-16 w-full">

        {/* ── Two-column ── */}
        <div className="grid md:grid-cols-[1fr_560px] gap-10 md:gap-6 items-center">

          {/* LEFT */}
          <div className="order-2 md:order-1">

            {/* Small label */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="w-6 h-px bg-line-dark" />
              <span className="label-accent">Body of Work — Shardul Gupta</span>
            </motion.div>

            {/* ── Headline — minimal, accurate ── */}
            <div className="overflow-hidden mb-2">
              <motion.h1
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="font-display font-semibold text-ink leading-[1.05]"
                style={{ fontSize: "clamp(3rem, 6.5vw, 5.5rem)" }}
              >
                Real work.
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-10">
              <motion.h1
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.75, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
                className="font-display font-semibold leading-[1.05]"
                style={{ fontSize: "clamp(3rem, 6.5vw, 5.5rem)" }}
              >
                <span className="highlight-yellow">Real companies.</span>
              </motion.h1>
            </div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="text-ink-muted text-base leading-relaxed max-w-md mb-10"
            >
              Business student who skips the classroom and goes straight to the company.
              Sold sneakers, interviewed 73 farmers, built B2B pipelines from scratch,
              walked into boardrooms with findings that changed decisions.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-4 gap-3 mb-10 max-w-xs"
            >
              {STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.75 + i * 0.07 }}
                  className="text-center border border-line bg-surface py-3 px-1"
                >
                  <div className="font-sketch text-3xl text-ink leading-none">{s.num}</div>
                  <div className="label mt-1">{s.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.95 }}
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

            {/* Caveat annotation */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="font-sketch text-base text-ink-faint mt-6"
            >
              research → sales → strategy → execution ↓
            </motion.p>
          </div>

          {/* RIGHT — Work map */}
          <motion.div
            className="order-1 md:order-2 w-full"
            style={{ minHeight: 400 }}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <WorkMap />
          </motion.div>
        </div>
      </div>

      {/* Scroll nudge */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-ink-faint text-xs"
        >
          ↓
        </motion.div>
        <span className="font-sketch text-sm text-ink-faint">scroll</span>
      </motion.div>
    </section>
  );
}
