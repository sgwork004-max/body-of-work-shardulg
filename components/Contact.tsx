"use client";

import { motion } from "framer-motion";
import { META } from "@/lib/data";
import FadeIn from "./FadeIn";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-40 bg-paper border-t border-line">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <FadeIn>
          <span className="font-mono text-[0.52rem] tracking-widest uppercase text-ink-faint block mb-5">
            Get in touch
          </span>
          <h2
            className="font-display font-semibold text-ink mb-14"
            style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)", lineHeight: 0.9, letterSpacing: "-0.02em" }}
          >
            Say hello.
          </h2>
        </FadeIn>

        <div className="space-y-2 max-w-md">
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
          ].map((link, i) => (
            <FadeIn key={link.label} delay={i * 0.08}>
              <motion.a
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="group flex items-center justify-between px-5 py-5 border border-line bg-paper hover:border-ink hover:bg-yellow transition-all duration-200"
                whileHover={{ x: 3 }}
                transition={{ duration: 0.15 }}
              >
                <div>
                  <span className="label block mb-0.5">{link.label}</span>
                  <span className="text-sm text-ink font-medium">{link.display}</span>
                </div>
                <span className="text-ink-faint group-hover:text-ink transition-colors duration-200 text-base">
                  {link.icon}
                </span>
              </motion.a>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.32}>
          <p className="font-mono text-[0.5rem] tracking-widest uppercase text-ink-faint mt-8">
            Usually responds within a day.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
