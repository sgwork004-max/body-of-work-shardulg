"use client";

import { motion } from "framer-motion";
import { PRINCIPLES } from "@/lib/data";
import FadeIn from "./FadeIn";

// ── Full-width banner diagrams — bigger and visual ──────────────────────────

// 01: System → Repeatable outputs
const D1 = () => (
  <svg viewBox="0 0 280 110" fill="none" className="w-full h-full">
    <defs>
      <marker id="d1a" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto">
        <path d="M0,0 L0,7 L7,3.5 z" fill="#C8C5BC" />
      </marker>
    </defs>
    {/* Input box */}
    <rect x="12" y="42" width="52" height="28" rx="4" fill="#F5F4F0" stroke="#C8C5BC" strokeWidth="1.2" />
    <text x="38" y="59" textAnchor="middle" fontFamily="var(--font-caveat)" fontSize="14" fill="#6B6860">input</text>
    {/* Arrow → */}
    <path d="M 66 56 L 92 56" stroke="#C8C5BC" strokeWidth="1.5" markerEnd="url(#d1a)" />
    {/* SOP box — yellow */}
    <rect x="94" y="38" width="60" height="36" rx="4" fill="#FFE141" fillOpacity="0.65" stroke="#C8C5BC" strokeWidth="1.2" />
    <text x="124" y="60" textAnchor="middle" fontFamily="var(--font-caveat)" fontSize="16" fontWeight="600" fill="#1A1A1A">SOP</text>
    {/* 3 output branches */}
    <path d="M 156 48 C 175 40, 195 28, 218 18" stroke="#C8C5BC" strokeWidth="1.2" markerEnd="url(#d1a)" />
    <path d="M 156 56 L 218 56" stroke="#C8C5BC" strokeWidth="1.2" markerEnd="url(#d1a)" />
    <path d="M 156 64 C 175 72, 195 82, 218 92" stroke="#C8C5BC" strokeWidth="1.2" markerEnd="url(#d1a)" />
    {/* Output nodes */}
    <circle cx="228" cy="18" r="6" fill="#E5E3DC" stroke="#C8C5BC" strokeWidth="1" />
    <circle cx="228" cy="56" r="6" fill="#E5E3DC" stroke="#C8C5BC" strokeWidth="1" />
    <circle cx="228" cy="92" r="6" fill="#E5E3DC" stroke="#C8C5BC" strokeWidth="1" />
    {/* Label */}
    <text x="243" y="60" fontFamily="var(--font-caveat)" fontSize="13" fill="#AAAAAA">repeatable</text>
  </svg>
);

// 02: Volume → Signal (scatter to insight)
const D2 = () => (
  <svg viewBox="0 0 280 110" fill="none" className="w-full h-full">
    {/* Many scattered dots */}
    {[
      [20,20],[38,50],[14,75],[55,30],[48,80],[70,15],[65,60],
      [85,42],[92,85],[28,92],[105,25],[115,68],[100,10],[130,52],
      [140,82],[155,20],[165,58],[175,88],[185,35],[195,70],
      [210,18],[220,60],[235,42],[248,78],[260,25],[268,55],[255,90],
    ].map(([cx, cy], i) => (
      <circle key={i} cx={cx} cy={cy} r="3" fill="#E5E3DC" />
    ))}
    {/* Highlighted cluster — rough yellow ellipse */}
    <ellipse cx="185" cy="52" rx="52" ry="38"
      stroke="#FFE141" strokeWidth="2.5" fill="#FFE141" fillOpacity="0.18"
      strokeDasharray="8 4" />
    {/* Circled insight dot */}
    <circle cx="185" cy="52" r="8" fill="#FFE141" fillOpacity="0.8" stroke="#C8C5BC" strokeWidth="1.2" />
    {/* Labels */}
    <text x="20" y="105" fontFamily="var(--font-caveat)" fontSize="13" fill="#AAAAAA">raw volume</text>
    <text x="160" y="106" fontFamily="var(--font-caveat)" fontSize="14" fill="#6B6860">signal</text>
    {/* Arrow pointing to cluster */}
    <path d="M 100 95 C 130 90, 155 80, 178 62" stroke="#AAAAAA" strokeWidth="1" strokeDasharray="3 2" />
  </svg>
);

// 03: Ground → Deck (person → field → presentation)
const D3 = () => (
  <svg viewBox="0 0 280 110" fill="none" className="w-full h-full">
    <defs>
      <marker id="d3a" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto">
        <path d="M0,0 L0,7 L7,3.5 z" fill="#C8C5BC" />
      </marker>
    </defs>
    {/* Desk figure */}
    <rect x="18" y="55" width="44" height="28" rx="3" stroke="#C8C5BC" strokeWidth="1.2" fill="#F5F4F0" />
    <rect x="22" y="42" width="36" height="2" rx="1" fill="#E5E3DC" />
    <circle cx="40" cy="32" r="9" stroke="#C8C5BC" strokeWidth="1.2" fill="#F5F4F0" />
    <text x="40" y="75" textAnchor="middle" fontFamily="var(--font-caveat)" fontSize="12" fill="#AAAAAA">theory</text>
    {/* Arrow with "go" */}
    <path d="M 66 65 L 110 65" stroke="#C8C5BC" strokeWidth="1.5" strokeDasharray="5 3" markerEnd="url(#d3a)" />
    <text x="88" y="58" textAnchor="middle" fontFamily="var(--font-caveat)" fontSize="14" fill="#1A1A1A">go</text>
    {/* Field people */}
    {[130, 158, 186].map((x, i) => (
      <g key={x}>
        <circle cx={x} cy="35" r="9" stroke="#C8C5BC" strokeWidth="1.2" fill={i === 1 ? "#FFE141" : "#F5F4F0"} fillOpacity={i === 1 ? 0.7 : 1} />
        <line x1={x} y1="44" x2={x} y2="62" stroke="#C8C5BC" strokeWidth="1.2" />
        <line x1={x - 10} y1="52" x2={x + 10} y2="52" stroke="#C8C5BC" strokeWidth="1" />
      </g>
    ))}
    <text x="158" y="80" textAnchor="middle" fontFamily="var(--font-caveat)" fontSize="12" fill="#AAAAAA">ground truth</text>
    {/* Arrow */}
    <path d="M 200 55 L 228 55" stroke="#C8C5BC" strokeWidth="1.5" markerEnd="url(#d3a)" />
    {/* Slide / deck */}
    <rect x="232" y="38" width="38" height="28" rx="3" stroke="#C8C5BC" strokeWidth="1.2" fill="#FFE141" fillOpacity="0.35" />
    <line x1="238" y1="47" x2="264" y2="47" stroke="#C8C5BC" strokeWidth="0.8" />
    <line x1="238" y1="53" x2="256" y2="53" stroke="#C8C5BC" strokeWidth="0.8" />
    <line x1="238" y1="59" x2="260" y2="59" stroke="#C8C5BC" strokeWidth="0.8" />
    <text x="251" y="80" textAnchor="middle" fontFamily="var(--font-caveat)" fontSize="12" fill="#6B6860">deck</text>
  </svg>
);

// 04: Narrative tension arc
const D4 = () => (
  <svg viewBox="0 0 280 110" fill="none" className="w-full h-full">
    {/* Y axis */}
    <line x1="28" y1="90" x2="28" y2="12" stroke="#E5E3DC" strokeWidth="1.2" />
    {/* X axis */}
    <line x1="28" y1="90" x2="268" y2="90" stroke="#E5E3DC" strokeWidth="1.2" />
    {/* Curve */}
    <path
      d="M 32 88 C 55 84, 80 70, 105 50 C 130 30, 150 18, 165 15 C 180 12, 195 28, 215 50 C 232 68, 248 78, 264 85"
      stroke="#C8C5BC" strokeWidth="2" fill="none"
    />
    {/* Yellow fill under curve */}
    <path
      d="M 32 88 C 55 84, 80 70, 105 50 C 130 30, 150 18, 165 15 C 180 12, 195 28, 215 50 C 232 68, 248 78, 264 85 L 264 90 L 32 90 Z"
      fill="#FFE141" fillOpacity="0.2"
    />
    {/* Peak marker */}
    <line x1="165" y1="15" x2="165" y2="25" stroke="#C8C5BC" strokeWidth="1" strokeDasharray="3 2" />
    <circle cx="165" cy="13" r="4" fill="#FFE141" stroke="#C8C5BC" strokeWidth="1" />
    {/* Labels */}
    <text x="24" y="10" fontFamily="var(--font-caveat)" fontSize="13" fill="#AAAAAA">tension</text>
    <text x="28" y="104" fontFamily="var(--font-caveat)" fontSize="13" fill="#AAAAAA">opening</text>
    <text x="218" y="104" fontFamily="var(--font-caveat)" fontSize="13" fill="#AAAAAA">resolution</text>
    <text x="155" y="10" fontFamily="var(--font-caveat)" fontSize="13" fill="#6B6860">peak</text>
    {/* Y label */}
    <text x="5" y="55" fontFamily="var(--font-caveat)" fontSize="11" fill="#C8C5BC"
      transform="rotate(-90 5 55)">tension</text>
  </svg>
);

// 05: End-to-end ownership arrow
const D5 = () => (
  <svg viewBox="0 0 280 110" fill="none" className="w-full h-full">
    <defs>
      <marker id="d5a" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
        <path d="M0,0 L0,8 L8,4 z" fill="#1A1A1A" />
      </marker>
    </defs>
    {/* Full span track */}
    <rect x="20" y="46" width="240" height="18" rx="4" fill="#FFE141" fillOpacity="0.2" stroke="#E5E3DC" strokeWidth="1" />
    {/* Arrow on track */}
    <path d="M 22 55 L 252 55" stroke="#1A1A1A" strokeWidth="1.8" markerEnd="url(#d5a)" />
    {/* Step dots */}
    {[62, 102, 142, 182, 220].map((x) => (
      <circle key={x} cx={x} cy="55" r="5" fill="#FAFAF8" stroke="#C8C5BC" strokeWidth="1.5" />
    ))}
    {/* Start/end labels */}
    <text x="20" y="36" fontFamily="var(--font-caveat)" fontSize="15" fontWeight="600" fill="#1A1A1A">problem</text>
    <path d="M 40" />
    <line x1="32" y1="38" x2="32" y2="45" stroke="#C8C5BC" strokeWidth="0.8" />
    <text x="230" y="36" textAnchor="end" fontFamily="var(--font-caveat)" fontSize="15" fontWeight="600" fill="#1A1A1A">handoff</text>
    <line x1="228" y1="38" x2="228" y2="45" stroke="#C8C5BC" strokeWidth="0.8" />
    {/* Annotation */}
    <text x="140" y="84" textAnchor="middle" fontFamily="var(--font-caveat)" fontSize="14" fill="#6B6860">every step in between</text>
    {/* Step labels */}
    {[
      { x: 62, l: "define" },
      { x: 102, l: "build" },
      { x: 142, l: "test" },
      { x: 182, l: "ship" },
      { x: 220, l: "docs" },
    ].map((s) => (
      <text key={s.x} x={s.x} y="72" textAnchor="middle" fontFamily="var(--font-caveat)" fontSize="11" fill="#C8C5BC">
        {s.l}
      </text>
    ))}
  </svg>
);

// 06: Context → Insight → Action
const D6 = () => (
  <svg viewBox="0 0 280 110" fill="none" className="w-full h-full">
    <defs>
      <marker id="d6a" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto">
        <path d="M0,0 L0,7 L7,3.5 z" fill="#C8C5BC" />
      </marker>
    </defs>
    {/* Context box */}
    <rect x="12" y="30" width="68" height="48" rx="4" fill="#F5F4F0" stroke="#C8C5BC" strokeWidth="1.2" />
    <text x="46" y="52" textAnchor="middle" fontFamily="var(--font-caveat)" fontSize="18" fontWeight="600" fill="#1A1A1A">C</text>
    <text x="46" y="70" textAnchor="middle" fontFamily="var(--font-caveat)" fontSize="12" fill="#6B6860">context</text>
    {/* Arrow */}
    <path d="M 82 54 L 104 54" stroke="#C8C5BC" strokeWidth="1.5" markerEnd="url(#d6a)" />
    {/* Insight box */}
    <rect x="106" y="26" width="68" height="56" rx="4" fill="#FFE141" fillOpacity="0.55" stroke="#C8C5BC" strokeWidth="1.2" />
    <text x="140" y="52" textAnchor="middle" fontFamily="var(--font-caveat)" fontSize="18" fontWeight="600" fill="#1A1A1A">I</text>
    <text x="140" y="72" textAnchor="middle" fontFamily="var(--font-caveat)" fontSize="12" fill="#6B6860">insight</text>
    {/* Arrow */}
    <path d="M 176 54 L 198 54" stroke="#C8C5BC" strokeWidth="1.5" markerEnd="url(#d6a)" />
    {/* Action box */}
    <rect x="200" y="22" width="68" height="64" rx="4" fill="#FFE141" fillOpacity="0.85" stroke="#C8C5BC" strokeWidth="1.5" />
    <text x="234" y="52" textAnchor="middle" fontFamily="var(--font-caveat)" fontSize="18" fontWeight="600" fill="#1A1A1A">A</text>
    <text x="234" y="72" textAnchor="middle" fontFamily="var(--font-caveat)" fontSize="12" fill="#1A1A1A">action</text>
    {/* Annotation */}
    <text x="140" y="100" textAnchor="middle" fontFamily="var(--font-caveat)" fontSize="13" fill="#AAAAAA">data without direction is trivia</text>
  </svg>
);

const DIAGRAMS = [D1, D2, D3, D4, D5, D6];

export default function HowIThink() {
  return (
    <section id="thinking" className="py-20 md:py-28 bg-paper overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeIn>
          <div className="mb-12">
            <span className="label-accent block mb-3">How I operate</span>
            <h2 className="font-display font-medium text-fluid text-ink leading-tight">
              Six things I&apos;ve noticed
              <br />
              about how I work best.
            </h2>
            <p className="font-sketch text-lg text-ink-muted mt-3">
              observed from doing — not made up in a weekend
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PRINCIPLES.map((p, i) => {
            const Diagram = DIAGRAMS[i];
            return (
              <FadeIn key={p.number} delay={i * 0.08} direction="up">
                <motion.div
                  className="group border border-line bg-paper hover:border-line-dark transition-all duration-200 overflow-hidden flex flex-col h-full"
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Diagram banner — prominent, full card width */}
                  <div className="bg-surface border-b border-line p-4" style={{ height: 130 }}>
                    {Diagram && <Diagram />}
                  </div>

                  {/* Card body */}
                  <div className="p-5 flex flex-col flex-1">
                    <span className="font-sketch text-2xl text-ink-faint mb-2">{p.number}</span>

                    <h3 className="font-display font-medium text-base text-ink leading-snug mb-2">
                      {p.title}
                    </h3>

                    {/* Yellow sketch underline */}
                    <svg viewBox="0 0 90 6" fill="none" className="w-20 h-1.5 mb-3 flex-shrink-0">
                      <path d="M 1 4 C 18 2, 40 5, 62 3 C 74 2, 82 4, 89 3"
                        stroke="#FFE141" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>

                    <p className="text-sm text-ink-muted leading-relaxed flex-1">{p.body}</p>
                  </div>
                </motion.div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
