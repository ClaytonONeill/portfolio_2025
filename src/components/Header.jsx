// Modules
import React, { useState } from "react";

// Icons
import { Sun, Moon, Menu, X, Linkedin, Github } from "lucide-react";

const Header = ({ darkMode, toggleDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const underline = `absolute left-0 -bottom-1 h-[2px] w-full scale-x-0 origin-left 
                     transition-transform duration-300 group-hover:scale-x-100`;

  return (
    <header
      className={`fixed top-0 w-full z-50 border-b transition-colors shadow-lg shadow-black/15 ${
        darkMode ? "bg-gray-900 border-gray-700" : "bg-white border-gray-300"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 text-base">
          <a href="#intro" className="relative group cursor-pointer">
            Intro
            <span
              className={`${underline} ${
                darkMode ? "bg-yellow-400" : "bg-gray-900"
              }`}
            />
          </a>
          <a href="#projects" className="relative group cursor-pointer">
            Projects
            <span
              className={`${underline} ${
                darkMode ? "bg-yellow-400" : "bg-gray-900"
              }`}
            />
          </a>
          <a href="#experience" className="relative group cursor-pointer">
            Experience
            <span
              className={`${underline} ${
                darkMode ? "bg-yellow-400" : "bg-gray-900"
              }`}
            />
          </a>
          <a href="#contact" className="relative group cursor-pointer">
            Contact
            <span
              className={`${underline} ${
                darkMode ? "bg-yellow-400" : "bg-gray-900"
              }`}
            />
          </a>
        </div>
        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
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

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/clayton-d-oneill"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/ClaytonONeill"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 ml-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
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
