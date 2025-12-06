import React, { useState } from "react";
import emailjs from "@emailjs/browser";

function ContactSection({ darkMode, isVisible, sectionRef }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleInputChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSendMessage = async () => {
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      return setStatus({ type: "error", msg: "All fields are required" });
    }
    if (!validateEmail(email)) {
      return setStatus({ type: "error", msg: "Invalid email address" });
    }

    try {
      await emailjs.send(
        "service_8e8zwac",
        "template_hmd9u1b",
        { from_name: name, from_email: email, message },
        "6eDS7u9pyg4wLuSkO"
      );

      setStatus({ type: "success", msg: "Message sent successfully!" });
      setFormData({ ...formData, message: "" });
    } catch (err) {
      console.error(err);
      setStatus({
        type: "error",
        msg: "Failed to send message. Try again later.",
      });
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className={`py-20 px-6 transition-opacity duration-1000 relative ${
        isVisible ? "opacity-100" : "opacity-0"
      } ${
        darkMode
          ? "bg-gray-900"
          : "bg-gradient-to-tr from-cyan-50 via-teal-50 to-blue-50"
      }`}
    >
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl font-serif italic mb-8">Contact</h2>
        <div
          className={`border rounded-lg p-8 backdrop-blur-sm transition-all duration-300 ${
            darkMode
              ? "border-gray-700 bg-gray-800/50 shadow-xl"
              : "border-gray-200 bg-white/70 shadow-lg"
          }`}
        >
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Contact Form */}
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
                  className="px-8 py-3 bg-cyan-400 text-gray-900 rounded-lg hover:bg-cyan-500 transition-all hover:shadow-lg font-semibold"
                >
                  Send Message
                </button>
                {status && (
                  <p
                    className={`mt-2 ${
                      status.type === "success"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {status.msg}
                  </p>
                )}
              </div>
            </div>

            {/* Resume Download */}
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
              <a
                href="/resume/Clayton_ONeill_Resume.pdf"
                download="Clayton_ONeill_Resume.pdf"
              >
                <button className="px-8 py-3 bg-cyan-400 text-gray-900 rounded-lg hover:bg-cyan-500 transition-all hover:shadow-lg font-semibold cursor-pointer">
                  Download Resume
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
