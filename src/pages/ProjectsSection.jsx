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
      className={`min-h-screen py-20 px-6 transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-3xl font-serif italic mb-8">Projects</h2>
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
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
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
  );
}

export default ProjectsSection;
