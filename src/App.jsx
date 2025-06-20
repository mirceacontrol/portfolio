import { Mail, Github, Linkedin } from 'lucide-react';
import SkillsSection from './SkillsSection';
import ExperienceSection from "./ExperienceSection";
import ProjectsSection from "./ProjectsSection";
import ActivitiesSection from "./ActivitiesSection";



function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black relative overflow-hidden text-gray-100">
      {/* Blurred accent - top right */}
      <div className="absolute top-[-80px] right-[-120px] w-[300px] h-[300px] rounded-full bg-purple-700 opacity-40 blur-3xl pointer-events-none"></div>
      {/* Blurred accent - bottom left */}
      <div className="absolute bottom-[-80px] left-[-120px] w-[320px] h-[320px] rounded-full bg-blue-700 opacity-30 blur-3xl pointer-events-none"></div>

      {/* Header */}
      <header className="flex justify-between items-center px-12 py-8 sticky top-0 bg-opacity-70 backdrop-blur-sm z-10">
        <span className="text-2xl font-extrabold tracking-tight text-purple-200">MIRCEA'S PORTFOLIO</span>
        <nav className="flex gap-6 items-center">
          <a href="#about" className="hover:text-purple-400 transition">About</a>
          <a href="#skills" className="hover:text-purple-400 transition">Skills</a>
          <a href="#experience" className="hover:text-purple-400 transition">Experience</a>
          <a href="#education" className="hover:text-purple-400 transition">Education</a>
          <a href="#projects" className="hover:text-purple-400 transition">Projects</a>
          <a href="#other" className="hover:text-purple-400 transition">Other</a>
          <a href="#contact" className="px-4 py-1 rounded-lg border border-purple-400 text-purple-300 hover:bg-purple-800 hover:text-white transition">Contact</a>
        </nav>
      </header>

      {/* Main content */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* HERO/ABOUT ME */}
        <section id="about" className="mb-20">
          <h1 className="text-5xl font-bold mb-3">
            Mircea-Andrei Ignatiuc
          </h1>
          <p className="text-xl text-gray-300 mb-2">Mathematics and Computer Science Student</p>
          <p className="max-w-xl text-gray-400 mb-4">
            I am a dedicated Mathematics and Computer Science student, nearing completion of my studies at Babeș-Bolyai University. Passionate about software engineering and always eager to learn. Currently, I am working on personal projects focused on practical, real-life applications and I’m excited to start my career in software development. I am actively looking for opportunities where I can be part of a great team, meet new people, and put my skills and creativity to work on real projects that make a positive impact.
          </p>
          <div className="flex gap-6 items-center mb-2">
            <a href="mailto:ignatiucmircea112@gmail.com" aria-label="Email" target="_blank" rel="noopener noreferrer">
              <Mail className="w-7 h-7 hover:text-purple-300 transition" />
            </a>
            <a href="https://github.com/mirceacontrol" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
              <Github className="w-7 h-7 hover:text-purple-300 transition" />
            </a>
            <a href="https://www.linkedin.com/in/mircea-andrei-ignatiuc-09146027b" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-7 h-7 hover:text-purple-300 transition" />
            </a>
          </div>
          <p className="text-gray-400">Cluj-Napoca, Romania | +40 784 280 686</p>
        </section>

        {/* SKILLS - Slideshow */}
        <SkillsSection />

        {/* EXPERIENCE */}
        <ExperienceSection />

        {/* EDUCATION */}
        <section id="education" className="mb-20">
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

        {/* PROJECTS */}
        <ProjectsSection />


        {/* LANGUAGES */}
        <section id="languages" className="mb-20">
          <h2 className="text-3xl font-bold mb-4 border-b border-gray-700 pb-2">Languages</h2>
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg flex flex-col gap-2 max-w-md">
            <div>
              <span className="font-bold text-purple-200 mr-2">Romanian:</span>
              <span className="text-gray-200">Native</span>
            </div>
            <div>
              <span className="font-bold text-purple-200 mr-2">English:</span>
              <span className="text-gray-200">Reading C1, Writing C1, Speaking C2, Listening B2, General C1</span>
            </div>
          </div>
        </section>

        {/* OTHER ACTIVITIES & INTERESTS */}
        <ActivitiesSection />

        {/* CONTACT (simple anchor, since contact info is already at top) */}
        <section id="contact" className="mb-8">
          <h2 className="text-3xl font-bold mb-4 border-b border-gray-700 pb-2">Contact</h2>
          <p className="text-gray-300 mb-2">
            Email: <a href="mailto:ignatiucmircea112@gmail.com" className="underline hover:text-purple-300">ignatiucmircea112@gmail.com</a>
          </p>
          <p className="text-gray-300 mb-2">
            Phone: +40 784 280 686
          </p>
          <p className="text-gray-300">
            Location: Cluj-Napoca, Romania
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
