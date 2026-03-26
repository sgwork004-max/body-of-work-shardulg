"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { HERO_PROJECTS, type FullProject } from "@/lib/data";
import FadeIn from "./FadeIn";

// Small hand-drawn domain tag
function DomainTag({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center px-2 py-0.5 label bg-surface border border-line text-ink-faint">
      {label}
    </span>
  );
}

function ProjectCard({
  project,
  index,
  large = false,
}: {
  project: FullProject;
  index: number;
  large?: boolean;
}) {
  const [open, setOpen] = useState(false);

  return (
    <FadeIn delay={index * 0.07}>
      <div className={`border transition-all duration-300 overflow-hidden ${open ? "border-line-dark shadow-sm" : "border-line hover:border-line-dark"}`}>
        {/* ── CARD FACE ── */}
        <div
          className={`relative bg-paper cursor-pointer group p-5 md:p-7 ${large ? "min-h-[180px]" : "min-h-[140px]"} flex flex-col justify-between`}
          onClick={() => setOpen(!open)}
        >
          {/* Giant Caveat index number — very faint background */}
          <span
            className="absolute right-4 top-2 font-sketch font-bold select-none pointer-events-none leading-none text-line"
            style={{ fontSize: large ? "5rem" : "3.5rem", lineHeight: 1 }}
            aria-hidden="true"
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          <div className="relative z-10">
            <span className="label-accent block mb-2">{project.company} · {project.duration}</span>
            <h3 className={`font-display font-medium text-ink group-hover:text-ink leading-snug mb-2 ${large ? "text-xl md:text-2xl" : "text-lg md:text-xl"}`}>
              {project.name}
            </h3>
            <p className="font-sketch text-sm text-ink-muted leading-snug max-w-md">
              &ldquo;{project.tagline}&rdquo;
            </p>
          </div>

          <div className="relative z-10 flex items-center justify-between mt-4 gap-3">
            <div className="flex flex-wrap gap-1.5">
              {project.domain.slice(0, 2).map((d) => (
                <DomainTag key={d} label={d} />
              ))}
              {project.hours && (
                <span className="label text-ink-faint">{project.hours}</span>
              )}
            </div>
            <motion.button
              className="flex-shrink-0 w-8 h-8 border border-line flex items-center justify-center text-ink-faint hover:border-ink hover:text-ink transition-colors duration-200"
              animate={{ rotate: open ? 45 : 0 }}
              transition={{ duration: 0.2 }}
              aria-label={open ? "Collapse" : "Expand"}
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <line x1="5" y1="0" x2="5" y2="10" stroke="currentColor" strokeWidth="1.2" />
                <line x1="0" y1="5" x2="10" y2="5" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </motion.button>
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
                <div className="h-0.5 bg-yellow" />
                <div className="p-5 md:p-8 space-y-8">
                  {/* Overview */}
                  <p className="text-ink text-sm leading-relaxed max-w-2xl">{project.overview}</p>

                  {/* Highlights — vertical step flow */}
                  <div>
                    <span className="font-sketch text-sm text-ink-muted block mb-4">what actually happened, in order —</span>
                    <ol className="space-y-0">
                      {project.highlights.map((h, i) => (
                        <li key={i} className="flex gap-4">
                          {/* Step indicator + connecting line */}
                          <div className="flex flex-col items-center flex-shrink-0">
                            <span className="w-6 h-6 bg-yellow text-ink text-xs font-bold flex items-center justify-center rounded-none leading-none">
                              {i + 1}
                            </span>
                            {i < project.highlights.length - 1 && (
                              <div className="w-px flex-1 bg-line min-h-[16px]" />
                            )}
                          </div>
                          {/* Text */}
                          <p className="text-sm text-ink leading-relaxed pb-4 last:pb-0 pt-0.5">{h}</p>
                        </li>
                      ))}
                    </ol>
                  </div>

                  {/* Timeline */}
                  {project.timeline.length > 0 && (
                    <div>
                      <span className="font-sketch text-sm text-ink-muted block mb-3">how it unfolded —</span>
                      <div className="grid md:grid-cols-3 gap-4">
                        {project.timeline.map((phase) => (
                          <div key={phase.phase} className="bg-surface border border-line p-4">
                            <p className="font-sketch text-sm text-ink-muted mb-2">{phase.phase}</p>
                            <ul className="space-y-1">
                              {phase.items.map((item, i) => (
                                <li key={i} className="text-xs text-ink-muted leading-relaxed flex gap-1.5">
                                  <span className="text-line-dark flex-shrink-0">·</span>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Learnings + Moments */}
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <span className="font-sketch text-sm text-ink-muted block mb-2">what stuck —</span>
                      <ul className="space-y-2">
                        {project.learnings.map((l, i) => (
                          <li key={i} className="flex gap-2 text-sm text-ink-muted leading-relaxed">
                            <span className="text-ink-faint flex-shrink-0 mt-0.5">◦</span>
                            <span className="italic">{l}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <span className="font-sketch text-sm text-ink-muted block mb-2">moments that mattered —</span>
                      <div className="space-y-3">
                        {project.moments.map((m, i) => (
                          <div key={i} className="border-l-2 border-yellow pl-3">
                            <p className="text-ink text-sm font-medium leading-snug">{m.moment}</p>
                            <p className="text-ink-muted text-xs leading-relaxed mt-0.5">{m.why}</p>
                          </div>
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

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeIn>
          <div className="mb-12">
            <span className="label-accent block mb-3">Selected Projects</span>
            <h2 className="font-display font-medium text-fluid text-ink leading-tight mb-2">
              Not case studies.
              <br />
              <span className="highlight-yellow">Real briefs from real companies.</span>
            </h2>
            <p className="font-sketch text-base text-ink-muted">
              click any to see the full story ↓
            </p>
          </div>
        </FadeIn>

        {/* Editorial grid */}
        <div className="space-y-3">
          <ProjectCard project={HERO_PROJECTS[0]} index={0} large />
          <div className="grid md:grid-cols-2 gap-3">
            <ProjectCard project={HERO_PROJECTS[1]} index={1} />
            <ProjectCard project={HERO_PROJECTS[2]} index={2} />
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            <ProjectCard project={HERO_PROJECTS[3]} index={3} />
            <ProjectCard project={HERO_PROJECTS[4]} index={4} />
          </div>
        </div>

        {/* See all CTA */}
        <FadeIn delay={0.2}>
          <Link
            href="/projects"
            className="group mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-5 border border-line bg-paper hover:border-line-dark transition-colors duration-200"
          >
            <div>
              <p className="font-display font-medium text-ink text-base leading-snug">
                There are 10 more — each with a full story.
              </p>
              <p className="font-sketch text-sm text-ink-muted mt-0.5">
                from a ₹50 cryptex to a week in a UP village
              </p>
            </div>
            <span className="flex items-center gap-2 font-sketch text-base text-ink-muted group-hover:text-ink transition-colors duration-200 whitespace-nowrap">
              view all 15 →
            </span>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
