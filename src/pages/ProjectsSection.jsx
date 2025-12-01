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
      {/* Decorative background elements */}
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

      <div className="max-w-4xl mx-auto space-y-6 relative z-10">
        <h2 className="text-4xl font-serif italic mb-8">Projects</h2>
        {projectsData.map((project) => (
          <div
            key={project.id}
            className={`border rounded-lg p-6 flex flex-col md:flex-row gap-6 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${
              darkMode
                ? "border-gray-700 bg-gray-800/50"
                : "border-gray-200 bg-white/70 shadow-md"
            }`}
          >
            <div
              className={`md:w-1/3 flex items-center justify-center border rounded overflow-hidden ${
                darkMode
                  ? "border-gray-700 bg-gray-900/50"
                  : "border-gray-200 bg-gray-50/50"
              }`}
            >
              <div className="text-center p-8">
                <div className="text-4xl mb-2">📷</div>
                <p className="text-sm text-gray-500">{"<project image>"}</p>
              </div>
            </div>
            <div className="md:w-2/3 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm mb-4 opacity-90">{project.description}</p>
                <p className="text-sm mb-2 font-medium">Technologies Used</p>
                <div className="flex gap-2 flex-wrap items-center">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="w-8 h-8 rounded shadow-sm hover:scale-110 transition-transform"
                      style={{ backgroundColor: techColors[tech] || "#ccc" }}
                      title={tech}
                    />
                  ))}
                  {project.isPublic && (
                    <button className="ml-auto px-4 py-1 bg-cyan-400 text-gray-900 rounded hover:bg-cyan-500 transition-all hover:shadow-lg font-medium">
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
  );
}

export default ProjectsSection;
