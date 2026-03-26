"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

/* ══════════════════════════════════════════════════════════════
   WORK MAP — comprehensive mind map of all work & achievements
   ═════════════════════════════════════════════════════════════ */
function WorkMap() {
  const [drawn, setDrawn] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDrawn(true), 300);
    return () => clearTimeout(t);
  }, []);

  const branch = (delay: number): React.CSSProperties => ({
    strokeDasharray: 400,
    strokeDashoffset: drawn ? 0 : 400,
    transition: `stroke-dashoffset 1.1s cubic-bezier(0.4,0,0.2,1) ${delay}s`,
  });
  const fade = (delay: number): React.CSSProperties => ({
    opacity: drawn ? 1 : 0,
    transition: `opacity 0.45s ease ${delay}s`,
  });
  const sub = (delay: number): React.CSSProperties => ({
    strokeDasharray: 80,
    strokeDashoffset: drawn ? 0 : 80,
    transition: `stroke-dashoffset 0.5s ease ${delay}s`,
  });

  return (
    <svg
      viewBox="0 0 820 660"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      style={{ overflow: "visible" }}
      aria-label="Shardul's full body of work"
    >
      {/* ── Outer dotted ring ── */}
      <ellipse cx="410" cy="330" rx="170" ry="145"
        stroke="#D8D5CC" strokeWidth="1" strokeDasharray="6 7"
        fill="none" style={fade(0.1)} />

      {/* ════════════════════════════════
          MAIN BRANCH LINES
          ═════════════════════════════= */}
      {/* → Therefore (top-left) */}
      <path d="M 358 312 C 288 272, 210 232, 130 198"
        stroke="#B8B5AB" strokeWidth="2" strokeLinecap="round" style={branch(0.15)} />
      {/* → KOEL (top) */}
      <path d="M 393 292 C 375 230, 355 165, 330 85"
        stroke="#B8B5AB" strokeWidth="2" strokeLinecap="round" style={branch(0.3)} />
      {/* → YelloSKYE (top-right) */}
      <path d="M 458 300 C 510 248, 560 188, 618 138"
        stroke="#B8B5AB" strokeWidth="2" strokeLinecap="round" style={branch(0.45)} />
      {/* → Rayden (right) */}
      <path d="M 478 332 C 556 334, 620 338, 692 343"
        stroke="#B8B5AB" strokeWidth="2" strokeLinecap="round" style={branch(0.6)} />
      {/* → Stahl (bottom-right) */}
      <path d="M 455 362 C 500 422, 545 478, 582 548"
        stroke="#B8B5AB" strokeWidth="2" strokeLinecap="round" style={branch(0.75)} />
      {/* → Hide & Sneak (bottom-left) */}
      <path d="M 362 360 C 300 408, 230 462, 135 535"
        stroke="#B8B5AB" strokeWidth="2" strokeLinecap="round" style={branch(0.9)} />

      {/* ════════════════════════════════
          CENTER NODE
          ═════════════════════════════= */}
      <ellipse cx="410" cy="330" rx="72" ry="35"
        fill="#FFE141" fillOpacity="0.92" stroke="#B8B5AB" strokeWidth="1.5"
        style={fade(0.05)} />
      <text x="410" y="325" textAnchor="middle"
        fontFamily="var(--font-caveat)" fontSize="22" fontWeight="600" fill="#111111"
        style={fade(0.1)}>Shardul</text>
      <text x="410" y="344" textAnchor="middle"
        fontFamily="var(--font-caveat)" fontSize="11" fill="#524F4B"
        style={fade(0.15)}>body of work</text>

      {/* ════════════════════════════════
          THEREFORE DESIGN
          ═════════════════════════════= */}
      <ellipse cx="102" cy="196" rx="66" ry="27"
        fill="#F5F4F0" stroke="#D8D5CC" strokeWidth="1.5" style={fade(0.3)} />
      <text x="102" y="201" textAnchor="middle"
        fontFamily="var(--font-caveat)" fontSize="16" fill="#111111" style={fade(0.34)}>
        Therefore Design
      </text>
      {/* sub-nodes */}
      <line x1="76" y1="180" x2="52" y2="162"
        stroke="#D8D5CC" strokeWidth="1" strokeDasharray="3 3" style={sub(0.5)} />
      <text x="48" y="158" textAnchor="middle"
        fontFamily="var(--font-caveat)" fontSize="11" fill="#8A8886" style={fade(0.55)}>
        12+ meetings wk 1
      </text>
      <line x1="80" y1="192" x2="32" y2="188"
        stroke="#D8D5CC" strokeWidth="1" strokeDasharray="3 3" style={sub(0.55)} />
      <text x="28" y="185" textAnchor="end"
        fontFamily="var(--font-caveat)" fontSize="11" fill="#8A8886" style={fade(0.6)}>
        Food Ministry deck
      </text>
      <line x1="78" y1="205" x2="32" y2="218"
        stroke="#D8D5CC" strokeWidth="1" strokeDasharray="3 3" style={sub(0.6)} />
      <text x="28" y="215" textAnchor="end"
        fontFamily="var(--font-caveat)" fontSize="11" fill="#8A8886" style={fade(0.65)}>
        3/5 GTM cases approved
      </text>
      <line x1="90" y1="218" x2="68" y2="238"
        stroke="#D8D5CC" strokeWidth="1" strokeDasharray="3 3" style={sub(0.65)} />
      <text x="64" y="248" textAnchor="middle"
        fontFamily="var(--font-caveat)" fontSize="10" fill="#B8B5AB" style={fade(0.7)}>
        Pixar framework
      </text>

      {/* ════════════════════════════════
          KOEL RESEARCH
          ═════════════════════════════= */}
      <ellipse cx="326" cy="72" rx="72" ry="27"
        fill="#FFFCE0" stroke="#B8B5AB" strokeWidth="1.5" style={fade(0.42)} />
      <text x="326" y="77" textAnchor="middle"
        fontFamily="var(--font-caveat)" fontSize="16" fill="#111111" style={fade(0.46)}>
        KOEL Research
      </text>
      {/* sub-nodes */}
      <line x1="290" y1="50" x2="248" y2="26"
        stroke="#D8D5CC" strokeWidth="1" strokeDasharray="3 3" style={sub(0.62)} />
      <text x="242" y="22" textAnchor="middle"
        fontFamily="var(--font-caveat)" fontSize="11" fill="#8A8886" style={fade(0.67)}>
        73 farmer interviews
      </text>
      <line x1="326" y1="44" x2="326" y2="20"
        stroke="#D8D5CC" strokeWidth="1" strokeDasharray="3 3" style={sub(0.66)} />
      <text x="326" y="16" textAnchor="middle"
        fontFamily="var(--font-caveat)" fontSize="11" fill="#8A8886" style={fade(0.71)}>
        5 cities · Maharashtra
      </text>
      <line x1="364" y1="50" x2="406" y2="26"
        stroke="#D8D5CC" strokeWidth="1" strokeDasharray="3 3" style={sub(0.70)} />
      <text x="412" y="22" textAnchor="start"
        fontFamily="var(--font-caveat)" fontSize="11" fill="#8A8886" style={fade(0.75)}>
        MD Gauri Kirloskar
      </text>
      <line x1="326" y1="99" x2="326" y2="118"
        stroke="#D8D5CC" strokeWidth="1" strokeDasharray="3 3" style={sub(0.74)} />
      <text x="326" y="128" textAnchor="middle"
        fontFamily="var(--font-caveat)" fontSize="10" fill="#B8B5AB" style={fade(0.78)}>
        500+ hours · won internal bid
      </text>

      {/* ════════════════════════════════
          YELLOSKYE (current)
          ═════════════════════════════= */}
      <ellipse cx="630" cy="128" rx="62" ry="26"
        fill="#FFE141" fillOpacity="0.4" stroke="#B8B5AB" strokeWidth="1.5"
        style={fade(0.55)} />
      <text x="630" y="133" textAnchor="middle"
        fontFamily="var(--font-caveat)" fontSize="16" fill="#111111" style={fade(0.59)}>
        YelloSKYE
      </text>
      <text x="630" y="100" textAnchor="middle"
        fontFamily="var(--font-caveat)" fontSize="12" fill="#8A8886" style={fade(0.64)}>
        current ●
      </text>
      <text x="630" y="160" textAnchor="middle"
        fontFamily="var(--font-caveat)" fontSize="10" fill="#B8B5AB" style={fade(0.68)}>
        strategy · execution · documentation
      </text>

      {/* ════════════════════════════════
          RAYDEN DESIGN
          ═════════════════════════════= */}
      <ellipse cx="720" cy="343" rx="68" ry="27"
        fill="#F5F4F0" stroke="#D8D5CC" strokeWidth="1.5" style={fade(0.7)} />
      <text x="720" y="348" textAnchor="middle"
        fontFamily="var(--font-caveat)" fontSize="16" fill="#111111" style={fade(0.74)}>
        Rayden Design
      </text>
      {/* sub-nodes */}
      <line x1="745" y1="325" x2="778" y2="300"
        stroke="#D8D5CC" strokeWidth="1" strokeDasharray="3 3" style={sub(0.86)} />
      <text x="782" y="297" textAnchor="start"
        fontFamily="var(--font-caveat)" fontSize="11" fill="#8A8886" style={fade(0.9)}>
        228 cold outreaches
      </text>
      <line x1="788" y1="343" x2="808" y2="343"
        stroke="#D8D5CC" strokeWidth="1" strokeDasharray="3 3" style={sub(0.9)} />
      <text x="812" y="347" textAnchor="start"
        fontFamily="var(--font-caveat)" fontSize="11" fill="#8A8886" style={fade(0.95)}>
        20+ meetings
      </text>
      <line x1="748" y1="362" x2="778" y2="386"
        stroke="#D8D5CC" strokeWidth="1" strokeDasharray="3 3" style={sub(0.94)} />
      <text x="782" y="390" textAnchor="start"
        fontFamily="var(--font-caveat)" fontSize="11" fill="#8A8886" style={fade(0.98)}>
        300+ leads built
      </text>
      <text x="720" y="378" textAnchor="middle"
        fontFamily="var(--font-caveat)" fontSize="10" fill="#B8B5AB" style={fade(1.0)}>
        B2B pipeline · 7 templates · SOPs
      </text>

      {/* ════════════════════════════════
          STAHL
          ═════════════════════════════= */}
      <ellipse cx="596" cy="558" rx="60" ry="26"
        fill="#F5F4F0" stroke="#D8D5CC" strokeWidth="1.5" style={fade(0.82)} />
      <text x="596" y="563" textAnchor="middle"
        fontFamily="var(--font-caveat)" fontSize="16" fill="#111111" style={fade(0.86)}>
        Stahl
      </text>
      {/* sub-nodes */}
      <line x1="620" y1="542" x2="658" y2="524"
        stroke="#D8D5CC" strokeWidth="1" strokeDasharray="3 3" style={sub(1.0)} />
      <text x="662" y="521" textAnchor="start"
        fontFamily="var(--font-caveat)" fontSize="11" fill="#8A8886" style={fade(1.04)}>
        CLV mapping
      </text>
      <line x1="638" y1="558" x2="668" y2="558"
        stroke="#D8D5CC" strokeWidth="1" strokeDasharray="3 3" style={sub(1.04)} />
      <text x="672" y="562" textAnchor="start"
        fontFamily="var(--font-caveat)" fontSize="11" fill="#8A8886" style={fade(1.08)}>
        Flipkart legal review
      </text>
      <line x1="618" y1="574" x2="644" y2="592"
        stroke="#D8D5CC" strokeWidth="1" strokeDasharray="3 3" style={sub(1.08)} />
      <text x="648" y="596" textAnchor="start"
        fontFamily="var(--font-caveat)" fontSize="11" fill="#8A8886" style={fade(1.12)}>
        brand storytelling
      </text>
      <text x="596" y="592" textAnchor="middle"
        fontFamily="var(--font-caveat)" fontSize="10" fill="#B8B5AB" style={fade(1.14)}>
        5 domains · 5 weeks · Amazon PDP
      </text>

      {/* ════════════════════════════════
          HIDE & SNEAK
          ═════════════════════════════= */}
      <ellipse cx="106" cy="538" rx="72" ry="27"
        fill="#F5F4F0" stroke="#D8D5CC" strokeWidth="1.5" style={fade(0.96)} />
      <text x="106" y="543" textAnchor="middle"
        fontFamily="var(--font-caveat)" fontSize="16" fill="#111111" style={fade(1.0)}>
        Hide &amp; Sneak
      </text>
      {/* sub-nodes */}
      <line x1="72" y1="522" x2="38" y2="504"
        stroke="#D8D5CC" strokeWidth="1" strokeDasharray="3 3" style={sub(1.12)} />
      <text x="34" y="501" textAnchor="end"
        fontFamily="var(--font-caveat)" fontSize="11" fill="#8A8886" style={fade(1.16)}>
        ₹6L in sales
      </text>
      <line x1="44" y1="535" x2="16" y2="530"
        stroke="#D8D5CC" strokeWidth="1" strokeDasharray="3 3" style={sub(1.16)} />
      <text x="12" y="527" textAnchor="end"
        fontFamily="var(--font-caveat)" fontSize="11" fill="#8A8886" style={fade(1.20)}>
        50+ deals closed
      </text>
      <line x1="48" y1="550" x2="16" y2="558"
        stroke="#D8D5CC" strokeWidth="1" strokeDasharray="3 3" style={sub(1.20)} />
      <text x="12" y="555" textAnchor="end"
        fontFamily="var(--font-caveat)" fontSize="11" fill="#8A8886" style={fade(1.24)}>
        ₹48K biggest sale
      </text>
      <line x1="72" y1="556" x2="44" y2="574"
        stroke="#D8D5CC" strokeWidth="1" strokeDasharray="3 3" style={sub(1.24)} />
      <text x="40" y="578" textAnchor="end"
        fontFamily="var(--font-caveat)" fontSize="10" fill="#B8B5AB" style={fade(1.28)}>
        432 hrs · 50+ IG stories · 7 reels
      </text>
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-paper"
    >
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid pointer-events-none" style={{ opacity: 0.28 }} />
      {/* Bottom fade */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent 50%, #FAFAF8 88%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-14 pt-28 pb-16 w-full">
        <div className="grid md:grid-cols-[1fr_580px] gap-8 md:gap-4 items-center">

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

            {/* ── Title ── */}
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
              I&apos;m a growth-obsessed student working on real business problems across
              sales, messaging, and marketing. My work has spanned retail, mini-startups,
              running B2B pipelines, and building apps &amp; websites with AI. I focus on
              figuring things out and making them work.
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

            {/* Caveat annotation */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="font-sketch text-base text-ink-faint mt-6"
            >
              research → sales → strategy → execution ↓
            </motion.p>
          </div>

          {/* RIGHT — Work map */}
          <motion.div
            className="order-1 md:order-2 w-full"
            style={{ minHeight: 480 }}
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
        <span className="font-sketch text-sm text-ink-faint">scroll</span>
      </motion.div>
    </section>
  );
}
