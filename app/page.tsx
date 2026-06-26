import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import JourneyGallery from "@/components/JourneyGallery";
import WorkTeaser from "@/components/WorkTeaser";
import ProjectsTeaser from "@/components/ProjectsTeaser";
import ThinkingTeaser from "@/components/ThinkingTeaser";
import FailuresTeaser from "@/components/FailuresTeaser";
import WritingTeaser from "@/components/WritingTeaser";
import Contact from "@/components/Contact";
import DarkModeToggle from "@/components/DarkModeToggle";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-paper">
      <Navigation />
      <Hero />
      <Ticker />
      <JourneyGallery />
      <WorkTeaser />
      <ProjectsTeaser />
      <ThinkingTeaser />
      <FailuresTeaser />
      <WritingTeaser />
      <Contact />
      <DarkModeToggle />
      <Footer />
    </main>
  );
}
