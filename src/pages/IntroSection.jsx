import React from "react";

function IntroSection() {
  return (
    <section
      id="intro"
      className="min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <div className="max-w-4xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex gap-8 items-center">
          {/* Placeholder for sprites */}
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
        <div>
          <h1 className="text-6xl font-handwriting mb-6">Hello!</h1>
          <p className="text-lg mb-4">
            My name is Clay and I am a full-stack web developer with 5 years of
            experience!
          </p>
          <p className="text-sm italic">
            {
              "<This would be a changing typewriter-style text block that would display some other facts about me, my family, and all of our pets.>"
            }
          </p>
        </div>
      </div>
    </section>
  );
}

export default IntroSection;
