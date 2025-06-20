function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black relative overflow-hidden text-gray-100">
      {/* Blurred accent - top right */}
      <div className="absolute top-[-80px] right-[-120px] w-[300px] h-[300px] rounded-full bg-purple-700 opacity-40 blur-3xl pointer-events-none"></div>
      {/* Blurred accent - bottom left */}
      <div className="absolute bottom-[-80px] left-[-120px] w-[320px] h-[320px] rounded-full bg-blue-700 opacity-30 blur-3xl pointer-events-none"></div>

      {/* Header */}
      <header className="flex justify-between items-center px-12 py-8 sticky top-0 bg-opacity-70 backdrop-blur-sm z-10">
        <span className="text-2xl font-extrabold tracking-tight text-purple-200">MIRCEA</span>
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
            Mircea Ignatiuc
          </h1>
          <p className="text-xl text-gray-300 mb-2">Mathematics and Computer Science Student</p>
          <p className="max-w-xl text-gray-400 mb-4">
            I'm currently studying for my Bachelor's degree in Mathematics and Computer Science. I'm interested in learning new software concepts, discovering new technologies, and enhancing my programming skills.
          </p>
          <div className="flex gap-6 items-center mb-2 flex-wrap">
            <a href="mailto:ignatiucmircea112@gmail.com" className="underline hover:text-purple-300">ignatiucmircea112@gmail.com</a>
            <span className="hidden sm:block">|</span>
            <a href="https://github.com/IgnatiucMircea" target="_blank" rel="noopener noreferrer" className="underline hover:text-purple-300">GitHub</a>
          </div>
          <p className="text-gray-400">Cluj-Napoca, Romania | +40 784 280 686</p>
        </section>

        {/* SKILLS & TECHNOLOGIES */}
        <section id="skills" className="mb-20">
          <h2 className="text-3xl font-bold mb-4 border-b border-gray-700 pb-2">Skills & Technologies</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="bg-gray-800 rounded-lg p-4">HTML / CSS</div>
            <div className="bg-gray-800 rounded-lg p-4">Java</div>
            <div className="bg-gray-800 rounded-lg p-4">C/C++</div>
            <div className="bg-gray-800 rounded-lg p-4">C#</div>
            <div className="bg-gray-800 rounded-lg p-4">Python Script</div>
            <div className="bg-gray-800 rounded-lg p-4">Shell</div>
            <div className="bg-gray-800 rounded-lg p-4">SQL</div>
            <div className="bg-gray-800 rounded-lg p-4">Assembly x86</div>
            <div className="bg-gray-800 rounded-lg p-4">Photo/Video Editing</div>
            <div className="bg-gray-800 rounded-lg p-4">QT Designer</div>
            <div className="bg-gray-800 rounded-lg p-4">JavaFX</div>
            <div className="bg-gray-800 rounded-lg p-4">Docker</div>
            <div className="bg-gray-800 rounded-lg p-4">GitHub (VCS)</div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="mb-20">
          <h2 className="text-3xl font-bold mb-4 border-b border-gray-700 pb-2">Experience</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold">Intern at Cogito Code</h3>
              <span className="text-gray-400">Backend Software Developer / Oct 2023 - Dec 2023</span>
              <ul className="list-disc ml-5 text-gray-300 mt-1">
                <li>Worked on backend software projects, collaborating in a team environment.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">QA Analyst at Quantic Lab</h3>
              <span className="text-gray-400">Game Tester / Feb 2025</span>
              <ul className="list-disc ml-5 text-gray-300 mt-1">
                <li>Tested games for quality assurance as part of the QA team.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="mb-20">
          <h2 className="text-3xl font-bold mb-4 border-b border-gray-700 pb-2">Education</h2>
          <div>
            <h3 className="text-xl font-semibold">Babeș-Bolyai University</h3>
            <span className="text-gray-400">Mathematics and Computer Science, Bachelor Degree | Oct 2021 - Present</span>
            <ul className="list-disc ml-5 text-gray-300 mt-1">
              <li>Object Oriented Programming</li>
              <li>Data Structures and Algorithms</li>
              <li>Public Key Cryptography</li>
              <li>Database Management Systems</li>
              <li>Software Testing Techniques</li>
              <li>Advanced Programming Methods</li>
            </ul>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-semibold">Simion Bărnuțiu National College</h3>
            <span className="text-gray-400">High School Diploma | Sept 2017 - June 2021</span>
            <ul className="list-disc ml-5 text-gray-300 mt-1">
              <li>Mathematics and Informatics</li>
            </ul>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="mb-20">
          <h2 className="text-3xl font-bold mb-4 border-b border-gray-700 pb-2">Projects</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold">Jewelry Store</h3>
              <p className="text-gray-300">C++ / QT program to manage a jewelry store.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Movie Studios</h3>
              <p className="text-gray-300">.NET Windows Form, database management system in C# to manage movie studios.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Points</h3>
              <p className="text-gray-300">Python application that performs mathematical operations on points on the X,Y axis.</p>
            </div>
          </div>
        </section>

        {/* LANGUAGES */}
        <section id="languages" className="mb-20">
          <h2 className="text-3xl font-bold mb-4 border-b border-gray-700 pb-2">Languages</h2>
          <ul className="list-disc ml-5 text-gray-300">
            <li>Romanian (native)</li>
            <li>English: Reading C1, Writing C1, Speaking C2, Listening B2, General C1</li>
          </ul>
        </section>

        {/* OTHER ACTIVITIES & INTERESTS */}
        <section id="other" className="mb-20">
          <h2 className="text-3xl font-bold mb-4 border-b border-gray-700 pb-2">Other Activities & Interests</h2>
          <ul className="list-disc ml-5 text-gray-300">
            <li>Volunteer at Hermes Society (Photo/Video Department 2021-2023)</li>
            <li>Programming and Software Development</li>
            <li>Web Development</li>
            <li>Machine Learning</li>
            <li>Data Science</li>
          </ul>
        </section>

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
