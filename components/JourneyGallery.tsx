"use client";

import FadeIn from "./FadeIn";

const JOURNEY = [
  { number: "01", period: "Aug – Sep 2023", company: "Let's Enterprise", role: "Startup Sprint", metric: "Lemonade stalls · brownie stand · 4AM at Market Yard", color: "#C97A45", abbr: "LE" },
  { number: "02", period: "Oct 2023",       company: "Let's Enterprise", role: "Business X-Ray", metric: "Fergusson, Ritviz, family biz — 3 case studies", color: "#5A7D8A", abbr: "LE" },
  { number: "03", period: "Oct – Nov 2023", company: "Let's Enterprise", role: "Product Dev Sprint", metric: "6 prototypes · ₹50 budget · Klug Avalon pitch", color: "#7B6D9E", abbr: "LE" },
  { number: "04", period: "Nov – Dec 2023", company: "Let's Enterprise", role: "Service Design", metric: "12 salons visited · redesigned menu installed", color: "#7A3D52", abbr: "LE" },
  { number: "05", period: "Jan 2024",       company: "History Lit Fest", role: "Ground Outreach Lead", metric: "113 cafes pitched · 9 colleges · 26 in one day", color: "#2B4A8A", abbr: "HLF" },
  { number: "06", period: "Jan – Feb 2024", company: "Let's Enterprise", role: "Digital Marketing", metric: "₹1000 budget · 2 → 15 paid attendees", color: "#3D7A55", abbr: "LE" },
  { number: "07", period: "Mar 2024",       company: "Stahl",            role: "Retail Design Sprint", metric: "Factory → 6 stores → masking tape prototype", color: "#4A5A6A", abbr: "STH" },
  { number: "08", period: "Mar – Apr 2024", company: "Let's Enterprise", role: "Rural Immersions", metric: "Wardha · Khajur Gaon UP · farm overnight", color: "#5A6A3A", abbr: "LE" },
  { number: "09", period: "May – Jul 2024", company: "Hide & Sneak",     role: "Sales & Brand Apprentice", metric: "₹6L in 2.5 months · 50+ deals", color: "#B03D22", abbr: "H&S" },
  { number: "10", period: "Aug – Oct 2024", company: "KOEL / Kirloskar", role: "Research Lead", metric: "73 interviews · 5 cities · presented to MD", color: "#1A3D6E", abbr: "KOEL" },
  { number: "11", period: "Nov 2024 – Now", company: "YelloSKYE",        role: "Founder's Office", metric: "Brand · ops · hiring · SEO · DEX launch", color: "#B8921E", abbr: "YS", current: true },
  { number: "12", period: "Jan – Mar 2025", company: "Therefore Design", role: "BD Apprentice", metric: "200+ reach-outs to VC contacts · 9 weeks", color: "#3D6B4F", abbr: "TD" },
  { number: "13", period: "May 2025 – Now", company: "Rayden Studio",    role: "Business Development", metric: "228 outreaches → 20+ meetings", color: "#C2692A", abbr: "RS", current: true },
  { number: "14", period: "Aug – Oct 2025", company: "Stahl",            role: "5 Weeks, 5 Domains", metric: "Legal · CLV · Brand · Retail · Data", color: "#1E3156", abbr: "STH" },
];

export default function JourneyGallery() {
  return (
    <section id="arc" className="py-14 md:py-20 bg-paper border-t border-line overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 md:px-12 mb-8">
        <FadeIn>
          <div className="flex items-end justify-between">
            <div>
              <span className="font-mono text-[0.52rem] tracking-widest uppercase text-ink-faint block mb-5">
                2023 → Now
              </span>
              <h2
                className="font-display font-semibold text-ink"
                style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)", lineHeight: 0.9, letterSpacing: "-0.02em" }}
              >
                The arc.
              </h2>
            </div>
            <span className="hidden md:flex items-center gap-2 font-mono text-[0.52rem] tracking-widest uppercase text-ink-faint">
              <span>{JOURNEY.length} stops</span>
              <span className="text-ink-faint">· scroll →</span>
            </span>
          </div>
        </FadeIn>
      </div>

      {/* Horizontal scroll strip */}
      <div
        className="flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory pl-6 md:pl-[max(24px,calc((100vw-1024px)/2+48px))] pr-8"
        style={{ scrollbarWidth: "none" }}
      >
        {JOURNEY.map((item) => (
          <div
            key={item.number}
            className="flex-shrink-0 w-52 snap-start border border-line bg-paper hover:border-line-dark transition-colors duration-200 overflow-hidden group"
          >
            {/* Image / color area */}
            <div
              className="relative flex items-center justify-center"
              style={{ height: 168, background: item.color }}
            >
              {/* Exhibit marker */}
              <span
                className="absolute top-2.5 left-3 font-mono text-[0.45rem] tracking-widest uppercase"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                {item.number} / {JOURNEY.length}
              </span>

              {/* Current indicator */}
              {item.current && (
                <span className="absolute top-2.5 right-3 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow" />
                  <span
                    className="font-mono text-[0.4rem] tracking-widest uppercase"
                    style={{ color: "rgba(255,225,65,0.8)" }}
                  >
                    now
                  </span>
                </span>
              )}

              {/* Company abbreviation */}
              <span
                className="font-display font-semibold select-none"
                style={{
                  fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                  color: "rgba(255,255,255,0.18)",
                  letterSpacing: "-0.02em",
                }}
              >
                {item.abbr}
              </span>
            </div>

            {/* Card info */}
            <div className="p-3.5">
              <div className="font-mono text-[0.47rem] tracking-widest uppercase text-ink-faint mb-1.5">
                {item.period}
              </div>
              <div className="font-display font-medium text-ink text-sm leading-snug mb-0.5">
                {item.company}
              </div>
              <div className="text-ink-faint text-xs mb-2.5 leading-snug">
                {item.role}
              </div>
              <div className="border-t border-line pt-2.5">
                <div className="font-mono text-[0.45rem] tracking-wide uppercase text-ink-faint leading-relaxed">
                  {item.metric}
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* End spacer */}
        <div className="flex-shrink-0 w-4" />
      </div>
    </section>
  );
}
