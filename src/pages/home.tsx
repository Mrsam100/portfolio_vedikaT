import LoadingScreen from "@/components/LoadingScreen";
import CustomCursor from "@/components/CustomCursor";
import ParticleBackground from "@/components/ParticleBackground";
import NavigationDots from "@/components/NavigationDots";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  const sections = ["hero", "about", "portfolio", "skills", "contact"];

  return (
    <div className="bg-[hsl(0,0%,4%)] text-white overflow-x-hidden">
      <LoadingScreen />
      <CustomCursor />
      <ParticleBackground />
      
      {/* Scroll Indicator */}
      <div className="scroll-indicator" />
      
      <NavigationDots sections={sections} />
      
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <SkillsSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-8 text-center border-t border-gray-800">
        <p className="text-gray-400">&copy; 2024 Vedika. All rights reserved.</p>
      </footer>
    </div>
  );
}
