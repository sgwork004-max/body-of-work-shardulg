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
          open ? "border-[#3A3835]" : "border-[#2A2826] hover:border-[#3A3835]"
        }`}
      >
        {/* ── CARD FACE ── */}
        <div
          className="grid md:grid-cols-[100px_1fr] cursor-pointer group"
          onClick={() => setOpen(!open)}
        >
          {/* LEFT: Exhibit number */}
          <div className="bg-[#161614] p-5 md:p-6 flex items-start justify-start border-b md:border-b-0 md:border-r border-[#2A2826]">
            <span
              className="font-display font-semibold leading-none select-none"
              style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", color: "#2E2C2A" }}
            >
              {item.number}
            </span>
          </div>

          {/* RIGHT: Title + meta */}
          <div className="bg-[#111110] p-5 md:p-6 flex flex-col justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span
                  className="font-mono text-[0.6rem] tracking-widest uppercase"
                  style={{ color: "#5A5855" }}
                >
                  {item.domain}
                </span>
                <span style={{ color: "#2E2C2A" }} className="font-mono text-[0.6rem]">·</span>
                <span
                  className="font-mono text-[0.6rem] tracking-widest uppercase"
                  style={{ color: "#5A5855" }}
                >
                  {item.date}
                </span>
              </div>
              <h3
                className="font-display font-semibold leading-snug group-hover:text-[#FFE141] transition-colors duration-200"
                style={{
                  fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
                  color: open ? "#FFE141" : "#D8D5CC",
                }}
              >
                {item.title}
              </h3>
            </div>

            <div className="flex items-center justify-between">
              {/* Preview line when closed */}
              {!open && (
                <p
                  className="font-sketch text-sm leading-relaxed line-clamp-1 max-w-lg"
                  style={{ color: "#5A5855" }}
                >
                  {item.what_happened.slice(0, 90)}…
                </p>
              )}
              {open && <span />}
              <button
                className="flex items-center gap-1.5 font-mono text-[0.6rem] tracking-widest uppercase shrink-0 ml-4 transition-colors duration-200"
                style={{ color: open ? "#FFE141" : "#5A5855" }}
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
              <div className="h-px bg-[#FFE141] opacity-30" />

              <div
                className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#2A2826]"
                style={{ background: "#0E0E0D" }}
              >
                {/* WHAT HAPPENED */}
                <div className="p-6 md:p-8 space-y-3">
                  <span
                    className="font-mono text-[0.55rem] tracking-widest uppercase block"
                    style={{ color: "#5A5855" }}
                  >
                    What Happened —
                  </span>
                  <p
                    className="font-sketch leading-relaxed"
                    style={{ color: "#A8A5A0", fontSize: "1rem" }}
                  >
                    {item.what_happened}
                  </p>
                </div>

                {/* THE DAMAGE */}
                <div className="p-6 md:p-8 space-y-3">
                  <span
                    className="font-mono text-[0.55rem] tracking-widest uppercase block"
                    style={{ color: "#5A5855" }}
                  >
                    The Damage —
                  </span>
                  <p
                    className="font-sketch leading-relaxed"
                    style={{ color: "#A8A5A0", fontSize: "1rem" }}
                  >
                    {item.the_damage}
                  </p>
                </div>

                {/* WHAT ACTUALLY CHANGED — the payoff */}
                <div
                  className="p-6 md:p-8 space-y-3"
                  style={{ background: "#161410" }}
                >
                  <span
                    className="font-mono text-[0.55rem] tracking-widest uppercase block"
                    style={{ color: "#C9A227" }}
                  >
                    What Actually Changed —
                  </span>
                  <p
                    className="font-sketch leading-relaxed"
                    style={{ color: "#D8D5CC", fontSize: "1rem" }}
                  >
                    {item.what_changed}
                  </p>
                  {/* Yellow floor line */}
                  <div className="pt-4">
                    <div className="h-px w-8" style={{ background: "#FFE141", opacity: 0.5 }} />
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
    <section
      id="failures"
      className="py-20 md:py-28"
      style={{ background: "#0A0A09" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* ── HEADER ── */}
        <FadeIn>
          <div className="mb-4 flex items-center gap-3">
            <span className="w-6 h-px" style={{ background: "#3A3835" }} />
            <span
              className="font-mono text-[0.6rem] tracking-widest uppercase"
              style={{ color: "#5A5855" }}
            >
              A Curated Collection
            </span>
          </div>
          <h2
            className="font-display font-semibold leading-tight mb-6"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              color: "#D8D5CC",
            }}
          >
            Museum of{" "}
            <span style={{ color: "#FFE141" }}>Failures.</span>
          </h2>
        </FadeIn>

        {/* ── CURATORIAL NOTE ── */}
        <FadeIn delay={0.08}>
          <div
            className="max-w-2xl mb-14 pl-5 border-l"
            style={{ borderColor: "#2A2826" }}
          >
            <p
              className="font-sketch leading-relaxed mb-3"
              style={{ color: "#6B6860", fontSize: "1.05rem" }}
            >
              This is not a confessional. It&apos;s a collection.
            </p>
            <p
              className="font-sketch leading-relaxed"
              style={{ color: "#5A5855", fontSize: "1rem" }}
            >
              Every exhibit here is a failure worth studying — not because it was dramatic, but because something real was learned that couldn&apos;t have been learned any other way. Failures from comfort and safety teach you nothing. These ones cost something.
            </p>
            <p
              className="font-sketch leading-relaxed mt-3"
              style={{ color: "#5A5855", fontSize: "1rem" }}
            >
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
            <div className="h-px flex-1" style={{ background: "#1A1A18" }} />
            <span
              className="font-sketch text-sm"
              style={{ color: "#3A3835" }}
            >
              collection ongoing
            </span>
            <div className="h-px flex-1" style={{ background: "#1A1A18" }} />
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
