import Navigation from "@/components/Navigation";
import Work from "@/components/Work";
import Timeline from "@/components/Timeline";
import DarkModeToggle from "@/components/DarkModeToggle";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

export const metadata = {
  title: "Work — Shardul Gupta",
  description: "Four apprenticeships across sales, BD, brand strategy, and founder's office operations.",
};

export default function WorkPage() {
  return (
    <main className="bg-paper">
      <Navigation />

      {/* Page header */}
      <div className="pt-24 pb-12 border-b border-line">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="flex items-center gap-3 mb-5">
              <a href="/" className="font-mono text-[0.55rem] tracking-widest uppercase text-ink-faint hover:text-ink transition-colors">
                Home
              </a>
              <span className="text-line-dark text-xs">→</span>
              <span className="font-mono text-[0.55rem] tracking-widest uppercase text-ink-muted">Work</span>
            </div>
            <span className="label-accent block mb-4">Apprenticeships</span>
            <h1
              className="font-display font-semibold text-ink"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 0.93 }}
            >
              Work
            </h1>
            <p className="text-ink-muted mt-5 text-lg max-w-xl leading-relaxed">
              Four apprenticeships across sales, business development, brand strategy,
              and founder&apos;s office operations. 2023 – present.
            </p>
          </FadeIn>
        </div>
      </div>

      <Work />
      <Timeline />
      <DarkModeToggle />
      <Footer />
    </main>
  );
}
