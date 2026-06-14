"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAILURES, type FailureExhibit } from "@/lib/data";
import FadeIn from "./FadeIn";

function ExhibitCard({ item, index }: { item: FailureExhibit; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <FadeIn delay={index * 0.07}>
      <div
        className={`border transition-all duration-300 ${
          open ? "border-line-dark" : "border-line hover:border-line-dark"
        }`}
      >
        {/* ── CARD FACE ── */}
        <div
          className="grid md:grid-cols-[100px_1fr] cursor-pointer group"
          onClick={() => setOpen(!open)}
        >
          {/* LEFT: Exhibit number */}
          <div className="bg-surface p-5 md:p-6 flex items-start justify-start border-b md:border-b-0 md:border-r border-line">
            <span
              className="font-display font-semibold leading-none select-none text-line-dark"
              style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", color: "rgb(var(--color-line-dark))" }}
            >
              {item.number}
            </span>
          </div>

          {/* RIGHT: Title + meta */}
          <div className="bg-paper p-5 md:p-6 flex flex-col justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="font-mono text-[0.6rem] tracking-widest uppercase text-ink-faint">
                  {item.domain}
                </span>
                <span className="font-mono text-[0.6rem] text-line-dark">·</span>
                <span className="font-mono text-[0.6rem] tracking-widest uppercase text-ink-faint">
                  {item.date}
                </span>
              </div>
              <h3
                className="font-display font-semibold leading-snug transition-colors duration-200"
                style={{
                  fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
                  color: open
                    ? "rgb(var(--color-yellow))"
                    : "rgb(var(--color-ink))",
                }}
              >
                <span className="group-hover:text-[rgb(var(--color-yellow))]">{item.title}</span>
              </h3>
            </div>

            <div className="flex items-center justify-between">
              {/* Preview line when closed */}
              {!open && (
                <p className="font-sketch text-sm leading-relaxed line-clamp-1 max-w-lg text-ink-faint">
                  {item.what_happened.slice(0, 90)}…
                </p>
              )}
              {open && <span />}
              <button
                className="flex items-center gap-1.5 font-mono text-[0.6rem] tracking-widest uppercase shrink-0 ml-4 transition-colors duration-200"
                style={{ color: open ? "rgb(var(--color-yellow))" : "rgb(var(--color-ink-faint))" }}
              >
                {open ? "close" : "open exhibit"}
                <motion.span
                  animate={{ rotate: open ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="inline-block"
                >
                  →
                </motion.span>
              </button>
            </div>
          </div>
        </div>

        {/* ── EXPANDED PLACARD ── */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="overflow-hidden"
            >
              {/* Thin yellow accent */}
              <div className="h-px bg-yellow opacity-40" />

              <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-line bg-surface">
                {/* WHAT HAPPENED */}
                <div className="p-6 md:p-8 space-y-3">
                  <span className="font-mono text-[0.55rem] tracking-widest uppercase block text-ink-faint">
                    What Happened —
                  </span>
                  <p className="font-sketch leading-relaxed text-ink-muted" style={{ fontSize: "1rem" }}>
                    {item.what_happened}
                  </p>
                </div>

                {/* THE DAMAGE */}
                <div className="p-6 md:p-8 space-y-3">
                  <span className="font-mono text-[0.55rem] tracking-widest uppercase block text-ink-faint">
                    The Damage —
                  </span>
                  <p className="font-sketch leading-relaxed text-ink-muted" style={{ fontSize: "1rem" }}>
                    {item.the_damage}
                  </p>
                </div>

                {/* WHAT ACTUALLY CHANGED — the payoff */}
                <div className="p-6 md:p-8 space-y-3 bg-yellow-soft">
                  <span
                    className="font-mono text-[0.55rem] tracking-widest uppercase block"
                    style={{ color: "rgb(var(--color-yellow) / 0.8)" }}
                  >
                    What Actually Changed —
                  </span>
                  <p className="font-sketch leading-relaxed text-ink" style={{ fontSize: "1rem" }}>
                    {item.what_changed}
                  </p>
                  {/* Yellow floor line */}
                  <div className="pt-4">
                    <div className="h-px w-8 bg-yellow opacity-60" />
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

export default function Failures() {
  return (
    <section id="failures" className="py-20 md:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* ── HEADER ── */}
        <FadeIn>
          <div className="mb-4 flex items-center gap-3">
            <span className="w-6 h-px bg-line-dark" />
            <span className="font-mono text-[0.6rem] tracking-widest uppercase text-ink-faint">
              A Curated Collection
            </span>
          </div>
          <h2 className="font-display font-semibold leading-tight mb-6 text-ink"
            style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
          >
            Museum of{" "}
            <span className="highlight-yellow">Failures.</span>
          </h2>
        </FadeIn>

        {/* ── CURATORIAL NOTE ── */}
        <FadeIn delay={0.08}>
          <div className="max-w-2xl mb-14 pl-5 border-l border-line">
            <p className="font-sketch leading-relaxed mb-3 text-ink-muted" style={{ fontSize: "1.05rem" }}>
              This is not a confessional. It&apos;s a collection.
            </p>
            <p className="font-sketch leading-relaxed text-ink-faint" style={{ fontSize: "1rem" }}>
              Every exhibit here is a failure worth studying — not because it was dramatic, but because something real was learned that couldn&apos;t have been learned any other way. Failures from comfort and safety teach you nothing. These ones cost something.
            </p>
            <p className="font-sketch leading-relaxed mt-3 text-ink-faint" style={{ fontSize: "1rem" }}>
              The format is deliberate: each exhibit has a title, an honest account, the real damage, and what actually changed. Not what should have changed — what did. Sanitised lessons are useless.
            </p>
          </div>
        </FadeIn>

        {/* ── EXHIBITS ── */}
        <div className="space-y-2">
          {FAILURES.map((item, i) => (
            <ExhibitCard key={item.id} item={item} index={i} />
          ))}
        </div>

        {/* ── FLOOR NOTE ── */}
        <FadeIn delay={0.2}>
          <div className="mt-12 flex items-center gap-4">
            <div className="h-px flex-1 bg-line" />
            <span className="font-sketch text-sm text-line-dark">
              collection ongoing
            </span>
            <div className="h-px flex-1 bg-line" />
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
