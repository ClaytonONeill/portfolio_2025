import React, { useState, useEffect, useRef } from "react";
import { Sun, Moon } from "lucide-react";

// Sample project data - this would come from your JSON file
const projectsData = [
  {
    id: 1,
    title: "Project Title",
    description: "Project Description",
    image: null,
    technologies: ["React", "Node", "MongoDB", "Python"],
    isPublic: true,
  },
  {
    id: 2,
    title: "Project Title",
    description: "Project Description",
    image: null,
    technologies: ["JavaScript", "CSS", "HTML"],
    isPublic: false,
  },
  {
    id: 3,
    title: "Project Title",
    description: "Project Description",
    image: null,
    technologies: ["React", "Python", "PostgreSQL", "Docker"],
    isPublic: true,
  },
];

// Sample work experience data
const workExperienceData = [
  {
    company: "Company 1",
    details: ["- info", "- more info", "- more info"],
  },
  {
    company: "Company 2",
    details: ["- info", "- more info", "- more info"],
  },
];

// Sample education data
const educationData = [
  { school: "UMUC", color: "#FDB927" },
  { school: "General Assembly", color: "#FF6B6B" },
];

const techColors = {
  React: "#61DAFB",
  Node: "#E389B9",
  MongoDB: "#7DD3C0",
  Python: "#F7DC6F",
  JavaScript: "#F0B27A",
  CSS: "#BB8FCE",
  HTML: "#7DD3C0",
  PostgreSQL: "#52C7B8",
  Docker: "#85C1E9",
};

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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

      {/* Intro Section */}
      <section
        id="intro"
        className="min-h-screen flex items-center justify-center px-6 pt-20"
      >
        <div className="max-w-4xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex gap-8 items-center">
            {/* Placeholder for sprites */}
            <div className="w-16 h-16 border-2 border-dashed border-gray-400 rounded flex items-center justify-center text-xs text-gray-400">
              Sprite 1
            </div>
            <div className="w-16 h-16 border-2 border-dashed border-gray-400 rounded flex items-center justify-center text-xs text-gray-400">
              Sprite 2
            </div>
            <div className="w-16 h-16 border-2 border-dashed border-gray-400 rounded flex items-center justify-center text-xs text-gray-400">
              Sprite 3
            </div>
            <p className="text-sm italic hidden md:block">
              (ideally these would be animated sprites)
            </p>
          </div>
          <div>
            <h1
              className="text-6xl font-handwriting mb-6"
              style={{ fontFamily: "cursive" }}
            >
              Hello!
            </h1>
            <p className="text-lg mb-4">
              My name is Clay and I am a full-stack web developer with 5 years
              of experience!
            </p>
            <p className="text-sm italic">
              {
                "<This would be a changing typewriter-style text block that would display some other facts about me, my family, and all of our pets.>"
              }
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        ref={(el) => (sectionsRef.current[0] = el)}
        className={`min-h-screen py-20 px-6 transition-opacity duration-1000 ${
          visibleSections.has("projects") ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="max-w-4xl mx-auto space-y-6">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className={`border rounded-lg p-6 flex flex-col md:flex-row gap-6 ${
                darkMode ? "border-gray-700" : "border-gray-300"
              }`}
            >
              <div
                className={`md:w-1/3 flex items-center justify-center border rounded ${
                  darkMode
                    ? "border-gray-700 bg-gray-800"
                    : "border-gray-300 bg-gray-50"
                }`}
              >
                <div className="text-center p-8">
                  <div className="text-4xl mb-2">📷</div>
                  <p className="text-sm text-gray-500">{"<project image>"}</p>
                </div>
              </div>
              <div className="md:w-2/3 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm mb-4">{project.description}</p>
                  <p className="text-sm mb-2">Technologies Used</p>
                  <div className="flex gap-2 flex-wrap items-center">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="w-8 h-8 rounded"
                        style={{ backgroundColor: techColors[tech] || "#ccc" }}
                        title={tech}
                      />
                    ))}
                    {project.isPublic && (
                      <button className="ml-auto px-4 py-1 bg-cyan-400 text-gray-900 rounded hover:bg-cyan-500 transition-colors">
                        Visit
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        ref={(el) => (sectionsRef.current[1] = el)}
        className={`min-h-screen py-20 px-6 transition-opacity duration-1000 ${
          visibleSections.has("experience") ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif italic mb-8">Experience</h2>

          {/* Pong Game */}
          <div
            className={`border rounded-lg p-8 mb-8 ${
              darkMode
                ? "border-gray-700 bg-gray-800"
                : "border-gray-300 bg-gray-100"
            }`}
          >
            <div className="flex justify-center items-center mb-4">
              <div
                className={`w-full max-w-2xl h-48 border-2 rounded-lg flex items-center justify-center ${
                  darkMode
                    ? "border-gray-600 bg-gray-900"
                    : "border-gray-400 bg-white"
                }`}
              >
                <div className="text-center">
                  <div className="text-6xl mb-2">0 : 0</div>
                  <div className="flex justify-center gap-4 text-gray-400">
                    <div className="w-2 h-16 bg-gray-400 rounded"></div>
                    <div className="w-1 h-full border-l-2 border-dashed border-gray-400"></div>
                    <div className="w-2 h-16 bg-gray-400 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <p className="text-sm mb-2">Take a pong break!</p>
              <button className="px-6 py-2 bg-green-400 text-gray-900 rounded hover:bg-green-500 transition-colors">
                Start
              </button>
            </div>
          </div>

          {/* Work Experience and Education */}
          <div className="grid md:grid-cols-2 gap-6">
            <div
              className={`border rounded-lg p-6 ${
                darkMode ? "border-gray-700" : "border-gray-300"
              }`}
            >
              <h3 className="text-xl font-semibold mb-4 border-b pb-2">
                Work Experience
              </h3>
              {workExperienceData.map((job, idx) => (
                <div key={idx} className="mb-4">
                  <h4 className="font-semibold mb-2">{job.company}</h4>
                  {job.details.map((detail, detailIdx) => (
                    <p key={detailIdx} className="text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            <div
              className={`border rounded-lg p-6 ${
                darkMode ? "border-gray-700" : "border-gray-300"
              }`}
            >
              <h3 className="text-xl font-semibold mb-4 border-b pb-2">
                Education
              </h3>
              {educationData.map((edu, idx) => (
                <div key={idx} className="flex items-center gap-4 mb-4">
                  <div
                    className="w-16 h-16 rounded"
                    style={{ backgroundColor: edu.color }}
                  />
                  <p className="font-medium">{edu.school}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        ref={(el) => (sectionsRef.current[2] = el)}
        className={`min-h-screen py-20 px-6 transition-opacity duration-1000 ${
          visibleSections.has("contact") ? "opacity-100" : "opacity-0"
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
    </div>
  );
}

export default App;
