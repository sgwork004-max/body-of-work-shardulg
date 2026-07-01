"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ALL_PROJECTS, type FullProject } from "@/lib/data";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const BY_YEAR = ALL_PROJECTS.reduce<Record<string, FullProject[]>>((acc, p) => {
  (acc[p.year] = acc[p.year] || []).push(p);
  return acc;
}, {});

const YEARS = Object.keys(BY_YEAR).sort((a, b) => Number(b) - Number(a));

function TimelineEntry({ project }: { project: FullProject }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative pl-7 md:pl-10">
      {/* Timeline dot */}
      <div
        className="absolute left-0 top-5 w-2.5 h-2.5 rounded-full border border-line transition-all duration-200"
        style={{
          backgroundColor: open ? "#FFE141" : "#F5F4F0",
          borderColor: open ? "#C8C5BC" : "#E5E3DC",
        }}
      />

      <div className={`border overflow-hidden transition-all duration-200 ${open ? "border-line-dark" : "border-line hover:border-line-dark"}`}>
        {/* Header */}
        <div
          className="flex items-start justify-between gap-4 p-4 md:p-5 cursor-pointer group bg-paper"
          onClick={() => setOpen(!open)}
        >
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <span className="label">{project.company}</span>
              <span className="text-line-dark text-xs">·</span>
              <span className="label text-ink-faint">{project.duration}</span>
              {project.hours && (
                <>
                  <span className="text-line-dark text-xs">·</span>
                  <span className="label px-2 py-0.5 bg-surface border border-line text-ink-faint">{project.hours}</span>
                </>
              )}
              {project.isHero && (
                <span className="label px-1.5 py-0.5 bg-yellow text-ink border-0">
                  featured
                </span>
              )}
            </div>
            <h3 className="font-display font-medium text-base md:text-lg text-ink group-hover:text-ink leading-snug">
              {project.name}
            </h3>
            <p className="font-sketch text-sm text-ink-faint mt-0.5 leading-snug">{project.tagline}</p>
          </div>
          <motion.button
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.2 }}
            className="flex-shrink-0 mt-1 w-6 h-6 border border-line flex items-center justify-center text-ink-faint hover:border-ink hover:text-ink transition-colors"
          >
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
              <line x1="4" y1="0" x2="4" y2="8" stroke="currentColor" strokeWidth="1" />
              <line x1="0" y1="4" x2="8" y2="4" stroke="currentColor" strokeWidth="1" />
            </svg>
          </motion.button>
        </div>

        {/* Domain chips */}
        <div className="px-4 md:px-5 pb-3 flex flex-wrap gap-1.5 bg-paper border-t border-line">
          {project.domain.map((d) => (
            <span key={d} className="label px-2 py-0.5 bg-surface border border-line text-ink-faint">
              {d}
            </span>
          ))}
        </div>

        {/* Expanded */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="overflow-hidden"
            >
              <div className="bg-yellow-soft border-t border-line">
                <div className="h-0.5 bg-yellow" />
                <div className="p-4 md:p-7 space-y-6">
                  <p className="text-ink text-sm leading-relaxed max-w-2xl">{project.overview}</p>
                  <div>
                    <span className="font-sketch text-sm text-ink-muted block mb-2">what happened —</span>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {project.highlights.map((h, i) => (
                        <li key={i} className="flex gap-2 text-sm text-ink leading-relaxed">
                          <span className="flex-shrink-0 text-yellow font-bold mt-0.5">→</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {project.timeline.length > 0 && (
                    <div>
                      <span className="font-sketch text-sm text-ink-muted block mb-2">how it unfolded —</span>
                      <div className="grid md:grid-cols-3 gap-3">
                        {project.timeline.map((phase) => (
                          <div key={phase.phase} className="bg-surface border border-line p-3">
                            <p className="font-sketch text-sm text-ink-muted mb-1.5">{phase.phase}</p>
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
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <span className="font-sketch text-sm text-ink-muted block mb-2">what stuck —</span>
                      <ul className="space-y-1.5">
                        {project.learnings.map((l, i) => (
                          <li key={i} className="flex gap-2 text-sm text-ink-muted italic leading-relaxed">
                            <span className="text-ink-faint not-italic flex-shrink-0">◦</span>
                            {l}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <span className="font-sketch text-sm text-ink-muted block mb-2">moments that mattered —</span>
                      <div className="space-y-2.5">
                        {project.moments.map((m, i) => (
                          <div key={i} className="border-l-2 border-yellow pl-3">
                            <p className="text-ink text-sm font-medium leading-snug">{m.moment}</p>
                            <p className="text-ink-faint text-xs leading-relaxed mt-0.5">{m.why}</p>
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
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <main className="bg-paper min-h-screen">
      <Navigation />

      {/* Page header */}
      <div className="pt-24 pb-10 px-6 md:px-12 max-w-7xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-sketch text-sm text-ink-faint hover:text-ink transition-colors mb-8 group"
        >
          <motion.span initial={{ x: 0 }} whileHover={{ x: -3 }} transition={{ duration: 0.15 }}>
            ←
          </motion.span>
          back to home
        </Link>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <span className="label-accent block mb-3">Complete archive</span>
            <h1 className="font-display font-medium text-fluid text-ink leading-tight">
              Every project.
              <br />
              Every story.
            </h1>
          </div>
          <p className="font-sketch text-sm text-ink-muted max-w-xs leading-relaxed">
            {ALL_PROJECTS.length} projects across 3 years —
            click any entry to read the full story
          </p>
        </div>
      </div>

      {/* Timeline */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-20">
        {YEARS.map((year) => {
          const projects = BY_YEAR[year];
          return (
            <div key={year} className="mb-14">
              {/* Year marker */}
              <div className="flex items-center gap-4 mb-6">
                <span className="font-sketch text-4xl md:text-5xl text-ink-faint">
                  {year}
                </span>
                <div className="flex-1 h-px bg-line" />
                <span className="label text-ink-faint">
                  {projects.length} {projects.length === 1 ? "project" : "projects"}
                </span>
              </div>

              {/* Entries */}
              <div className="relative">
                {/* Vertical timeline line */}
                <div className="absolute left-[4px] top-5 bottom-5 w-px bg-line" />
                <div className="space-y-3">
                  {projects.map((project) => (
                    <TimelineEntry key={project.id} project={project} />
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <Footer />
    </main>
  );
}
