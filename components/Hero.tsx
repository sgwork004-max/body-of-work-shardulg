"use client";

import { motion } from "framer-motion";
import { META } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-paper"
    >
      {/* Yellow top bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-yellow z-20" />

      <div className="absolute inset-0 dot-grid pointer-events-none" style={{ opacity: 0.14 }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 pt-24 pb-16 w-full">

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="w-6 h-px bg-line-dark" />
          <span className="label-accent">Body of Work</span>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_auto] gap-12 md:gap-14 items-start">

          {/* LEFT */}
          <div>
            <div className="overflow-hidden mb-8">
              <motion.h1
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="font-display font-semibold text-ink"
                style={{
                  fontSize: "clamp(3.5rem, 8vw, 6.5rem)",
                  lineHeight: 0.93,
                  letterSpacing: "-0.02em",
                }}
              >
                Shardul<br />Gupta
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42, duration: 0.5 }}
              className="max-w-lg space-y-3 mb-10"
            >
              <p className="text-ink text-lg leading-relaxed font-medium">
                Three years. Nine companies.
              </p>
              <p className="text-ink-muted leading-relaxed">
                Sales, field research, business development,
                and founder&apos;s office operations.
              </p>
              <p className="text-ink-faint text-sm font-mono tracking-wide">
                The work is the argument.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65, duration: 0.4 }}
              className="flex flex-wrap items-center gap-5"
            >
              <a
                href="/work"
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-ink text-paper text-sm font-medium hover:bg-yellow hover:text-ink transition-colors duration-200"
              >
                See the work
                <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
              </a>
              <a href={META.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-ink-faint hover:text-ink transition-colors duration-200">
                LinkedIn ↗
              </a>
              <a href={META.notionPortfolio} target="_blank" rel="noopener noreferrer" className="text-sm text-ink-faint hover:text-ink transition-colors duration-200">
                Notion archive ↗
              </a>
            </motion.div>

            {/* Mobile company strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.4 }}
              className="mt-10 block md:hidden border-t border-line pt-4"
            >
              <div className="font-mono text-[0.46rem] tracking-widest uppercase text-ink-faint mb-2">
                9 companies · 3 years
              </div>
              <p className="text-sm text-ink-muted leading-relaxed">
                YelloSKYE · Rayden · Stahl · Koel × Kirloskar · Therefore ·
                Hide &amp; Sneak · EY · Let&apos;s Enterprise
              </p>
            </motion.div>
          </div>

          {/* RIGHT — current engagement card */}
          <motion.div
            initial={{ opacity: 0, x: 14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="hidden md:flex flex-col border border-line overflow-hidden"
            style={{ width: 280 }}
          >
            {/* Top: yellow — now */}
            <div className="bg-yellow px-5 py-6">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-ink" />
                <span className="font-mono text-[0.46rem] tracking-widest uppercase text-ink/60">
                  Now
                </span>
              </div>
              <div className="space-y-5">
                <div>
                  <div
                    className="font-display font-semibold text-ink leading-none mb-1.5"
                    style={{ fontSize: "1.55rem" }}
                  >
                    YelloSKYE
                  </div>
                  <div className="font-mono text-[0.44rem] tracking-widest uppercase text-ink/55">
                    Founder&apos;s Office · Nov 2024 →
                  </div>
                </div>
                <div>
                  <div
                    className="font-display font-semibold text-ink leading-none mb-1.5"
                    style={{ fontSize: "1.25rem" }}
                  >
                    Rayden Studio
                  </div>
                  <div className="font-mono text-[0.44rem] tracking-widest uppercase text-ink/55">
                    B2B Sales · May 2025 →
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom: paper — history */}
            <div className="bg-paper border-t border-line px-5 py-5 flex-1">
              <div className="font-mono text-[0.44rem] tracking-widest uppercase text-ink-faint mb-3">
                Before this
              </div>
              <p className="text-sm text-ink-muted leading-relaxed">
                Stahl · Koel × Kirloskar · Therefore Design ·
                Hide &amp; Sneak · Ernst &amp; Young · Let&apos;s Enterprise
              </p>
              <div className="mt-4 pt-3 border-t border-line">
                <span className="font-mono text-[0.44rem] tracking-widest uppercase text-ink-faint">
                  9 companies · 3 years
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll nudge */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="absolute bottom-8 left-6 md:left-12 flex items-center gap-3"
      >
        <motion.span
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-ink-faint text-xs"
        >
          ↓
        </motion.span>
        <span className="font-mono text-[0.52rem] tracking-widest uppercase text-ink-faint">scroll</span>
      </motion.div>
    </section>
  );
}
