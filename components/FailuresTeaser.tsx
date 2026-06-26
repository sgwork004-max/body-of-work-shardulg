import { FAILURES } from "@/lib/data";
import FadeIn from "./FadeIn";

export default function FailuresTeaser() {
  const shown = FAILURES.slice(0, 3);

  return (
    <section id="failures" className="py-24 md:py-36 bg-surface border-t border-line">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <FadeIn>
          <div className="flex items-end justify-between mb-6">
            <div>
              <span className="font-mono text-[0.52rem] tracking-widest uppercase text-ink-faint block mb-4">
                A Curated Collection
              </span>
              <h2
                className="font-display font-semibold text-ink"
                style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)", lineHeight: 0.9, letterSpacing: "-0.02em" }}
              >
                Museum of{" "}
                <span className="highlight-yellow">Failures</span>
              </h2>
            </div>
            <a
              href="/failures"
              className="hidden md:inline-flex items-center gap-1.5 text-sm text-ink-faint hover:text-ink transition-colors duration-200 group"
            >
              Full collection
              <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.06}>
          <p className="text-ink-muted text-sm leading-relaxed max-w-xl mb-14 mt-6 border-l-2 border-yellow pl-4">
            Not a confessional. Every exhibit is a failure worth studying — not because it was
            dramatic, but because something real was learned that couldn&apos;t have been learned
            any other way.
          </p>
        </FadeIn>

        <div className="space-y-3">
          {shown.map((item, i) => (
            <FadeIn key={item.id} delay={i * 0.08}>
              <a
                href="/failures"
                className="group flex items-start gap-6 md:gap-10 border border-line p-6 md:p-8 hover:border-line-dark hover:bg-paper transition-all duration-200 bg-paper"
              >
                <span
                  className="font-display font-semibold text-line leading-none flex-shrink-0 select-none"
                  style={{ fontSize: "clamp(2.5rem, 5vw, 3.8rem)", lineHeight: 1 }}
                >
                  {item.number}
                </span>
                <div className="flex-1 min-w-0 pt-1">
                  <div className="font-mono text-[0.5rem] tracking-widest uppercase text-ink-faint mb-2">
                    {item.domain} · {item.date}
                  </div>
                  <h3 className="font-display font-medium text-ink text-lg md:text-xl leading-snug mb-2.5 group-hover:text-yellow transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-ink-faint text-sm leading-relaxed max-w-lg">
                    {item.the_damage}
                  </p>
                </div>
                <span className="text-ink-faint group-hover:text-ink group-hover:translate-x-1 transition-all duration-200 mt-2 flex-shrink-0">→</span>
              </a>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.32}>
          <div className="mt-8">
            <a
              href="/failures"
              className="inline-flex items-center gap-2 px-8 py-4 border border-line text-sm text-ink hover:bg-yellow hover:border-yellow transition-colors duration-200 group"
            >
              Enter the museum — {FAILURES.length} exhibits
              <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
