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
      className={`min-h-screen py-20 px-6 transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-serif italic mb-8">
          Contact and Resume Download with Footer
        </h2>

        <div
          className={`border rounded-lg p-8 ${
            darkMode ? "border-gray-700" : "border-gray-300"
          }`}
        >
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-2xl mb-6">Get in touch!</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border rounded ${
                    darkMode
                      ? "bg-gray-800 border-gray-600"
                      : "bg-white border-gray-300"
                  }`}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border rounded ${
                    darkMode
                      ? "bg-gray-800 border-gray-600"
                      : "bg-white border-gray-300"
                  }`}
                />
                <textarea
                  name="message"
                  placeholder="Your message here..."
                  rows="6"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border rounded ${
                    darkMode
                      ? "bg-gray-800 border-gray-600"
                      : "bg-white border-gray-300"
                  }`}
                />
                <button
                  onClick={handleSendMessage}
                  className="px-8 py-2 bg-cyan-400 text-gray-900 rounded hover:bg-cyan-500 transition-colors"
                >
                  Send
                </button>
              </div>
            </div>

            <div
              className={`border rounded-lg p-6 flex flex-col items-center justify-center text-center ${
                darkMode ? "border-gray-600" : "border-gray-300"
              }`}
            >
              <p className="mb-2">Interested in working together?</p>
              <p className="mb-4">Download my Resume here!</p>
              <button
                onClick={handleDownloadResume}
                className="px-8 py-2 bg-cyan-400 text-gray-900 rounded hover:bg-cyan-500 transition-colors"
              >
                Download
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t">
            <p className="text-sm italic">Copyright 2025, Clayton O'Neil</p>
            <button
              onClick={scrollToTop}
              className="px-4 py-2 bg-purple-300 text-gray-900 rounded hover:bg-purple-400 transition-colors text-sm"
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
