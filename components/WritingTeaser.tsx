import { ESSAYS } from "@/lib/data";
import FadeIn from "./FadeIn";

export default function WritingTeaser() {
  const shown = ESSAYS.slice(0, 3);

  return (
    <section id="writing" className="py-24 md:py-40 bg-surface border-t border-line">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <FadeIn>
          <div className="flex items-end justify-between mb-16">
            <div>
              <span className="font-mono text-[0.52rem] tracking-widest uppercase text-ink-faint block mb-5">
                Essays
              </span>
              <h2
                className="font-display font-semibold text-ink"
                style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)", lineHeight: 0.9, letterSpacing: "-0.02em" }}
              >
                Writing
              </h2>
            </div>
            <a
              href="/writing"
              className="hidden md:inline-flex items-center gap-1.5 text-sm text-ink-faint hover:text-ink transition-colors duration-200 group"
            >
              All {ESSAYS.length} essays
              <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
            </a>
          </div>
        </FadeIn>

        <div className="border-t border-line">
          {shown.map((essay, i) => (
            <FadeIn key={essay.title} delay={i * 0.07}>
              <a
                href={essay.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start justify-between gap-6 py-8 md:py-10 border-b border-line hover:bg-paper transition-colors duration-150"
              >
                <div className="flex-1 min-w-0">
                  <div className="font-mono text-[0.5rem] tracking-widest uppercase text-ink-faint mb-2">
                    {essay.publication}
                  </div>
                  <h3 className="font-display font-medium text-ink text-lg md:text-xl leading-snug mb-2 group-hover:text-ink transition-colors">
                    {essay.title}
                  </h3>
                  <p className="text-ink-faint text-sm leading-relaxed max-w-lg">
                    {essay.note}
                  </p>
                </div>
                <span className="text-ink-faint group-hover:text-ink transition-colors duration-200 flex-shrink-0 mt-1">
                  ↗
                </span>
              </a>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.28}>
          <div className="mt-14">
            <a
              href="/writing"
              className="inline-flex items-center gap-2 px-8 py-4 border border-line text-sm text-ink hover:bg-yellow hover:border-yellow transition-colors duration-200 group"
            >
              All {ESSAYS.length} essays →
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
