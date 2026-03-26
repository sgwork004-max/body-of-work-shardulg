import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Projects from "@/components/Projects";
import HowIThink from "@/components/HowIThink";
import Writing from "@/components/Writing";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";

export default function Home() {
  return (
    <main className="bg-paper">
      <Navigation />
      <Hero />

      {/* ── WORK ─────────────────── */}
      <Work />

      {/* ── MARQUEE ──────────────── */}
      <div className="border-y border-line bg-surface py-4 overflow-hidden">
        <Marquee
          items={[
            "Presented to MDs",
            "Built from zero",
            "On the ground",
            "500 hours",
            "73 interviews",
            "20+ qualified meetings",
            "Figure it out",
            "Ship it",
          ]}
          speed="slow"
        />
      </div>

      {/* ── PROJECTS ─────────────── */}
      <Projects />

      {/* ── HOW I THINK ──────────── */}
      <HowIThink />

      {/* ── WRITING ──────────────── */}
      <Writing />

      {/* ── ABOUT ────────────────── */}
      <About />

      {/* ── CONTACT ──────────────── */}
      <Contact />

      {/* ── FOOTER ───────────────── */}
      <Footer />
    </main>
  );
}
