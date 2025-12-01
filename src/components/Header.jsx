// Modules
import React, { useState } from "react";

// Icons
import { Sun, Moon, Menu, X } from "lucide-react";

const Header = ({ darkMode, toggleDarkMode }) => {
  // State
  const [menuOpen, setMenuOpen] = useState(false);

  // Reusable classes for link underline
  const underline = `absolute left-0 -bottom-1 h-[2px] w-full scale-x-0 origin-left 
                     transition-transform duration-300 group-hover:scale-x-100`;

  return (
    <header
      className={`fixed top-0 w-full z-50 border-b transition-colors ${
        darkMode ? "bg-gray-900 border-gray-700" : "bg-white border-gray-300"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 text-sm">
          <a href="#intro" className="relative group">
            Intro
            <span
              className={`${underline} ${
                darkMode ? "bg-yellow-400" : "bg-gray-900"
              }`}
            />
          </a>

          <a href="#projects" className="relative group">
            Projects
            <span
              className={`${underline} ${
                darkMode ? "bg-yellow-400" : "bg-gray-900"
              }`}
            />
          </a>

          <a href="#experience" className="relative group">
            Experience
            <span
              className={`${underline} ${
                darkMode ? "bg-yellow-400" : "bg-gray-900"
              }`}
            />
          </a>

          <a href="#contact" className="relative group">
            Contact
            <span
              className={`${underline} ${
                darkMode ? "bg-yellow-400" : "bg-gray-900"
              }`}
            />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className={`p-2 rounded-full transition-colors ml-4 ${
            darkMode
              ? "bg-yellow-400 text-gray-900"
              : "bg-gray-200 text-gray-900"
          }`}
          aria-label="Toggle dark mode"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </nav>

      {/* Mobile Menu Items */}
      {menuOpen && (
        <div
          className={`md:hidden px-6 pb-4 flex flex-col gap-4 text-sm transition-all ${
            darkMode ? "bg-gray-900" : "bg-white"
          }`}
        >
          <a
            href="#intro"
            className="hover:opacity-70 transition-opacity"
            onClick={() => setMenuOpen(false)}
          >
            Intro
          </a>

          <a
            href="#projects"
            className="hover:opacity-70 transition-opacity"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </a>

          <a
            href="#experience"
            className="hover:opacity-70 transition-opacity"
            onClick={() => setMenuOpen(false)}
          >
            Experience
          </a>

          <a
            href="#contact"
            className="hover:opacity-70 transition-opacity"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
