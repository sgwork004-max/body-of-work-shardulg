"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WORK, type WorkItem } from "@/lib/data";
import FadeIn from "./FadeIn";

// Small hand-drawn underline SVG per company
function SketchUnderline({ color = "#FFE141" }: { color?: string }) {
  return (
    <svg viewBox="0 0 120 8" fill="none" className="w-full max-w-[120px] h-2" aria-hidden="true">
      <path
        d="M 2 5 C 20 3, 40 7, 60 5 C 80 3, 100 6, 118 4"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function WorkRow({ item, index }: { item: WorkItem; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <FadeIn delay={index * 0.07}>
      <div className={`border transition-all duration-300 ${open ? "border-line-dark shadow-sm" : "border-line hover:border-line-dark"}`}>
        {/* ── CARD FACE ── */}
        <div
          className="grid md:grid-cols-[180px_1fr] cursor-pointer group"
          onClick={() => setOpen(!open)}
        >
          {/* LEFT: Index + company name */}
          <div className="bg-surface p-5 md:p-6 flex flex-col justify-between border-b md:border-b-0 md:border-r border-line">
            <span className="font-sketch text-2xl text-ink-faint">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <p className="font-display font-medium text-lg text-ink leading-tight mb-1">
                {item.company}
              </p>
              <SketchUnderline />
              <p className="font-sketch text-sm text-ink-muted mt-2">{item.duration}</p>
            </div>
          </div>

          {/* RIGHT: Content */}
          <div className="bg-paper p-5 md:p-6 flex flex-col justify-between">
            <div>
              <span className="label-accent block mb-2">{item.role}</span>
              <h3 className="font-display font-medium text-lg text-ink mb-3 leading-snug group-hover:text-ink transition-colors duration-200">
                <span className="highlight-yellow">{item.tagline}</span>
              </h3>
              {item.highlight && (
                <p className="font-sketch text-base text-ink leading-snug">
                  {item.highlight}
                </p>
              )}
            </div>
            <div className="flex items-center justify-between mt-4">
              <div className="flex flex-wrap gap-1.5">
                {item.skills.slice(0, 3).map((s) => (
                  <span key={s} className="label px-2 py-0.5 bg-surface border border-line">
                    {s}
                  </span>
                ))}
              </div>
              <button className="flex items-center gap-1 font-sketch text-sm text-ink-muted hover:text-ink transition-colors duration-200">
                {open ? "close" : "read more"}
                <motion.span animate={{ rotate: open ? 90 : 0 }} transition={{ duration: 0.2 }}>
                  →
                </motion.span>
              </button>
            </div>
          </div>
        </div>

        {/* ── EXPANDED ── */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="overflow-hidden"
            >
              <div className="bg-yellow-soft border-t border-line">
                {/* Thin yellow accent line */}
                <div className="h-0.5 bg-yellow" />
                <div className="p-5 md:p-8 grid md:grid-cols-2 gap-8">
                  {/* LEFT */}
                  <div className="space-y-6">
                    {[
                      { label: "Context", text: item.context },
                      { label: "The Problem", text: item.problem },
                      { label: "The Approach", text: item.approach },
                    ].map((block) => (
                      <div key={block.label}>
                        <span className="font-sketch text-sm text-ink-muted block mb-1">{block.label} —</span>
                        <p className="text-ink text-sm leading-relaxed">{block.text}</p>
                      </div>
                    ))}
                  </div>

                  {/* RIGHT */}
                  <div className="space-y-6">
                    <div>
                      <span className="font-sketch text-sm text-ink-muted block mb-2">What came out of it —</span>
                      <ul className="space-y-2">
                        {item.outcomes.map((o, i) => (
                          <li key={i} className="flex gap-2 text-sm text-ink leading-relaxed">
                            <span className="flex-shrink-0 text-yellow font-bold mt-0.5">→</span>
                            {o}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <span className="font-sketch text-sm text-ink-muted block mb-2">Reflections —</span>
                      <ul className="space-y-1.5">
                        {item.reflections.map((r, i) => (
                          <li key={i} className="text-sm text-ink-muted leading-relaxed italic flex gap-2">
                            <span className="not-italic text-ink-faint flex-shrink-0">◦</span>
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {item.hours && (
                      <div>
                        <span className="font-sketch text-sm text-ink-muted block mb-1">Time in —</span>
                        <span className="font-sketch text-2xl text-ink">{item.hours}</span>
                      </div>
                    )}
                    <div>
                      <span className="label block mb-2">Skills</span>
                      <div className="flex flex-wrap gap-1.5">
                        {item.skills.map((s) => (
                          <span key={s} className="label px-2 py-0.5 border border-line bg-paper">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </FadeIn>
  );
}

export default function Work() {
  return (
    <section id="work" className="py-20 md:py-28 bg-paper">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeIn>
          <div className="mb-12">
            <span className="label-accent block mb-3">Apprenticeships</span>
            <h2 className="font-display font-medium text-fluid text-ink mb-2 leading-tight">
              Four companies.
              <br />
              Four different challenges.
            </h2>
            <p className="font-sketch text-base text-ink-muted">
              click any card to read the full story ↓
            </p>
          </div>
        </FadeIn>

        <div className="space-y-3">
          {WORK.map((item, i) => (
            <WorkRow key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
