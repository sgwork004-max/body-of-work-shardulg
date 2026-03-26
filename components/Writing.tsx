"use client";

import { motion } from "framer-motion";
import { ESSAYS } from "@/lib/data";
import FadeIn from "./FadeIn";

/* ── Decorative open-book SVG for hero card ── */
function BookSVG() {
  return (
    <svg
      viewBox="0 0 110 76"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-20 h-14"
    >
      {/* Left page */}
      <path
        d="M 55 6 C 38 4, 12 9, 4 20 L 4 70 C 12 60, 38 56, 55 58"
        stroke="#C8C5BC"
        strokeWidth="1.5"
        fill="#FFFCE0"
      />
      <line x1="12" y1="28" x2="47" y2="26" stroke="#C8C5BC" strokeWidth="1" />
      <line x1="12" y1="35" x2="47" y2="33" stroke="#C8C5BC" strokeWidth="1" />
      <line x1="12" y1="42" x2="44" y2="40" stroke="#FFE141" strokeWidth="1.8" />
      <line x1="12" y1="49" x2="41" y2="47" stroke="#C8C5BC" strokeWidth="1" />
      <line x1="12" y1="56" x2="36" y2="54" stroke="#C8C5BC" strokeWidth="0.8" />
      {/* Right page */}
      <path
        d="M 55 6 C 72 4, 98 9, 106 20 L 106 70 C 98 60, 72 56, 55 58"
        stroke="#C8C5BC"
        strokeWidth="1.5"
        fill="#FFFCE0"
      />
      <line x1="63" y1="28" x2="98" y2="26" stroke="#C8C5BC" strokeWidth="1" />
      <line x1="63" y1="35" x2="98" y2="33" stroke="#C8C5BC" strokeWidth="1" />
      <line x1="63" y1="42" x2="95" y2="40" stroke="#C8C5BC" strokeWidth="1" />
      <line x1="63" y1="49" x2="92" y2="47" stroke="#C8C5BC" strokeWidth="1" />
      {/* Spine */}
      <path d="M 55 6 L 55 58" stroke="#C8C5BC" strokeWidth="1.5" />
    </svg>
  );
}

/* ── Small squiggle — visual texture on smaller cards ── */
function Squiggle({ color = "#E5E3DC" }: { color?: string }) {
  return (
    <svg viewBox="0 0 60 8" fill="none" className="w-12 h-2 mt-3">
      <path
        d="M 1 4 C 8 2, 14 6, 20 4 C 26 2, 32 6, 38 4 C 44 2, 50 6, 59 4"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Writing() {
  const [hero, ...rest] = ESSAYS;

  return (
    <section id="writing" className="py-20 md:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* ── Section header ── */}
        <FadeIn>
          <div className="mb-10">
            <span className="label-accent block mb-3">Things I think about</span>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
              <h2 className="font-display font-medium text-fluid text-ink leading-tight">
                Writing is how
                <br />I understand anything.
              </h2>
              <p className="font-sketch text-base text-ink-muted max-w-xs leading-relaxed">
                honest thinking, not polished thought-leadership
              </p>
            </div>
          </div>
        </FadeIn>

        {/* ── Bento grid ── */}
        <FadeIn delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">

            {/* ──── HERO CARD — Playing With Freedom ──── */}
            <motion.a
              href={hero.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="md:col-span-2 md:row-span-2 group relative bg-yellow-soft border border-line hover:border-yellow transition-all duration-300 p-8 md:p-10 flex flex-col justify-between overflow-hidden"
              style={{ minHeight: 340 }}
            >
              {/* Big decorative quote mark watermark */}
              <div
                className="absolute top-2 right-5 font-sketch leading-none text-yellow select-none pointer-events-none"
                style={{ fontSize: "9rem", opacity: 0.25 }}
              >
                &ldquo;
              </div>

              {/* Subtle dot grid inside hero card */}
              <div
                className="absolute inset-0 dot-grid pointer-events-none"
                style={{ opacity: 0.12 }}
              />

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-7">
                  <BookSVG />
                  <div>
                    <span className="label-accent">{hero.publication}</span>
                    <p className="font-sketch text-sm text-ink-faint mt-0.5">
                      featured essay
                    </p>
                  </div>
                </div>

                <h3
                  className="font-display font-semibold text-ink leading-snug mb-4 max-w-lg"
                  style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)" }}
                >
                  {hero.title}
                </h3>

                <p className="font-sketch text-lg text-ink-muted leading-relaxed max-w-sm">
                  {hero.note}
                </p>

                <Squiggle color="#FFE141" />
              </div>

              {/* Footer row */}
              <div className="relative z-10 flex items-center justify-between mt-8 pt-4 border-t border-line">
                <span className="font-sketch text-base text-ink-faint">
                  read the essay
                </span>
                <motion.span
                  className="text-ink-muted group-hover:text-ink transition-colors duration-200 text-lg inline-block"
                  whileHover={{ x: 3 }}
                >
                  ↗
                </motion.span>
              </div>

              {/* Yellow bottom accent bar */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow" />
            </motion.a>

            {/* ──── RIGHT COLUMN — Cards 2 & 3 ──── */}
            {rest.slice(0, 2).map((essay, i) => (
              <motion.a
                key={essay.url}
                href={essay.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="group relative bg-paper border border-line hover:border-line-dark transition-all duration-200 p-6 flex flex-col justify-between overflow-hidden"
                style={{ minHeight: 160 }}
              >
                <div>
                  <span className="label text-ink-faint block mb-3">
                    {essay.publication}
                  </span>
                  <h3 className="font-display font-medium text-base text-ink leading-snug mb-2">
                    {essay.title}
                  </h3>
                  <p className="font-sketch text-sm text-ink-faint leading-relaxed">
                    {essay.note}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <Squiggle />
                  <span className="text-ink-faint group-hover:text-ink group-hover:translate-x-0.5 transition-all duration-200 text-sm">
                    ↗
                  </span>
                </div>
              </motion.a>
            ))}

            {/* ──── BOTTOM ROW — Cards 4, 5, 6 ──── */}
            {rest.slice(2).map((essay, i) => (
              <motion.a
                key={essay.url}
                href={essay.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="group relative bg-paper border border-line hover:border-line-dark transition-all duration-200 p-5 flex flex-col justify-between overflow-hidden"
                style={{ minHeight: 130 }}
              >
                {/* Faint index number watermark */}
                <div
                  className="absolute top-2 right-3 font-sketch text-line leading-none select-none pointer-events-none"
                  style={{ fontSize: "3.5rem", opacity: 0.6 }}
                >
                  {String(i + 3).padStart(2, "0")}
                </div>

                <div className="relative z-10">
                  <h3 className="font-display font-medium text-sm text-ink leading-snug mb-1.5 max-w-[85%]">
                    {essay.title}
                  </h3>
                  <p className="font-sketch text-sm text-ink-faint leading-relaxed line-clamp-2">
                    {essay.note}
                  </p>
                </div>

                <div className="relative z-10 flex items-center justify-between mt-3 pt-2 border-t border-line">
                  <span className="label">{essay.publication}</span>
                  <span className="text-ink-faint group-hover:text-ink transition-colors duration-200 text-xs">
                    ↗
                  </span>
                </div>
              </motion.a>
            ))}

          </div>
        </FadeIn>

        {/* Footer annotation */}
        <FadeIn delay={0.35}>
          <p className="font-sketch text-sm text-ink-faint mt-6 text-center">
            published on Conflexions / Let&apos;s Enterprise + Medium
          </p>
        </FadeIn>

      </div>
    </section>
  );
}
