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
          {/* Work Experience */}
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
                <ul className="list-disc list-inside space-y-1 text-gray-700">
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
            className={`border rounded-lg p-6 ${
              darkMode ? "border-gray-700" : "border-gray-300"
            }`}
          >
            <h3 className="text-xl font-semibold mb-4 border-b pb-2">
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
                    <p className="font-medium text-lg">{edu.school}</p>
                    {edu.degree && (
                      <p className="text-sm text-gray-500">
                        {edu.degree}
                        {edu.majors && ` – ${edu.majors.join(", ")}`}
                      </p>
                    )}
                    {edu.location && (
                      <p className="text-sm text-gray-400">{edu.location}</p>
                    )}
                    {edu.graduation && (
                      <p className="text-sm text-gray-400">
                        Graduation: {edu.graduation}
                      </p>
                    )}
                    {edu.duration && (
                      <p className="text-sm text-gray-400">{edu.duration}</p>
                    )}
                  </div>
                </div>

                {/* Focus / Description */}
                {edu.focus && (
                  <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700">
                    {edu.focus.map((item, i) => (
                      <li key={i} className="text-sm">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {edu.description && (
                  <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700">
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
      </div>
    </section>
  );
}

export default ExperienceSection;
