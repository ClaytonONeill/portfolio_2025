// Modules
import React, { useState, useEffect, useRef } from "react";

// Pages
import IntroSection from "./pages/IntroSection";
import ProjectsSection from "./pages/ProjectsSection";
import ExperienceSection from "./pages/ExperienceSection";
import ContactSection from "./pages/ContactSection";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  // State
  const [darkMode, setDarkMode] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());

  // Refs
  const observerRef = useRef(null);
  const checkedSectionsRef = useRef(new Set());

  // Effects
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const handleSectionRef = (el) => {
    if (el && observerRef.current) {
      observerRef.current.observe(el);

      // Only check once per section
      if (!checkedSectionsRef.current.has(el.id)) {
        checkedSectionsRef.current.add(el.id);

        // Check if element is already visible on mount
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

        if (isVisible) {
          setVisibleSections((prev) => new Set([...prev, el.id]));
        }
      }
    }
  };

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <IntroSection
        darkMode={darkMode}
        isVisible={visibleSections.has("intro")}
        sectionRef={handleSectionRef}
      />

      <ProjectsSection
        darkMode={darkMode}
        isVisible={visibleSections.has("projects")}
        sectionRef={handleSectionRef}
      />

      <ExperienceSection
        darkMode={darkMode}
        isVisible={visibleSections.has("experience")}
        sectionRef={handleSectionRef}
      />

      <ContactSection
        darkMode={darkMode}
        isVisible={visibleSections.has("contact")}
        sectionRef={handleSectionRef}
      />

      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
