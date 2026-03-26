"use client";

import { useEffect, useRef, useState } from "react";
import FadeIn from "./FadeIn";

/* ─────────────────────────────────────────────────────────────
   Journey Timeline SVG — animated, shows the full 2-year arc
   ──────────────────────────────────────────────────────────── */
function JourneyTimeline() {
  const [drawn, setDrawn] = useState(false);
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setDrawn(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const lineStyle: React.CSSProperties = {
    strokeDasharray: 900,
    strokeDashoffset: drawn ? 0 : 900,
    transition: "stroke-dashoffset 1.4s cubic-bezier(0.4,0,0.2,1) 0.2s",
  };

  const dot = (delay: number): React.CSSProperties => ({
    opacity: drawn ? 1 : 0,
    transition: `opacity 0.4s ease ${delay}s`,
  });

  // Wider viewBox (840) so Stahl and YelloSKYE have breathing room
  const STOPS = [
    { x: 75,  label: "Hide & Sneak", note: "₹6L sales",       above: true  },
    { x: 220, label: "KOEL",         note: "73 interviews",    above: false },
    { x: 380, label: "Therefore",    note: "12+ meetings",     above: true  },
    { x: 530, label: "Rayden",       note: "228 outreaches",   above: false },
    { x: 650, label: "Stahl",        note: "5 domains",        above: true  },
    { x: 775, label: "YelloSKYE",    note: "current ●",        above: false },
  ];

  return (
    <svg
      ref={ref}
      viewBox="0 0 840 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full"
      style={{ overflow: "visible" }}
    >
      {/* Base track */}
      <line x1="45" y1="58" x2="815" y2="58" stroke="#D8D5CC" strokeWidth="1.5" />
      {/* Animated drawn line */}
      <line x1="45" y1="58" x2="815" y2="58"
        stroke="#B8B5AB" strokeWidth="2" strokeLinecap="round"
        style={lineStyle} />
      {/* Arrow */}
      <path d="M 808 53 L 818 58 L 808 63"
        stroke="#B8B5AB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
        style={dot(1.4)} />
      <text x="822" y="62" fontFamily="var(--font-caveat)" fontSize="13" fill="#8A8886"
        style={dot(1.5)}>now</text>

      {/* Start circle + 2023 label */}
      <circle cx={45} cy={58} r={4} fill="#FAFAF8" stroke="#B8B5AB" strokeWidth="1.5"
        style={dot(0.2)} />
      <text x="45" y="80" textAnchor="middle"
        fontFamily="var(--font-caveat)" fontSize="12" fill="#8A8886"
        style={dot(0.25)}>2023</text>

      {/* Company stops */}
      {STOPS.map((s, i) => (
        <g key={s.label}>
          <circle cx={s.x} cy={58} r={i === STOPS.length - 1 ? 7 : 5}
            fill={i === STOPS.length - 1 ? "#FFE141" : "#FAFAF8"}
            stroke="#B8B5AB" strokeWidth="1.5"
            style={dot(0.45 + i * 0.17)} />

          {s.above ? (
            <>
              <line x1={s.x} y1={44} x2={s.x} y2={52}
                stroke="#D8D5CC" strokeWidth="1" style={dot(0.5 + i * 0.17)} />
              <text x={s.x} y={36} textAnchor="middle"
                fontFamily="var(--font-caveat)" fontSize="14" fontWeight="600" fill="#111111"
                style={dot(0.55 + i * 0.17)}>
                {s.label}
              </text>
              <text x={s.x} y={20} textAnchor="middle"
                fontFamily="var(--font-caveat)" fontSize="11" fill="#8A8886"
                style={dot(0.65 + i * 0.17)}>
                {s.note}
              </text>
            </>
          ) : (
            <>
              <line x1={s.x} y1={64} x2={s.x} y2={75}
                stroke="#D8D5CC" strokeWidth="1" style={dot(0.5 + i * 0.17)} />
              <text x={s.x} y={87} textAnchor="middle"
                fontFamily="var(--font-caveat)" fontSize="14" fontWeight="600" fill="#111111"
                style={dot(0.55 + i * 0.17)}>
                {s.label}
              </text>
              <text x={s.x} y={103} textAnchor="middle"
                fontFamily="var(--font-caveat)" fontSize="11" fill="#8A8886"
                style={dot(0.65 + i * 0.17)}>
                {s.note}
              </text>
            </>
          )}
        </g>
      ))}

    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   Skill cluster — visual tag grid
   ──────────────────────────────────────────────────────────── */
const SKILL_CLUSTERS = [
  { cluster: "Research",   tags: ["73 interviews", "On-ground fieldwork", "Insight synthesis", "1000+ data points"] },
  { cluster: "Sales & BD", tags: ["228 cold outreaches", "₹6L retail sales", "ICP development", "20+ meetings closed"] },
  { cluster: "Strategy",   tags: ["GTM planning", "Credential decks", "CLV mapping", "Legal risk review"] },
  { cluster: "Execution",  tags: ["SOP design", "300+ lead database", "Handover docs", "Content & brand work"] },
];

const FACTS = [
  { label: "Currently",  value: "YelloSKYE — Business Apprentice" },
  { label: "Based in",   value: "Pune, India" },
  { label: "School",     value: "Let's Enterprise" },
  { label: "Writing at", value: "Conflexions + Medium" },
  { label: "Mode",       value: "Learning by doing" },
];

/* ─────────────────────────────────────────────────────────────
   About — main export
   ──────────────────────────────────────────────────────────── */
export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-paper overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* ── Header ── */}
        <FadeIn>
          <span className="label-accent block mb-4">The person behind the work</span>
          <h2 className="font-display font-medium text-fluid text-ink leading-tight mb-3">
            Not a resume.
            <br />
            A way of <span className="highlight-yellow">working.</span>
          </h2>
          <p className="font-sketch text-lg text-ink-muted max-w-xl mb-12">
            Two years. Four companies. Industries I had no business being in. Figured it out each time.
          </p>
        </FadeIn>

        {/* ── Journey Timeline ── */}
        <FadeIn delay={0.1}>
          <div className="mb-16">
            <p className="font-sketch text-base text-ink-faint mb-6">
              the journey so far →
            </p>
            <div className="py-4 px-2">
              <JourneyTimeline />
            </div>
          </div>
        </FadeIn>

        {/* ── Two-column: story + facts ── */}
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">

          {/* LEFT: Narrative */}
          <div className="md:col-span-7 space-y-7">

            <FadeIn delay={0.15}>
              <p className="text-ink text-base leading-relaxed max-w-xl">
                I&apos;m at <strong className="font-medium">Let&apos;s Enterprise</strong> —
                a school that replaces lectures with actual work at actual companies. No
                assignments. No exams. You show up to a real company, own a real problem,
                and figure it out.
              </p>
            </FadeIn>

            <FadeIn delay={0.22}>
              <p className="text-ink-muted text-base leading-relaxed max-w-xl">
                Sneaker retail taught me how to sell without convincing. Industrial research
                taught me how to listen. Premium design BD taught me how to pitch. Consumer
                strategy taught me how to read a room. Each one was a different language.
                Each one I learned from scratch.
              </p>
            </FadeIn>

            <FadeIn delay={0.28}>
              <p className="text-ink-muted text-base leading-relaxed max-w-xl">
                Building toward one thing: walk into any room, any problem, any stakeholder
                set, and be genuinely useful. Not because I know everything. Because I know
                how to find out fast, synthesise clearly, and act decisively.
              </p>
            </FadeIn>

            {/* Pull quote */}
            <FadeIn delay={0.35}>
              <div className="pl-5 border-l-2 border-yellow">
                <p className="font-sketch text-xl text-ink-muted leading-relaxed">
                  &ldquo;I thrive in ambiguity. I think in systems.
                  I write when I need to understand something better.&rdquo;
                </p>
              </div>
            </FadeIn>

            {/* Skills grid */}
            <FadeIn delay={0.42}>
              <div className="pt-2">
                <p className="font-sketch text-base text-ink-faint mb-4">what I actually do ↓</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {SKILL_CLUSTERS.map((sc) => (
                    <div key={sc.cluster} className="border border-line bg-surface p-4">
                      <p className="label-accent mb-3">{sc.cluster}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {sc.tags.map((tag) => (
                          <span
                            key={tag}
                            className="font-sketch text-sm text-ink-muted border border-line bg-paper px-2 py-0.5"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* RIGHT: Facts panel */}
          <FadeIn delay={0.2} direction="left" className="md:col-span-5">
            <div className="sticky top-24 space-y-4">
              {/* At a glance */}
              <div>
                <p className="font-sketch text-base text-ink-faint mb-3">at a glance ↓</p>
                <div className="border border-line bg-surface">
                  {FACTS.map((f, i) => (
                    <div
                      key={f.label}
                      className={`flex items-start justify-between gap-4 px-4 py-3.5 ${
                        i < FACTS.length - 1 ? "border-b border-line" : ""
                      }`}
                    >
                      <span className="label shrink-0 pt-0.5">{f.label}</span>
                      <span className="text-ink text-sm font-medium text-right">{f.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What I'm not */}
              <div className="border border-line bg-yellow-soft p-5">
                <p className="label-accent mb-3">what this isn&apos;t</p>
                <ul className="space-y-2.5">
                  {[
                    "Not classroom projects",
                    "Not internship-level tasks",
                    "Not theory applied to case studies",
                    "Real companies, real stakes, real outcomes",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2 items-start">
                      <span className="text-ink-faint text-xs mt-1 shrink-0">
                        {i < 3 ? "✕" : "→"}
                      </span>
                      <span
                        className={`font-sketch text-base leading-snug ${
                          i < 3 ? "text-ink-faint line-through decoration-line-dark" : "text-ink font-medium"
                        }`}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact nudge */}
              <div className="border border-line p-5">
                <p className="font-sketch text-base text-ink-muted leading-relaxed">
                  If you&apos;re building something interesting and need someone who can figure things out —
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 mt-3 text-ink text-sm font-medium hover:gap-3 transition-all duration-200"
                >
                  let&apos;s talk <span>→</span>
                </a>
              </div>
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
