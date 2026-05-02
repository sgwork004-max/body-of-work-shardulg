import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Projects from "@/components/Projects";
import HowIThink from "@/components/HowIThink";
import Writing from "@/components/Writing";
import About from "@/components/About";
import Failures from "@/components/Failures";
import DarkModeToggle from "@/components/DarkModeToggle";
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
            "73 interviews · 5 cities",
            "Presented to MD Gauri Kirloskar",
            "First inbound lead via LinkedIn",
            "3 hires contributed",
            "20+ qualified meetings",
            "MIS automated · daily",
            "1st Runner-Up · FLAME Blaze",
            "McKinsey Forward Program",
            "200+ VC reach-outs",
            "500+ hours of fieldwork",
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

      {/* ── MUSEUM OF FAILURES ───── */}
      <Failures />

      {/* ── DARK MODE TOGGLE ─────── */}
      <DarkModeToggle />

      {/* ── CONTACT ──────────────── */}
      <Contact />

      {/* ── FOOTER ───────────────── */}
      <Footer />
    </main>
  );
}
