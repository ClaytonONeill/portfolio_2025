import React from "react";
import { Typewriter } from "react-simple-typewriter";

function IntroSection() {
  // Methods
  const calculateExperience = () => {
    const currentDate = new Date().getFullYear();
    const startingDate = new Date(2020, 2, 14).getFullYear();

    return currentDate - startingDate;
  };

  return (
    <section
      id="intro"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-4xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Sprite Row */}
        <div className="flex gap-8 items-center">
          <div className="w-16 h-16 border-2 border-dashed p-3 border-gray-400 rounded flex items-center justify-center text-xs text-gray-400">
            Sprite 1
          </div>
          <div className="w-16 h-16 border-2 border-dashed p-3 border-gray-400 rounded flex items-center justify-center text-xs text-gray-400">
            Sprite 2
          </div>
          <div className="w-16 h-16 border-2 border-dashed p-3 border-gray-400 rounded flex items-center justify-center text-xs text-gray-400">
            Sprite 3
          </div>
          <p className="text-sm italic hidden md:block">
            (will be updated to animated sprites)
          </p>
        </div>

        {/* Intro Text */}
        <div>
          <h1 className="text-6xl font-handwriting mb-6">Hello!</h1>

          <p className="text-lg mb-4">
            My name is Clay and I am a full-stack web developer with{" "}
            <span className="text-green-500 font-bold">
              {calculateExperience()}
            </span>{" "}
            years of experience!
          </p>

          {/* Typewriter Block */}
          <div className="text-xl font-semibold">
            <Typewriter
              words={[
                "I love building clean, responsive web apps.",
                "I have two pit bulls named Lemon and Arnold.",
                "I also have two rats named Pencil and Francois",
                "I enjoy working with React, Node, and modern CSS.",
                "I’m always learning something new in tech.",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={40}
              delaySpeed={2000}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntroSection;
