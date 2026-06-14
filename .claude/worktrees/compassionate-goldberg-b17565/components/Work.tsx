"use client";

import { useState, useEffect } from "react";
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

  // Listen for mind-map click events to auto-open this card
  useEffect(() => {
    const handler = (e: Event) => {
      const id = (e as CustomEvent<{ id: string }>).detail.id;
      if (id === item.id) setOpen(true);
    };
    window.addEventListener("open-work-card", handler);
    return () => window.removeEventListener("open-work-card", handler);
  }, [item.id]);

  return (
    <FadeIn delay={index * 0.07}>
      <div id={`work-${item.id}`} className={`border transition-all duration-300 ${open ? "border-line-dark shadow-sm" : "border-line hover:border-line-dark"}`}>
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
              <div className="border-t border-line">
                {/* Thin yellow accent */}
                <div className="h-0.5 bg-yellow" />

                {/* ── STATS BAR ── */}
                {item.highlight && (
                  <div className="flex flex-wrap gap-2 px-5 md:px-8 py-3.5 bg-yellow-soft border-b border-line">
                    {item.highlight.split("·").map((stat, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 font-mono text-[0.65rem] tracking-wide uppercase px-3 py-1.5 border border-line bg-paper text-ink"
                      >
                        <span className="text-yellow font-bold">→</span>
                        {stat.trim()}
                      </span>
                    ))}
                    {item.hours && (
                      <span className="inline-flex items-center gap-1.5 font-mono text-[0.65rem] tracking-wide uppercase px-3 py-1.5 border border-line bg-paper text-ink-muted ml-auto">
                        ⏱ {item.hours}
                      </span>
                    )}
                  </div>
                )}

                {/* ── MAIN CONTENT ── */}
                <div className="p-5 md:p-8 grid md:grid-cols-2 gap-6 bg-paper">

                  {/* LEFT: Quick context + reflections */}
                  <div className="space-y-5">
                    <div>
                      <span className="font-sketch text-sm text-ink-faint block mb-2">The situation —</span>
                      <p className="text-ink text-sm leading-relaxed">{item.summary}</p>
                    </div>
                    <div>
                      <span className="font-sketch text-sm text-ink-faint block mb-2">What I took away —</span>
                      <ul className="space-y-2">
                        {item.reflections.map((r, i) => (
                          <li key={i} className="text-sm text-ink-muted leading-relaxed italic flex gap-2">
                            <span className="not-italic text-ink-faint flex-shrink-0 mt-0.5">◦</span>
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* RIGHT: Outcomes + skills */}
                  <div className="space-y-5">
                    <div>
                      <span className="font-sketch text-sm text-ink-faint block mb-2">What shipped —</span>
                      <ul className="space-y-2">
                        {item.outcomes.map((o, i) => (
                          <li key={i} className="flex gap-2 text-sm text-ink leading-relaxed">
                            <span className="flex-shrink-0 font-bold text-yellow mt-0.5">→</span>
                            {o}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {item.skills.map((s) => (
                        <span key={s} className="label px-2 py-0.5 border border-line bg-surface">
                          {s}
                        </span>
                      ))}
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
              Four engagements.
              <br />
              Four different problems.
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
