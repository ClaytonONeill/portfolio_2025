import React from "react";

const Footer = ({ darkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className={`border-t ${
        darkMode ? "border-gray-700 bg-gray-900" : "border-gray-300 bg-gray-50"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left side text */}
        <p
          className={`text-sm opacity-80 ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          © 2025 • <span className="font-medium">Clayton O'Neill</span>
        </p>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className={`px-5 py-2 text-sm rounded transition-all shadow-sm 
            hover:shadow-md hover:-translate-y-0.5
            ${
              darkMode
                ? "bg-purple-600 text-white hover:bg-purple-500"
                : "bg-purple-300 text-gray-900 hover:bg-purple-400"
            }
          `}
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  );
};

export default Footer;
