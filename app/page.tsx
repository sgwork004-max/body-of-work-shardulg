import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import JourneyGallery from "@/components/JourneyGallery";
import BentoSections from "@/components/BentoSections";
import DarkModeToggle from "@/components/DarkModeToggle";

export default function Home() {
  return (
    <main className="bg-paper">
      <Navigation />
      <Hero />
      <Ticker />
      <JourneyGallery />
      <BentoSections />
      <DarkModeToggle />
    </main>
  );
}
