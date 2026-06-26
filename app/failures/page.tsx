import Navigation from "@/components/Navigation";
import Failures from "@/components/Failures";
import DarkModeToggle from "@/components/DarkModeToggle";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

export const metadata = {
  title: "Museum of Failures — Shardul Gupta",
  description: "Five exhibits. Real failures, real costs, and what actually changed.",
};

export default function FailuresPage() {
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
              <span className="font-mono text-[0.55rem] tracking-widest uppercase text-ink-muted">Failures</span>
            </div>
            <span className="label-accent block mb-4">A Curated Collection</span>
            <h1
              className="font-display font-semibold text-ink"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 0.93 }}
            >
              Museum of Failures
            </h1>
            <p className="text-ink-muted mt-5 text-lg max-w-xl leading-relaxed">
              Not a confessional. Every exhibit is a failure worth studying — not because
              it was dramatic, but because something real was learned that couldn&apos;t
              have been learned any other way.
            </p>
          </FadeIn>
        </div>
      </div>

      <Failures />
      <DarkModeToggle />
      <Footer />
    </main>
  );
}
