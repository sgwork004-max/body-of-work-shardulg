import Navigation from "@/components/Navigation";
import DarkModeToggle from "@/components/DarkModeToggle";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import { ESSAYS } from "@/lib/data";

export const metadata = {
  title: "Writing — Shardul Gupta",
  description: "Essays on work, learning, and operating — published in Conflexions and on Medium.",
};

export default function WritingPage() {
  const conflexions = ESSAYS.filter((e) => e.publication === "Conflexions");
  const medium = ESSAYS.filter((e) => e.publication === "Medium");

  return (
    <main className="bg-paper">
      <Navigation />

      <div className="pt-24 pb-12 border-b border-line">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="flex items-center gap-3 mb-5">
              <a href="/" className="font-mono text-[0.55rem] tracking-widest uppercase text-ink-faint hover:text-ink transition-colors">
                Home
              </a>
              <span className="text-line-dark text-xs">→</span>
              <span className="font-mono text-[0.55rem] tracking-widest uppercase text-ink-muted">Writing</span>
            </div>
            <span className="label-accent block mb-4">Essays</span>
            <h1
              className="font-display font-semibold text-ink"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 0.93 }}
            >
              Writing
            </h1>
            <p className="text-ink-muted mt-5 text-lg max-w-xl leading-relaxed">
              {ESSAYS.length} essays on work, learning, and operating.
              Published in Conflexions and on Medium.
            </p>
          </FadeIn>
        </div>
      </div>

      <section className="py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-6 md:px-12">

          {/* Conflexions */}
          <FadeIn>
            <div className="flex items-center gap-3 mb-8">
              <span className="w-4 h-px bg-yellow" />
              <span className="label-accent">Conflexions</span>
            </div>
          </FadeIn>
          <div className="divide-y divide-line border-t border-line mb-16">
            {conflexions.map((e, i) => (
              <FadeIn key={e.title} delay={i * 0.06}>
                <a
                  href={e.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start justify-between gap-4 py-6 hover:bg-surface transition-colors duration-150"
                >
                  <div>
                    <h2 className="font-display font-medium text-ink text-base leading-snug mb-2 group-hover:text-ink transition-colors">
                      {e.title}
                    </h2>
                    <p className="text-sm text-ink-faint leading-relaxed">{e.note}</p>
                  </div>
                  <span className="text-ink-faint group-hover:text-ink transition-colors duration-200 flex-shrink-0 mt-0.5">↗</span>
                </a>
              </FadeIn>
            ))}
          </div>

          {/* Medium */}
          <FadeIn>
            <div className="flex items-center gap-3 mb-8">
              <span className="w-4 h-px bg-yellow" />
              <span className="label-accent">Medium · @EscapingAverage</span>
            </div>
          </FadeIn>
          <div className="divide-y divide-line border-t border-line">
            {medium.map((e, i) => (
              <FadeIn key={e.title} delay={i * 0.06}>
                <a
                  href={e.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start justify-between gap-4 py-6 hover:bg-surface transition-colors duration-150"
                >
                  <div>
                    <h2 className="font-display font-medium text-ink text-base leading-snug mb-2 group-hover:text-ink transition-colors">
                      {e.title}
                    </h2>
                    <p className="text-sm text-ink-faint leading-relaxed">{e.note}</p>
                  </div>
                  <span className="text-ink-faint group-hover:text-ink transition-colors duration-200 flex-shrink-0 mt-0.5">↗</span>
                </a>
              </FadeIn>
            ))}
          </div>

        </div>
      </section>

      <DarkModeToggle />
      <Footer />
    </main>
  );
}
