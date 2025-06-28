import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import SkillsSection from './SkillsSection';
import ExperienceSection from "./ExperienceSection";
import ProjectsSection from "./ProjectsSection";
import ActivitiesSection from "./ActivitiesSection";
import AboutTimeline from './AboutTimeline';
import profileImg from './profile.png';

function App() {
  const [showTimeline, setShowTimeline] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Shrink header on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 32);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const target = document.getElementById(id);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black relative overflow-hidden text-gray-100">
      {/* Blurred Accents */}
      <div className="absolute top-[-80px] right-[-120px] w-[300px] h-[300px] rounded-full bg-purple-700 opacity-40 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[-80px] left-[-120px] w-[320px] h-[320px] rounded-full bg-blue-700 opacity-30 blur-3xl pointer-events-none"></div>

      {/* Header */}
      <header
        className={`
          fixed top-0 left-0 w-full z-20 flex items-center px-4 sm:px-12
          transition-all duration-300
          bg-gradient-to-b from-gray-950/90 via-black/80 to-transparent backdrop-blur-md
          ${scrolled ? "py-2 shadow-lg" : "py-8"}
        `}
      >
        <span className="text-2xl font-extrabold tracking-tight text-purple-200">MIRCEA'S PORTFOLIO</span>
        <div className="md:hidden ml-auto">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded hover:bg-purple-900 focus:outline-none focus:ring"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" className="text-purple-200">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                : (
                  <>
                    <line x1="4" y1="8" x2="24" y2="8" />
                    <line x1="4" y1="16" x2="24" y2="16" />
                  </>
                )}
            </svg>
          </button>
        </div>

        {/* Navigation */}
        <nav
          className={`
            absolute md:static top-full left-0 w-full md:w-auto
            transition-all duration-300
            md:flex gap-6 items-center
            bg-gray-950 md:bg-transparent shadow md:shadow-none
            ${menuOpen ? 'block' : 'hidden'} md:block
          `}
          style={{ marginLeft: 'auto' }}
        >
          <button onClick={() => scrollToSection('home')} className="block md:inline hover:text-purple-400 transition px-4 py-2">Home</button>
          <button onClick={() => scrollToSection('about')} className="block md:inline hover:text-purple-400 transition px-4 py-2">About</button>
          <button onClick={() => scrollToSection('skills')} className="block md:inline hover:text-purple-400 transition px-4 py-2">Skills</button>
          <button onClick={() => scrollToSection('experience')} className="block md:inline hover:text-purple-400 transition px-4 py-2">Experience</button>
          <button onClick={() => scrollToSection('education')} className="block md:inline hover:text-purple-400 transition px-4 py-2">Education</button>
          <button onClick={() => scrollToSection('projects')} className="block md:inline hover:text-purple-400 transition px-4 py-2">Projects</button>
          <button onClick={() => scrollToSection('other')} className="block md:inline hover:text-purple-400 transition px-4 py-2">Other</button>
          <button
            onClick={() => scrollToSection('contact')}
            className="block md:inline px-4 py-2 rounded-lg border border-purple-400 text-purple-300 hover:bg-purple-800 hover:text-white transition md:ml-4"
          >
            Contact
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="flex flex-col-reverse md:flex-row items-center justify-center min-h-[100vh] pt-32 gap-8 md:gap-20 px-8 scroll-mt-32"
      >
        <div className="flex-1 text-center md:text-left md:pl-8">
          <h2 className="text-3xl font-semibold text-purple-300 mb-1">Hi, I am</h2>
          <h1 className="mb-2">
            <span className="block text-6xl md:text-7xl font-extrabold leading-tight">Mircea-Andrei</span>
            <span className="block text-6xl md:text-7xl font-extrabold leading-tight text-purple-400">Ignatiuc</span>
          </h1>
          <h3 className="text-2xl mb-4 font-semibold text-gray-300">Aspiring Software Developer</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-6">
            <a href="/cv.pdf" download className="px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition shadow">
              Download CV
            </a>
          </div>
          <div className="flex gap-6 justify-center md:justify-start mt-2">
            <a href="mailto:mircea.a.ignatiuc@gmail.com"><Mail className="w-7 h-7 hover:text-purple-300 transition" /></a>
            <a href="https://github.com/mirceacontrol" target="_blank" rel="noopener noreferrer"><Github className="w-7 h-7 hover:text-purple-300 transition" /></a>
            <a href="https://www.linkedin.com/in/mircea-andrei-ignatiuc-09146027b" target="_blank" rel="noopener noreferrer"><Linkedin className="w-7 h-7 hover:text-purple-300 transition" /></a>
          </div>
          <div className="text-gray-400 mt-4">Cluj-Napoca, Romania</div>
        </div>

        <div className="flex-shrink-0 flex items-center justify-center" style={{ transform: "scale(1.5)", transformOrigin: "left center", marginLeft: "-160px", overflow: "visible" }}>
          <div className="w-[520px] h-[430px] flex items-center justify-center overflow-hidden" style={{
            background: "#7c3aed",
            clipPath: "path('M331.5,218Q311,286,226.5,287.5Q142,289,112.5,203.5Q83,118,163,76.5Q243,35,311,93.5Q379,152,331.5,218Z')"
          }}>
            <img src={profileImg} alt="Mircea-Andrei Ignatiuc" className="w-full h-full object-contain" style={{ objectPosition: "center" }} />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        <section id="about" className="mb-20 scroll-mt-36">
          <h2 className="text-3xl font-bold mb-4 border-b border-gray-700 pb-2">About Me</h2>
          <p className="max-w-xl text-gray-400 mb-4">
            I am a dedicated Mathematics and Computer Science student, nearing completion of my studies at Babeș-Bolyai University. Passionate about software engineering and always eager to learn. Currently, I am working on personal projects focused on practical, real-life applications and I’m excited to start my career in software development. I am actively looking for opportunities where I can be part of a great team, meet new people, and put my skills and creativity to work on real projects that make a positive impact.
          </p>
          <button
            onClick={() => setShowTimeline(true)}
            className="mt-2 px-5 py-2 rounded bg-purple-700 hover:bg-purple-800 text-white font-semibold transition"
          >
            Read More About My Journey
          </button>
        </section>

        {showTimeline && <AboutTimeline onClose={() => setShowTimeline(false)} />}

        <section id="skills" className="mb-20 scroll-mt-36"><SkillsSection /></section>
        <section id="experience" className="mb-20 scroll-mt-36"><ExperienceSection /></section>

        <section id="education" className="mb-20 scroll-mt-36">
          <h2 className="text-3xl font-bold mb-4 border-b border-gray-700 pb-2">Education</h2>
          <div className="space-y-6">
            {/* University */}
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-purple-200 mb-1">Babeș-Bolyai University</h3>
              <span className="block text-gray-400 mb-2">
                Mathematics and Computer Science, Bachelor Degree &nbsp;|&nbsp; Oct 2021 – Present
              </span>
              <ul className="list-disc ml-6 text-gray-200 space-y-1">
                <li>Object Oriented Programming</li>
                <li>Data Structures and Algorithms</li>
                <li>Public Key Cryptography</li>
                <li>Database Management Systems</li>
                <li>Software Testing Techniques</li>
                <li>Advanced Programming Methods</li>
              </ul>
            </div>
            {/* High School */}
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-purple-200 mb-1">Simion Bărnuțiu National College</h3>
              <span className="block text-gray-400 mb-2">
                High School Diploma &nbsp;|&nbsp; Sept 2017 – June 2021
              </span>
              <ul className="list-disc ml-6 text-gray-200 space-y-1">
                <li>Mathematics and Informatics</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projects" className="mb-20 scroll-mt-36"><ProjectsSection /></section>
        <section id="other" className="mb-20 scroll-mt-36"><ActivitiesSection /></section>

        <section id="contact" className="mb-8 scroll-mt-36">
          <h2 className="text-3xl font-bold mb-4 border-b border-gray-700 pb-2">Contact</h2>
          <p className="text-gray-300 mb-2">Email: <a href="mailto:mircea.a.ignatiuc@gmail.com" className="underline hover:text-purple-300">mircea.a.ignatiuc@gmail.com</a></p>
          <p className="text-gray-300 mb-2">Phone: +40 784 280 686</p>
          <p className="text-gray-300">Location: Cluj-Napoca, Romania</p>
        </section>
      </main>
    </div>
  );
}

export default App;
