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
        backgroundImage: `url(${
          darkMode
            ? "/images/background-dark-mode.gif"
            : "/images/background.gif"
        })`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className={`absolute top-[20%] left-1/2 -translate-x-1/2 max-w-md md:max-w-lg z-10 text-center 
          ${darkMode ? "text-white" : "text-black"}`}
      >
        <h1 className="text-6xl md:text-7xl font-handwriting mb-4 drop-shadow-lg">
          Hello!
        </h1>

        <p className="text-lg md:text-2xl mb-5 font-medium drop-shadow-lg leading-relaxed">
          My name is Clay and I am a full-stack web developer with{" "}
          <span className="text-violet-500 font-extrabold ">
            {calculateExperience()}
          </span>{" "}
          years of experience!
        </p>

        {/* Typewriter Block */}
        <div className="text-lg md:text-2xl font-semibold drop-shadow-lg leading-relaxed">
          <Typewriter
            words={[
              "I love building clean, responsive, and accessible web apps.",
              "I enjoy working with JavaScript libraries and frameworks.",
              "I work to create secure and scalable backend solutions.",
              "I have a passion for tackling challenging problems.",
              "I have two pit bulls named Lemon and Arnold.",
              "I also have two rats named Pencil and Francois.",
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
