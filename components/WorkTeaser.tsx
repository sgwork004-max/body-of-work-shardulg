import { WORK } from "@/lib/data";
import FadeIn from "./FadeIn";

export default function WorkTeaser() {
  return (
    <section id="work" className="py-24 md:py-36 bg-ink">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <FadeIn>
          <div className="flex items-end justify-between mb-14">
            <div>
              <span className="font-mono text-[0.52rem] tracking-widest uppercase text-paper/30 block mb-4">
                Apprenticeships
              </span>
              <h2
                className="font-display font-semibold text-paper"
                style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)", lineHeight: 0.9, letterSpacing: "-0.02em" }}
              >
                Work
              </h2>
            </div>
            <a
              href="/work"
              className="hidden md:inline-flex items-center gap-1.5 text-sm text-paper/30 hover:text-paper transition-colors duration-200 group"
            >
              Full detail
              <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
            </a>
          </div>
        </FadeIn>

        <div className="border-t border-white/10">
          {WORK.map((item, i) => (
            <FadeIn key={item.id} delay={i * 0.07}>
              <a
                href="/work"
                className="group flex items-start justify-between gap-8 py-9 border-b border-white/10 hover:border-white/20 transition-colors duration-200"
              >
                <div className="flex items-start gap-5 flex-1 min-w-0">
                  <span className="font-mono text-[0.48rem] tracking-widest uppercase text-paper/20 mt-2 flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <div className="font-display font-medium text-paper text-xl md:text-2xl leading-tight mb-1.5">
                      {item.company}
                    </div>
                    <div className="font-mono text-[0.5rem] tracking-widest uppercase text-paper/30 mb-2.5">
                      {item.role} · {item.duration}
                    </div>
                    <p className="text-paper/45 text-sm leading-relaxed max-w-sm">
                      {item.tagline}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 flex-shrink-0 mt-1.5">
                  {item.highlight?.split("·")[0]?.trim() && (
                    <span className="hidden md:inline-block font-mono text-[0.5rem] tracking-widest uppercase px-3 py-1.5 bg-yellow text-ink font-semibold">
                      {item.highlight?.split("·")[0]?.trim()}
                    </span>
                  )}
                  <span className="text-paper/20 group-hover:text-paper group-hover:translate-x-1 transition-all duration-200 mt-0.5">
                    →
                  </span>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.34}>
          <div className="mt-12">
            <a
              href="/work"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-sm text-paper hover:bg-yellow hover:border-yellow hover:text-ink transition-colors duration-200 group"
            >
              Full context, approach, and outcomes
              <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
