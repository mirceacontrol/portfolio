import { useState } from "react";
import { Crown } from "lucide-react";

const codingLanguages = [
  { name: "Java", level: 90, favorite: true },
  { name: "C#", level: 80 },
  { name: "C/C++", level: 75 },
  { name: "Python", level: 70 },
  { name: "Shell", level: 65 },
  { name: "SQL", level: 80 },
  { name: "HTML / CSS", level: 85 },
  { name: "Assembly x86", level: 60 },
];

const technologies = [
  "Docker", "GitHub (VCS)", "QT Designer", "JavaFX", "Photo/Video Editing"
];

const ides = [
  "Visual Studio Code", "IntelliJ", "Pycharm", "CLion", "Visual Studio", "Nano"
];

export default function SkillsSection() {
  const [slide, setSlide] = useState(0);

  return (
    <section id="skills" className="mb-20">
      <h2 className="text-3xl font-bold mb-6 border-b border-gray-700 pb-2">Skills</h2>
      {/* Slide Navigation */}
      <div className="flex gap-4 mb-8">
        <button
          className={`px-4 py-2 rounded-lg transition font-semibold ${
            slide === 0
              ? "bg-purple-700 text-white shadow"
              : "bg-gray-800 text-gray-300 hover:bg-purple-700 hover:text-white"
          }`}
          onClick={() => setSlide(0)}
        >
          Coding Languages
        </button>
        <button
          className={`px-4 py-2 rounded-lg transition font-semibold ${
            slide === 1
              ? "bg-purple-700 text-white shadow"
              : "bg-gray-800 text-gray-300 hover:bg-purple-700 hover:text-white"
          }`}
          onClick={() => setSlide(1)}
        >
          Technologies
        </button>
        <button
          className={`px-4 py-2 rounded-lg transition font-semibold ${
            slide === 2
              ? "bg-purple-700 text-white shadow"
              : "bg-gray-800 text-gray-300 hover:bg-purple-700 hover:text-white"
          }`}
          onClick={() => setSlide(2)}
        >
          IDEs
        </button>
      </div>

      {/* Slide Content */}
      <div className="transition-all duration-300">
        {slide === 0 && (
          <div className="space-y-6">
            {codingLanguages.map((lang) => (
              <div key={lang.name} className="flex items-center gap-4">
                <span className="w-32 font-semibold flex items-center">
                  {lang.name}
                  {lang.favorite && (
                    <Crown className="w-5 h-5 text-yellow-400 ml-2" title="Favorite" />
                  )}
                </span>
                <div className="flex-1 bg-gray-800 rounded-lg h-5 relative">
                  <div
                    className="bg-purple-500 h-5 rounded-lg transition-all"
                    style={{ width: `${lang.level}%` }}
                  ></div>
                  <span className="absolute right-2 top-0 text-xs h-5 flex items-center text-gray-200">
                    {lang.level}%
                  </span>
                </div>
              </div>
            ))}
            <div className="flex items-center mt-4 text-gray-400 gap-2 text-sm">
              <Crown className="w-4 h-4 text-yellow-400" /> = Favorite language
            </div>
          </div>
        )}
        {slide === 1 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {technologies.map((tech) => (
              <div key={tech} className="bg-gray-800 rounded-lg p-4 font-semibold text-center">
                {tech}
              </div>
            ))}
          </div>
        )}
        {slide === 2 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {ides.map((ide) => (
              <div key={ide} className="bg-gray-800 rounded-lg p-4 font-semibold text-center">
                {ide}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
