import React, { useState, useEffect, useRef } from "react";
import { Sun, Moon } from "lucide-react";
import IntroSection from "./pages/IntroSection";
import ProjectsSection from "./pages/ProjectsSection";
import ExperienceSection from "./pages/ExperienceSection";
import ContactSection from "./pages/ContactSection";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());

  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 border-b transition-colors ${
          darkMode ? "bg-gray-900 border-gray-700" : "bg-white border-gray-300"
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex gap-8 text-sm">
            <a href="#intro" className="hover:opacity-70 transition-opacity">
              Intro
            </a>
            <a href="#projects" className="hover:opacity-70 transition-opacity">
              Projects
            </a>
            <a
              href="#experience"
              className="hover:opacity-70 transition-opacity"
            >
              Experience
            </a>
            <a href="#contact" className="hover:opacity-70 transition-opacity">
              Contact
            </a>
          </div>
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-full transition-colors ${
              darkMode
                ? "bg-yellow-400 text-gray-900"
                : "bg-gray-200 text-gray-900"
            }`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>
      </header>

      <IntroSection darkMode={darkMode} />

      <ProjectsSection
        darkMode={darkMode}
        isVisible={visibleSections.has("projects")}
        sectionRef={(el) => (sectionsRef.current[0] = el)}
      />

      <ExperienceSection
        darkMode={darkMode}
        isVisible={visibleSections.has("experience")}
        sectionRef={(el) => (sectionsRef.current[1] = el)}
      />

      <ContactSection
        darkMode={darkMode}
        isVisible={visibleSections.has("contact")}
        sectionRef={(el) => (sectionsRef.current[2] = el)}
      />
    </div>
  );
}

export default App;
