import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import EducationSection from "./sections/EducationSection";
import JourneySection from "./sections/JourneySection";
import ServicesSection from "./sections/ServicesSection";
import ResearchSection from "./sections/ResearchSection";
import PortfolioSection from "./sections/PortfolioSection";
import HonorsSection from "./sections/HonorsSection";
import ContactSection from "./sections/ContactSection";

export default function App() {
  return (
    <main className="overflow-x-clip">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <JourneySection />
      <ServicesSection />
      <ResearchSection />
      <PortfolioSection />
      <HonorsSection />
      <ContactSection />
    </main>
  );
}
