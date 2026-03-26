"use client";

import { motion } from "framer-motion";
import { META } from "@/lib/data";
import FadeIn from "./FadeIn";

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-yellow-soft overflow-hidden relative">
      {/* Subtle hand-drawn circle decoration */}
      <div className="absolute top-8 right-8 opacity-30 pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 120 120" fill="none" className="w-28 h-28">
          <path
            d="M 60 10 C 90 8, 112 28, 110 60 C 108 92, 85 112, 58 110 C 30 108, 10 88, 12 58 C 14 28, 35 12, 60 10"
            stroke="#C8C5BC" strokeWidth="1.5" fill="none"
          />
          <path
            d="M 60 22 C 84 20, 100 38, 98 60 C 96 82, 78 98, 58 96 C 36 94, 22 78, 24 58 C 26 36, 40 24, 60 22"
            stroke="#E5E3DC" strokeWidth="1" strokeDasharray="4 3" fill="none"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-xl">
          <FadeIn>
            <span className="font-sketch text-sm text-ink-muted block mb-4">got a problem worth solving? ↓</span>
            <h2 className="font-display font-medium text-fluid text-ink leading-tight mb-4">
              Let&apos;s talk.
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-ink-muted text-sm leading-relaxed max-w-sm mb-10">
              Open to interesting problems, collaborations, and conversations
              with people building things that matter.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="space-y-2">
              {[
                {
                  label: "Email",
                  display: META.email,
                  href: `mailto:${META.email}`,
                  icon: "→",
                },
                {
                  label: "LinkedIn",
                  display: "Shardul Gupta",
                  href: META.linkedin,
                  icon: "↗",
                },
                {
                  label: "Notion archive",
                  display: "Raw reports, weekly logs, the whole thing",
                  href: META.notionPortfolio,
                  icon: "↗",
                },
              ].map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  className="group flex items-center justify-between px-4 py-4 border border-line bg-paper hover:border-line-dark hover:shadow-sm transition-all duration-200"
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.15 }}
                >
                  <div>
                    <span className="label block mb-0.5">{link.label}</span>
                    <span className="text-sm text-ink font-medium group-hover:text-ink">{link.display}</span>
                  </div>
                  <span className="text-ink-faint group-hover:text-ink transition-colors duration-200 text-base">
                    {link.icon}
                  </span>
                </motion.a>
              ))}
            </div>
          </FadeIn>

          {/* Sketch annotation */}
          <FadeIn delay={0.4}>
            <p className="font-sketch text-sm text-ink-faint mt-6 flex items-center gap-2">
              <svg viewBox="0 0 30 16" className="w-6 h-3" fill="none">
                <path d="M 2 8 C 8 4, 16 12, 24 8" stroke="#C8C5BC" strokeWidth="1.2" strokeLinecap="round" />
                <path d="M 22 4 L 26 8 L 22 12" stroke="#C8C5BC" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              usually responds within a day
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
