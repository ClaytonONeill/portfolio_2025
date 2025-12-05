import React from "react";
import { Typewriter } from "react-simple-typewriter";

function IntroSection({ darkMode, isVisible, sectionRef }) {
  const calculateExperience = () => {
    const currentDate = new Date().getFullYear();
    const startingDate = new Date(2020, 2, 14).getFullYear();
    return currentDate - startingDate;
  };

  return (
    <section
      id="intro"
      ref={sectionRef}
      className="min-h-screen md:h-[67vh] relative px-6"
      style={{
        backgroundImage: `url("/images/background.gif")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute top-[46%] left-1/2 -translate-x-1/2 max-w-md md:max-w-lg text-black z-10 text-center">
        <h1 className="text-5xl md:text-6xl font-handwriting mb-2 drop-shadow-md">
          Hello!
        </h1>

        <p className="text-base md:text-lg mb-3 drop-shadow-sm">
          My name is Clay and I am a full-stack web developer with{" "}
          <span className="text-green-500 font-bold">
            {calculateExperience()}
          </span>{" "}
          years of experience!
        </p>

        {/* Typewriter Block */}
        <div className="text-base md:text-xl font-semibold drop-shadow-sm">
          <Typewriter
            words={[
              "I love building clean, responsive, and accessible web apps.",
              "I have two pit bulls named Lemon and Arnold.",
              "I also have two rats named Pencil and Francois.",
              "I enjoy working with React, Node, and mapping technologies.",
              "I'm always learning something new in tech.",
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
    </section>
  );
}

export default IntroSection;
