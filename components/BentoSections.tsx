"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const view = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] },
});

function SectionRule({ label, dark }: { label: string; dark?: boolean }) {
  return (
    <div className={`flex items-center gap-5 border-t ${dark ? "border-paper/10" : "border-line"} pt-5 mb-12`}>
      <span className={`font-mono text-[0.55rem] tracking-widest uppercase ${dark ? "text-paper/30" : "text-ink-faint"}`}>
        {label}
      </span>
    </div>
  );
}

/* ══════════════════════════════════════════════
   WORK — ledger rows
══════════════════════════════════════════════ */
const COMPANIES = [
  { n: "01", company: "YelloSKYE",         role: "Founder's Office",   period: "2025–now",  stat: "Current",         current: true  },
  { n: "02", company: "Rayden Design",     role: "Business Dev",       period: "2024–25",   stat: "228 outreaches",  current: false },
  { n: "03", company: "Therefore Design",  role: "Business Dev",       period: "2024",      stat: "200+ reach-outs", current: false },
  { n: "04", company: "Hide & Sneak",      role: "Sales & Retail",     period: "2023–24",   stat: "₹6L in sales",    current: false },
  { n: "05", company: "Rayden Freelance",  role: "Sales Consultant",   period: "2024",      stat: "20+ meetings",    current: false },
];

function WorkSection() {
  return (
    <section className="bg-paper py-24">
      <div className="max-w-[1120px] mx-auto px-6 md:px-12">
        <motion.div {...view()}>
          <SectionRule label="Work Experience" />
          <p className="font-display font-semibold text-ink mb-10"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", lineHeight: 1.05 }}>
            Five companies.<br />Every role owned end-to-end.
          </p>
        </motion.div>

        <div className="mb-10">
          {COMPANIES.map((c, i) => (
            <motion.div key={c.n} {...view(i * 0.06)}>
              <Link href="/work"
                className="group flex items-center gap-4 py-5 border-t border-line hover:bg-yellow hover:border-yellow transition-all duration-150 px-2 -mx-2 cursor-pointer">
                <span className="font-mono text-[0.48rem] tracking-widest text-ink-faint group-hover:text-ink w-6 flex-shrink-0">{c.n}</span>
                <div className="flex-1 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-0">
                  <span className="font-display font-semibold text-ink text-lg group-hover:text-ink sm:flex-[2]">{c.company}</span>
                  <span className="font-mono text-[0.52rem] tracking-widest uppercase text-ink-muted group-hover:text-ink sm:flex-[2]">{c.role}</span>
                  <span className="font-mono text-[0.5rem] tracking-widest text-ink-faint group-hover:text-ink hidden md:block sm:flex-1 text-center">{c.period}</span>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  {c.current && <span className="w-2 h-2 rounded-full bg-green-500 group-hover:bg-ink" />}
                  <span className="font-display font-semibold text-ink text-base">{c.stat}</span>
                </div>
              </Link>
            </motion.div>
          ))}
          <div className="border-t border-line" />
        </div>

        <motion.div {...view(0.32)}>
          <Link href="/work" className="font-mono text-[0.55rem] tracking-widest uppercase text-ink border-b border-ink pb-px hover:text-ink-muted hover:border-ink-muted transition-colors">
            See all five in full →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   PROJECTS — asymmetric bento
══════════════════════════════════════════════ */
function ProjectsSection() {
  return (
    <section className="bg-surface py-24">
      <div className="max-w-[1120px] mx-auto px-6 md:px-12">
        <motion.div {...view()}>
          <SectionRule label="Projects" />
          <p className="font-display font-semibold text-ink mb-10"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", lineHeight: 1.05 }}>
            Seven enterprise projects.<br />Field, strategy, research.
          </p>
        </motion.div>

        <div className="grid grid-cols-12 gap-4 mb-10">
          <motion.div {...view(0.08)} className="col-span-12 md:col-span-7">
            <Link href="/projects" className="group block border border-line bg-paper p-8 hover:border-ink hover:-translate-y-[3px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.07)] transition-all duration-200 h-full" style={{ minHeight: 280 }}>
              <p className="font-mono text-[0.52rem] tracking-widest uppercase text-ink-faint mb-4">Research & Strategy · 2024</p>
              <h3 className="font-display font-semibold text-ink text-2xl mb-3">KOEL Research</h3>
              <p className="text-ink-muted text-sm leading-relaxed mb-8 max-w-sm">
                Market research for Kirloskar Electric — dealer network health, customer perception, channel dynamics.
              </p>
              <div className="flex gap-10">
                {[{ n: "73", l: "Depth interviews" }, { n: "5", l: "Cities" }, { n: "MD", l: "Presented to" }].map(s => (
                  <div key={s.l}>
                    <p className="font-display font-semibold text-ink text-3xl leading-none">{s.n}</p>
                    <p className="font-mono text-[0.48rem] tracking-widest uppercase text-ink-faint mt-1">{s.l}</p>
                  </div>
                ))}
              </div>
            </Link>
          </motion.div>

          <div className="col-span-12 md:col-span-5 flex flex-col gap-4">
            {[
              { title: "Stahl 5-week",    sub: "Strategy Sprint · 2024", desc: "End-to-end positioning and GTM roadmap for a boutique leather brand."  },
              { title: "History Lit Fest", sub: "Event Production · 2024", desc: "Operations, outreach, and on-ground execution of a literary festival." },
            ].map((p, i) => (
              <motion.div key={p.title} {...view(0.14 + i * 0.08)}>
                <Link href="/projects" className="group block border border-line bg-paper p-6 hover:border-ink hover:-translate-y-[3px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.07)] transition-all duration-200" style={{ minHeight: 120 }}>
                  <p className="font-mono text-[0.5rem] tracking-widest uppercase text-ink-faint mb-2">{p.sub}</p>
                  <h3 className="font-display font-semibold text-ink text-lg mb-2">{p.title}</h3>
                  <p className="text-ink-muted text-sm leading-relaxed">{p.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div {...view(0.28)} className="col-span-12">
            <Link href="/projects" className="group flex items-center justify-between border border-line border-dashed bg-paper px-8 py-5 hover:border-ink transition-all duration-200">
              <p className="text-ink-muted text-sm">4 more Let's Enterprise sprints — Startup Consulting, Business X-Ray, Product Dev, Service Design, 3D Sales, Rural Immersion</p>
              <span className="font-display font-semibold text-ink text-2xl ml-6 flex-shrink-0">+4</span>
            </Link>
          </motion.div>
        </div>

        <motion.div {...view(0.32)}>
          <Link href="/projects" className="font-mono text-[0.55rem] tracking-widest uppercase text-ink border-b border-ink pb-px hover:text-ink-muted hover:border-ink-muted transition-colors">
            See all seven projects →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   WRITING — dark, tracklist
══════════════════════════════════════════════ */
const ESSAYS = [
  { n: "01", title: "Playing With Freedom",              pub: "Conflexions", excerpt: "On using constraints to actually understand what freedom means." },
  { n: "02", title: "Designing the Room Not the Candle", pub: "Conflexions", excerpt: "Systems thinking as a design principle for life and work."         },
  { n: "03", title: "Dis-traction",                      pub: "Medium",      excerpt: "Why getting distracted might be the point, not the problem."      },
  { n: "04", title: "'Don't Give Up' Is Bad Advice",     pub: "Medium",      excerpt: "The most popular advice is often the least useful."                },
];

function WritingSection() {
  return (
    <section className="bg-ink py-24">
      <div className="max-w-[1120px] mx-auto px-6 md:px-12">
        <motion.div {...view()}>
          <SectionRule label="Writing" dark />
          <p className="font-display font-semibold text-paper mb-12"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", lineHeight: 1.05 }}>
            Six essays on work,<br />freedom, and self-critique.
          </p>
        </motion.div>

        <motion.div {...view(0.08)} className="mb-12 max-w-2xl pl-6 border-l-2 border-yellow">
          <p className="font-display font-semibold text-paper/80 text-xl leading-snug italic">
            &ldquo;Playing with freedom to understand constraint — that&rsquo;s the oldest design problem there is.&rdquo;
          </p>
        </motion.div>

        <div className="mb-10">
          {ESSAYS.map((e, i) => (
            <motion.div key={e.n} {...view(0.1 + i * 0.07)}>
              <Link href="/writing"
                className="group flex items-start gap-5 py-5 border-t border-paper/10 hover:border-paper/30 transition-colors duration-150">
                <span className="font-mono text-[0.48rem] tracking-widest text-paper/25 w-6 flex-shrink-0 mt-1">{e.n}</span>
                <div className="flex-1">
                  <p className="font-display font-semibold text-paper text-lg group-hover:text-paper/80 transition-colors">{e.title}</p>
                  <p className="text-paper/40 text-sm mt-1 leading-relaxed">{e.excerpt}</p>
                </div>
                <span className="font-mono text-[0.48rem] tracking-widest uppercase text-paper/20 flex-shrink-0 mt-1">{e.pub}</span>
              </Link>
            </motion.div>
          ))}
          <div className="border-t border-paper/10 py-4">
            <p className="font-mono text-[0.48rem] tracking-widest uppercase text-paper/20">+ 2 more essays</p>
          </div>
        </div>

        <motion.div {...view(0.36)}>
          <Link href="/writing" className="font-mono text-[0.55rem] tracking-widest uppercase text-paper/50 border-b border-paper/25 pb-px hover:text-paper hover:border-paper transition-colors">
            Read all six →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   STUDIO
══════════════════════════════════════════════ */
function StudioSection() {
  return (
    <section className="bg-paper py-24">
      <div className="max-w-[1120px] mx-auto px-6 md:px-12">
        <motion.div {...view()}>
          <SectionRule label="Studio — Personal Projects" />
          <p className="font-display font-semibold text-ink mb-10"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", lineHeight: 1.05 }}>
            Building in the open.<br />Slowly, deliberately.
          </p>
        </motion.div>

        <div className="grid grid-cols-12 gap-4 mb-10">
          <motion.div {...view(0.08)} className="col-span-12 md:col-span-8">
            <Link href="/studio" className="group block border border-line bg-paper p-8 hover:border-ink hover:-translate-y-[3px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.07)] transition-all duration-200" style={{ minHeight: 220 }}>
              <div className="flex items-center justify-between mb-5">
                <p className="font-mono text-[0.52rem] tracking-widest uppercase text-ink-faint">Knowledge System</p>
                <span className="inline-flex items-center gap-1.5 bg-yellow px-2.5 py-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-ink" />
                  <span className="font-mono text-[0.5rem] tracking-widest uppercase text-ink">Building now</span>
                </span>
              </div>
              <h3 className="font-display font-semibold text-ink text-2xl mb-3">Second Brain</h3>
              <p className="text-ink-muted text-sm leading-relaxed max-w-md">
                A personal knowledge system built in Obsidian — to capture everything I read, connect ideas across domains, and surface what actually matters.
              </p>
            </Link>
          </motion.div>

          <motion.div {...view(0.14)} className="col-span-12 md:col-span-4">
            <div className="border border-dashed border-line p-8 flex flex-col items-center justify-center" style={{ minHeight: 220 }}>
              <p className="font-mono text-[0.52rem] tracking-widest uppercase text-ink-faint text-center leading-loose">
                More projects<br />coming soon
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div {...view(0.2)}>
          <Link href="/studio" className="font-mono text-[0.55rem] tracking-widest uppercase text-ink border-b border-ink pb-px hover:text-ink-muted hover:border-ink-muted transition-colors">
            See the studio →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   FAILURES — dark, museum cards
══════════════════════════════════════════════ */
const EXHIBITS = [
  { n: "01", title: "The pitch that went nowhere",              lesson: "Conviction ≠ preparation."                               },
  { n: "02", title: "The role I wasn't ready for",             lesson: "You can want something and still not be ready for it."   },
  { n: "03", title: "The strategy that looked right on paper", lesson: "Models are not reality."                                 },
  { n: "04", title: "The outreach that missed completely",      lesson: "Volume without signal is noise."                        },
  { n: "05", title: "The project I quit too early",             lesson: "Some things need more time than you give them."         },
];

function FailuresSection() {
  return (
    <section className="bg-ink py-24">
      <div className="max-w-[1120px] mx-auto px-6 md:px-12">
        <motion.div {...view()}>
          <SectionRule label="A Museum of Failures" dark />
        </motion.div>

        <div className="grid grid-cols-12 gap-8 items-start mb-16">
          <motion.div {...view(0.06)} className="col-span-12 md:col-span-5">
            <p className="font-display font-semibold text-yellow leading-none"
              style={{ fontSize: "clamp(6rem, 14vw, 12rem)" }}>
              5
            </p>
            <p className="font-mono text-[0.52rem] tracking-widest uppercase text-yellow/40 -mt-2">exhibits on display</p>
            <p className="font-display font-semibold text-paper/50 text-lg leading-snug mt-8 max-w-xs">
              &ldquo;Things didn&rsquo;t go as planned. All five are documented, dissected, on display.&rdquo;
            </p>
          </motion.div>

          <div className="col-span-12 md:col-span-7 flex flex-col gap-3">
            {EXHIBITS.map((e, i) => (
              <motion.div key={e.n} {...view(0.1 + i * 0.07)}>
                <Link href="/failures"
                  className="group block border border-paper/10 hover:border-paper/25 p-5 transition-colors duration-150">
                  <span className="font-mono text-[0.48rem] tracking-widest text-yellow/40 block mb-2">EXHIBIT {e.n}</span>
                  <p className="font-display font-semibold text-paper text-base group-hover:text-paper/80 transition-colors mb-1">{e.title}</p>
                  <p className="font-mono text-[0.5rem] tracking-widest uppercase text-paper/30 italic">{e.lesson}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div {...view(0.44)}>
          <Link href="/failures" className="font-mono text-[0.55rem] tracking-widest uppercase text-paper/40 border-b border-paper/20 pb-px hover:text-paper hover:border-paper transition-colors">
            Enter the museum →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   CONTACT + FOOTER
══════════════════════════════════════════════ */
function ContactSection() {
  return (
    <section className="bg-paper py-24 border-t border-line">
      <div className="max-w-[1120px] mx-auto px-6 md:px-12">
        <motion.div {...view()}>
          <p className="font-mono text-[0.55rem] tracking-widest uppercase text-ink-faint mb-6">Get in touch</p>
          <p className="font-display font-semibold text-ink mb-6"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1 }}>
            Let&rsquo;s talk.
          </p>
          <a href="mailto:sg.work004@gmail.com"
            className="font-mono text-[0.8rem] tracking-widest uppercase text-ink hover:text-ink-muted transition-colors border-b border-ink pb-px">
            sg.work004@gmail.com
          </a>
        </motion.div>

        <motion.div {...view(0.12)}
          className="mt-20 pt-6 border-t border-line flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div className="flex items-center gap-5">
            <span className="font-display font-semibold text-ink">SG</span>
            <span className="font-mono text-[0.5rem] tracking-widest uppercase text-ink-faint">Pune · India · July 2026</span>
          </div>
          <div className="flex flex-wrap items-center gap-6">
            {[["Work","/work"],["Projects","/projects"],["Studio","/studio"],["Writing","/writing"],["Failures","/failures"]].map(([l, h]) => (
              <Link key={h} href={h} className="font-mono text-[0.5rem] tracking-widest uppercase text-ink-faint hover:text-ink transition-colors">{l}</Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function BentoSections() {
  return (
    <>
      <WorkSection />
      <ProjectsSection />
      <WritingSection />
      <StudioSection />
      <FailuresSection />
      <ContactSection />
    </>
  );
}
