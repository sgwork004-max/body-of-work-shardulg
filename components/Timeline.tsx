"use client";

import FadeIn from "./FadeIn";
import { TIMELINE, type TimelineEvent, type TimelineYear } from "@/lib/timeline";

function EventEntry({ event, delay }: { event: TimelineEvent; delay: number }) {
  return (
    <FadeIn delay={delay} direction="up">
      <div className={`relative pl-7 ${event.major ? "mb-8" : "mb-5"}`}>
        {/* Dot on rail */}
        <div
          className={`absolute left-0 top-[6px] w-2.5 h-2.5 border ${
            event.major
              ? "bg-yellow border-ink"
              : "bg-paper border-line-dark"
          }`}
          style={{ transform: "translateX(-50%)", marginLeft: "1px" }}
        />

        {/* Tag + date */}
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <span className="font-mono text-[0.55rem] tracking-widest uppercase text-ink-faint">
            {event.date}
          </span>
          <span className="text-line font-mono text-[0.55rem]">·</span>
          <span className="font-mono text-[0.55rem] tracking-widest uppercase text-ink-faint">
            {event.tag}
          </span>
        </div>

        {/* Title */}
        <h3
          className={`font-display font-medium text-ink leading-snug ${
            event.major ? "text-base md:text-[1.1rem]" : "text-sm md:text-base"
          }`}
        >
          {event.title}
        </h3>

        {/* Metric — the memorable number/fact */}
        {event.metric && (
          <p className="font-sketch text-[1.05rem] text-ink mt-1 leading-snug max-w-xl">
            {event.metric}
          </p>
        )}

        {/* Note — human detail */}
        {event.note && (
          <p className="font-sketch text-sm text-ink-faint mt-1 leading-relaxed max-w-xl">
            {event.note}
          </p>
        )}
      </div>
    </FadeIn>
  );
}

function YearBlock({ group, isLast }: { group: TimelineYear; isLast: boolean }) {
  const isGrad = group.year === "2026";

  return (
    <div className={`relative grid md:grid-cols-[100px_1fr] gap-0 md:gap-8 ${isLast ? "" : "mb-16"}`}>
      {/* Year label — left column on desktop */}
      <FadeIn>
        <div className="mb-6 md:mb-0 md:pt-1 md:text-right pr-0 md:pr-4">
          <span
            className={`font-sketch font-bold leading-none select-none ${
              isGrad ? "text-yellow" : "text-line-dark"
            }`}
            style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)" }}
          >
            {group.year}
          </span>
        </div>
      </FadeIn>

      {/* Events — right column with vertical rail */}
      <div className="relative pl-5">
        {/* Vertical rail */}
        <div
          className="absolute left-0 top-[10px] bottom-0 w-px bg-line"
          style={{ bottom: isLast ? "auto" : 0, height: isLast ? "calc(100% - 16px)" : undefined }}
        />

        {group.events.map((event, i) => (
          <EventEntry key={i} event={event} delay={i * 0.06} />
        ))}
      </div>
    </div>
  );
}

export default function Timeline() {
  return (
    <section id="arc" className="py-20 md:py-28 bg-surface overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 md:px-12">

        {/* Header */}
        <FadeIn>
          <div className="mb-4 flex items-center gap-3">
            <span className="w-6 h-px bg-line-dark" />
            <span className="font-mono text-[0.6rem] tracking-widest uppercase text-ink-faint">
              The Arc
            </span>
          </div>
          <h2
            className="font-display font-semibold leading-tight text-ink mb-3"
            style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
          >
            Three years.{" "}
            <span className="highlight-yellow">In order.</span>
          </h2>
          <p className="font-sketch text-lg text-ink-muted max-w-xl mb-16">
            Every project, every city, every role — from the first lemonade stand to the last boardroom. This is what three years of working for real looks like.
          </p>
        </FadeIn>

        {/* Year groups */}
        <div>
          {TIMELINE.map((group, i) => (
            <YearBlock
              key={group.year}
              group={group}
              isLast={i === TIMELINE.length - 1}
            />
          ))}
        </div>

        {/* Closing line */}
        <FadeIn delay={0.1}>
          <div className="mt-12 ml-0 md:ml-[116px] pl-5 flex items-center gap-4">
            <div className="w-2.5 h-2.5 bg-yellow border border-ink flex-shrink-0" />
            <span className="font-sketch text-base text-ink-muted">
              Jun 2026 — graduation day ●
            </span>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
