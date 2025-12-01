import React from "react";

// Icons
import { Sun, Moon } from "lucide-react";

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
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
          <a href="#experience" className="hover:opacity-70 transition-opacity">
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
  );
};

export default Header;
