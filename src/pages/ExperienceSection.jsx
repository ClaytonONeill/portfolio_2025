// Modules
import React from "react";

// Data
import { workExperienceData, educationData } from "../data/experienceData";

function ExperienceSection({ darkMode, isVisible, sectionRef }) {
  return (
    <section
      id="experience"
      ref={sectionRef}
      className={`min-h-screen py-20 px-6 transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-serif italic mb-8">Experience</h2>

        {/* Work Experience and Education */}
        {/* Work Experience */}
        <div
          className={`border rounded-lg p-6 ${
            darkMode ? "border-gray-700" : "border-gray-300"
          }`}
        >
          <h3
            className={`text-xl font-semibold mb-4 border-b pb-2 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Work Experience
          </h3>
          {workExperienceData.map((job, idx) => (
            <div key={idx} className="mb-4">
              <h4
                className={`font-semibold mb-2 ${
                  darkMode ? "text-white" : "text-gray-800"
                }`}
              >
                {job.company}
              </h4>
              <ul
                className={`list-disc list-inside space-y-1 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {job.details.map((detail, detailIdx) => (
                  <li key={detailIdx} className="text-sm">
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Education */}
        <div
          className={`border rounded-lg p-6 mt-4 ${
            darkMode ? "border-gray-700" : "border-gray-300"
          }`}
        >
          <h3
            className={`text-xl font-semibold mb-4 border-b pb-2 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Education
          </h3>
          {educationData.map((edu, idx) => (
            <div key={idx} className="mb-6">
              <div className="flex items-center gap-4 mb-2">
                <div
                  className="w-16 h-16 rounded flex-shrink-0"
                  style={{ backgroundColor: edu.color }}
                />
                <div>
                  <p
                    className={`${
                      darkMode ? "text-white" : "text-gray-800"
                    } font-medium text-lg`}
                  >
                    {edu.school}
                  </p>
                  {edu.degree && (
                    <p
                      className={`${
                        darkMode ? "text-gray-300" : "text-gray-500"
                      } text-sm`}
                    >
                      {edu.degree}
                      {edu.majors && ` – ${edu.majors.join(", ")}`}
                    </p>
                  )}
                  {edu.location && (
                    <p
                      className={`${
                        darkMode ? "text-gray-400" : "text-gray-400"
                      } text-sm`}
                    >
                      {edu.location}
                    </p>
                  )}
                  {edu.graduation && (
                    <p
                      className={`${
                        darkMode ? "text-gray-400" : "text-gray-400"
                      } text-sm`}
                    >
                      Graduation: {edu.graduation}
                    </p>
                  )}
                  {edu.duration && (
                    <p
                      className={`${
                        darkMode ? "text-gray-400" : "text-gray-400"
                      } text-sm`}
                    >
                      {edu.duration}
                    </p>
                  )}
                </div>
              </div>

              {/* Focus / Description */}
              {edu.focus && (
                <ul
                  className={`list-disc list-inside space-y-1 ml-4 ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {edu.focus.map((item, i) => (
                    <li key={i} className="text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {edu.description && (
                <ul
                  className={`list-disc list-inside space-y-1 ml-4 ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {edu.description.map((item, i) => (
                    <li key={i} className="text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
