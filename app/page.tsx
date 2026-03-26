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

      {/* ── MARQUEE — between hero and work ── */}
      <div className="border-y border-line bg-surface py-4 overflow-hidden">
        <Marquee
          items={[
            "₹6L in sales",
            "228 cold outreaches",
            "73 farmer interviews",
            "5 cities, on the ground",
            "Presented to MDs",
            "Built from zero",
            "20+ qualified meetings",
            "Figure it out",
            "Ship it",
            "500+ hours logged",
          ]}
          speed="slow"
        />
      </div>

      {/* ── WORK ─────────────────── */}
      <Work />

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
