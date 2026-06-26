import Navigation from "@/components/Navigation";
import HowIThink from "@/components/HowIThink";
import DarkModeToggle from "@/components/DarkModeToggle";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

export const metadata = {
  title: "How I Think — Shardul Gupta",
  description: "Six principles, observed from doing — not made up in a weekend.",
};

export default function ThinkingPage() {
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
              <span className="font-mono text-[0.55rem] tracking-widest uppercase text-ink-muted">Thinking</span>
            </div>
            <span className="label-accent block mb-4">How I operate</span>
            <h1
              className="font-display font-semibold text-ink"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 0.93 }}
            >
              How I Think
            </h1>
            <p className="text-ink-muted mt-5 text-lg max-w-xl leading-relaxed">
              Six principles, observed from doing — not made up in a weekend.
            </p>
          </FadeIn>
        </div>
      </div>

      <HowIThink />
      <DarkModeToggle />
      <Footer />
    </main>
  );
}
