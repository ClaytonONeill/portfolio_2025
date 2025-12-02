import React from "react";

// Config
import { techColors } from "../config/techConfig";

// Data
import { projectsData } from "../data/projectData";

function ProjectsSection({ darkMode, isVisible, sectionRef }) {
  return (
    <section
      id="projects"
      ref={sectionRef}
      className={`min-h-screen py-20 px-6 transition-opacity duration-1000 relative ${
        isVisible ? "opacity-100" : "opacity-0"
      } ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900"
          : "bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"
      }`}
    >
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl opacity-20 ${
            darkMode ? "bg-purple-500" : "bg-blue-300"
          }`}
        ></div>
        <div
          className={`absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl opacity-20 ${
            darkMode ? "bg-cyan-500" : "bg-pink-300"
          }`}
        ></div>
      </div>

      <div className="max-w-5xl mx-auto space-y-12 relative z-10">
        <h2 className="text-4xl font-serif italic mb-8">Projects</h2>

        {projectsData.map((project) => (
          <div
            key={project.id}
            className={`border rounded-xl p-6 flex flex-col md:flex-row gap-8 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${
              darkMode
                ? "border-gray-700 bg-gray-800/60"
                : "border-gray-200 bg-white/80 shadow-md"
            }`}
          >
            {/* IMAGE */}
            <div
              className={`md:w-1/3 flex items-center justify-center border rounded-lg overflow-hidden ${
                darkMode
                  ? "border-gray-700 bg-gray-900/40"
                  : "border-gray-300 bg-gray-50/60"
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full object-contain"
              />
            </div>

            {/* CONTENT */}
            <div className="md:w-2/3 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm mb-6 opacity-90">{project.description}</p>

                <p className="text-sm mb-3 font-medium">Technologies Used</p>

                {/* TECHNOLOGIES */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-2 rounded-md text-sm font-medium shadow 
              hover:scale-110 transition-transform
              ${
                darkMode
                  ? "text-gray-900 shadow-black/20"
                  : "text-white shadow-lg"
              }`}
                      style={{ backgroundColor: techColors[tech] || "#777" }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* BUTTON */}
              {project.isPublic && (
                <div className="mt-4">
                  <a href={project.url}>
                    <button className="px-5 py-2 bg-cyan-400 text-gray-900 rounded-md hover:bg-cyan-500 transition-all hover:shadow-lg font-medium">
                      Visit
                    </button>
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
