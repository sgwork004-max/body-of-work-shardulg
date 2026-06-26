"use client";

import { motion } from "framer-motion";
import { META } from "@/lib/data";
import VitruvianPanel from "./VitruvianPanel";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex overflow-hidden">
      {/* Yellow top bar — full width */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-yellow z-20" />

      {/* ── LEFT PANEL — paper background, text content ── */}
      <div className="relative flex flex-col justify-center bg-paper w-full md:w-[54%] px-8 md:px-14 lg:px-20 pt-24 pb-16 z-10">
        <div className="absolute inset-0 dot-grid pointer-events-none" style={{ opacity: 0.14 }} />

        <div className="relative">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="flex items-center gap-3 mb-10"
          >
            <span className="w-6 h-px bg-line-dark" />
            <span className="label-accent">Body of Work</span>
          </motion.div>

          {/* Name */}
          <div className="overflow-hidden mb-8">
            <motion.h1
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-semibold text-ink"
              style={{
                fontSize: "clamp(3.8rem, 7.5vw, 7rem)",
                lineHeight: 0.91,
                letterSpacing: "-0.025em",
              }}
            >
              Shardul<br />Gupta
            </motion.h1>
          </div>

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42, duration: 0.5 }}
            className="space-y-3 mb-10 max-w-md"
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

          {/* CTAs */}
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
            <a
              href={META.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-ink-faint hover:text-ink transition-colors duration-200"
            >
              LinkedIn ↗
            </a>
            <a
              href={META.notionPortfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-ink-faint hover:text-ink transition-colors duration-200"
            >
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

        {/* Scroll nudge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="absolute bottom-8 left-8 md:left-14 lg:left-20 flex items-center gap-3"
        >
          <motion.span
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-ink-faint text-xs"
          >
            ↓
          </motion.span>
          <span className="font-mono text-[0.52rem] tracking-widest uppercase text-ink-faint">
            scroll
          </span>
        </motion.div>
      </div>

      {/* ── RIGHT PANEL — Vitruvian Man, full bleed dark ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="hidden md:flex flex-1"
      >
        <VitruvianPanel />
      </motion.div>
    </section>
  );
}
