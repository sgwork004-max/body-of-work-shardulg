import { PRINCIPLES } from "@/lib/data";
import FadeIn from "./FadeIn";

export default function ThinkingTeaser() {
  const shown = PRINCIPLES.slice(0, 3);

  return (
    <section id="thinking" className="py-24 md:py-40 bg-surface border-t border-line">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <FadeIn>
          <div className="flex items-end justify-between mb-16">
            <div>
              <span className="font-mono text-[0.52rem] tracking-widest uppercase text-ink-faint block mb-5">
                How I operate
              </span>
              <h2
                className="font-display font-semibold text-ink"
                style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)", lineHeight: 0.9, letterSpacing: "-0.02em" }}
              >
                How I Think
              </h2>
            </div>
            <a
              href="/thinking"
              className="hidden md:inline-flex items-center gap-1.5 text-sm text-ink-faint hover:text-ink transition-colors duration-200 group"
            >
              All {PRINCIPLES.length} principles
              <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
            </a>
          </div>
        </FadeIn>

        <div className="border-t border-line">
          {shown.map((p, i) => (
            <FadeIn key={p.number} delay={i * 0.07}>
              <a
                href="/thinking"
                className="group flex items-start gap-6 py-8 md:py-10 border-b border-line hover:bg-paper transition-colors duration-150"
              >
                <span
                  className="font-display font-semibold text-line-dark flex-shrink-0 leading-none pt-0.5"
                  style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)" }}
                >
                  {p.number}
                </span>
                <div className="flex-1 pt-1">
                  <p className="font-display font-medium text-ink text-lg md:text-xl leading-snug group-hover:text-ink-muted transition-colors">
                    {p.title}
                  </p>
                </div>
                <span className="text-ink-faint group-hover:text-ink group-hover:translate-x-1 transition-all duration-200 mt-1 flex-shrink-0">
                  →
                </span>
              </a>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.25}>
          <div className="mt-14">
            <a
              href="/thinking"
              className="inline-flex items-center gap-2 px-8 py-4 border border-line text-sm text-ink hover:bg-yellow hover:border-yellow transition-colors duration-200 group"
            >
              All {PRINCIPLES.length} principles + diagrams
              <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
