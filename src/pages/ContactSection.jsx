import React, { useState } from "react";

function ContactSection({ darkMode, isVisible, sectionRef }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendMessage = () => {
    const mailtoLink = `mailto:your.email@example.com?subject=Message from ${encodeURIComponent(
      formData.name
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  const handleDownloadResume = () => {
    // Replace with your actual resume file path
    const link = document.createElement("a");
    link.href = "/path-to-resume.pdf";
    link.download = "Clayton_ONeil_Resume.pdf";
    link.click();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className={`min-h-screen py-20 px-6 transition-opacity duration-1000 relative ${
        isVisible ? "opacity-100" : "opacity-0"
      } ${
        darkMode
          ? "bg-gradient-to-tr from-gray-900 via-cyan-900/20 to-gray-900"
          : "bg-gradient-to-tr from-cyan-50 via-teal-50 to-blue-50"
      }`}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-1/4 right-20 w-80 h-80 rounded-full blur-3xl opacity-20 ${
            darkMode ? "bg-cyan-500" : "bg-teal-300"
          }`}
        ></div>
        <div
          className={`absolute bottom-1/4 left-20 w-64 h-64 rounded-full blur-3xl opacity-20 ${
            darkMode ? "bg-blue-500" : "bg-blue-300"
          }`}
        ></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <h2
          className={`text-4xl font-serif italic mb-8 ${
            darkMode
              ? "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400"
              : "text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600"
          }`}
        >
          Contact
        </h2>

        <div
          className={`border rounded-lg p-8 backdrop-blur-sm transition-all duration-300 ${
            darkMode
              ? "border-gray-700 bg-gray-800/50 shadow-xl"
              : "border-gray-200 bg-white/70 shadow-lg"
          }`}
        >
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-2xl mb-6 font-semibold">Get in touch!</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg transition-all focus:ring-2 focus:ring-cyan-400 focus:outline-none ${
                    darkMode
                      ? "bg-gray-900/50 border-gray-600 placeholder-gray-400"
                      : "bg-white/50 border-gray-300 placeholder-gray-500"
                  }`}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg transition-all focus:ring-2 focus:ring-cyan-400 focus:outline-none ${
                    darkMode
                      ? "bg-gray-900/50 border-gray-600 placeholder-gray-400"
                      : "bg-white/50 border-gray-300 placeholder-gray-500"
                  }`}
                />
                <textarea
                  name="message"
                  placeholder="Your message here..."
                  rows="6"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg transition-all focus:ring-2 focus:ring-cyan-400 focus:outline-none resize-none ${
                    darkMode
                      ? "bg-gray-900/50 border-gray-600 placeholder-gray-400"
                      : "bg-white/50 border-gray-300 placeholder-gray-500"
                  }`}
                />
                <button
                  onClick={handleSendMessage}
                  className="px-8 py-3 bg-cyan-400 text-gray-900 rounded-lg hover:bg-cyan-500 transition-all hover:shadow-lg font-semibold hover:scale-105"
                >
                  Send Message
                </button>
              </div>
            </div>

            <div
              className={`border rounded-lg p-8 flex flex-col items-center justify-center text-center backdrop-blur-sm ${
                darkMode
                  ? "border-gray-600 bg-gray-900/30"
                  : "border-gray-200 bg-white/50"
              }`}
            >
              <div className="text-5xl mb-4">📄</div>
              <p className="text-lg font-medium mb-2">
                Interested in working together?
              </p>
              <p className="mb-6 opacity-80">Download my resume below!</p>
              <button
                onClick={handleDownloadResume}
                className="px-8 py-3 bg-cyan-400 text-gray-900 rounded-lg hover:bg-cyan-500 transition-all hover:shadow-lg font-semibold hover:scale-105"
              >
                Download Resume
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-gray-600">
            <p className="text-sm italic opacity-70">
              Copyright 2025, Clayton O'Neil
            </p>
            <button
              onClick={scrollToTop}
              className="px-4 py-2 bg-purple-300 text-gray-900 rounded-lg hover:bg-purple-400 transition-all text-sm font-medium hover:scale-105"
            >
              Back to top
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
