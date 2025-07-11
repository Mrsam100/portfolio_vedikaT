import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface NavigationDotsProps {
  sections: string[];
}

export default function NavigationDots({ sections }: NavigationDotsProps) {
  const [activeSection, setActiveSection] = useState(sections[0]);

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map((section) => 
        document.getElementById(section)
      );

      let currentSection = sections[0];

      sectionElements.forEach((element, index) => {
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = sections[index];
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-6 right-6 z-50 flex flex-col space-y-4">
      {sections.map((section) => (
        <motion.div
          key={section}
          className={`nav-dot ${activeSection === section ? "active" : ""}`}
          onClick={() => scrollToSection(section)}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          data-interactive="true"
        />
      ))}
    </nav>
  );
}
