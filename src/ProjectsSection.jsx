import { useState } from "react";
import { Github } from "lucide-react";

const modernProjects = [
  {
    title: "Employee Time Tracker",
    url: "https://github.com/mirceacontrol/employee-time-tracker",
    description:
      "A modern backend application for tracking employee hours, work sessions, and holidays. Built with .NET, EF Core, SQL Server, Docker. Includes full CRUD for employees, Swagger UI, persistent SQL DB, easy Docker Compose workflow.",
    features: [
      "Employee CRUD API",
      "Work session & holiday tracking",
      "Swagger UI docs for all endpoints",
      "SQL Server integration (persistent, Dockerized)",
      "One-command Docker Compose setup",
      "Deployable to any cloud/Docker host",
      "Other features WIP",
    ],
  },
  {
    title: "README Generator",
    url: "https://github.com/mirceacontrol/readme-generator",
    live: "https://mirceacontrol.github.io/readme-generator/",
    description:
      "A modern web app to generate custom README.md files for your projects with live preview, formatting helpers, and section selection. Built with React and Tailwind CSS.",
    features: [
      "Section selection (description, installation, usage, etc.)",
      "Markdown formatting helpers (bold, link, code)",
      "Live preview",
      "Custom & rearrangeable sections",
      "Dark mode",
    ],
  },
  {
    title: "Event Finder App",
    url: "https://github.com/mirceacontrol/event-finder-app",
    description:
      "A full-stack app to search for events using the Ticketmaster API, with a React + Tailwind frontend and a Node.js backend to keep your API key secret.",
    features: [
      "Modern UI (React + Vite + Tailwind)",
      "Backend API proxy with Node/Express",
      "Real event search, safe API key storage",
      "Wishlist, search, and filter features",
      "Other features WIP",
    ],
  },
  {
    title: "Event Finder Demo",
    url: "https://github.com/mirceacontrol/event-finder-demo",
    live: "https://mirceacontrol.github.io/event-finder-demo/",
    description:
      "A demo event finder web app—search and wishlist events from a local sample database. No API keys or backend required. Pure HTML, CSS, JavaScript.",
    features: [
      "Instant event search",
      "Wishlist (demo, browser storage)",
      "No API key or backend required",
      "Safe for public deployment",
    ],
  },
];

const uniProjects = [
  {
    title: "Jewelry Store",
    description: "C++ / QT program to manage a jewelry store.",
  },
  {
    title: "Movie Studios",
    description: ".NET Windows Form, database management system in C# to manage movie studios.",
  },
  {
    title: "Points",
    description: "Python application that performs mathematical operations on points on the X,Y axis.",
  },
];

export default function ProjectsSection() {
  const [tab, setTab] = useState(0);

  return (
    <section id="projects" className="mb-20">
      <h2 className="text-3xl font-bold mb-6 border-b border-gray-700 pb-2">Projects</h2>
      {/* Tabs */}
      <div className="flex gap-4 mb-8">
        <button
          className={`px-4 py-2 rounded-lg transition font-semibold ${
            tab === 0
              ? "bg-purple-700 text-white shadow"
              : "bg-gray-800 text-gray-300 hover:bg-purple-700 hover:text-white"
          }`}
          onClick={() => setTab(0)}
        >
          Portfolio Projects
        </button>
        <button
          className={`px-4 py-2 rounded-lg transition font-semibold ${
            tab === 1
              ? "bg-purple-700 text-white shadow"
              : "bg-gray-800 text-gray-300 hover:bg-purple-700 hover:text-white"
          }`}
          onClick={() => setTab(1)}
        >
          University Projects
        </button>
      </div>

      {/* Modern Projects */}
      {tab === 0 && (
        <div className="grid gap-6 md:grid-cols-2">
          {modernProjects.map((proj) => (
            <div key={proj.title} className="bg-gray-800 rounded-xl p-6 shadow-lg flex flex-col h-full">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xl font-bold text-purple-200">{proj.title}</span>
                <a href={proj.url} target="_blank" rel="noopener noreferrer" className="hover:text-purple-300" title="View on GitHub">
                  <Github className="w-5 h-5" />
                </a>
                {proj.live && (
                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 px-2 py-0.5 bg-purple-800 text-purple-100 rounded text-xs font-semibold hover:bg-purple-700"
                  >
                    Live
                  </a>
                )}
              </div>
              <p className="text-gray-200 mb-2">{proj.description}</p>
              <ul className="list-disc ml-5 text-gray-400 mb-2">
                {proj.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* University Projects */}
      {tab === 1 && (
        <div className="grid gap-6 md:grid-cols-2">
          {uniProjects.map((proj) => (
            <div key={proj.title} className="bg-gray-800 rounded-xl p-6 shadow-lg flex flex-col h-full">
              <span className="text-xl font-bold text-purple-200 mb-2">{proj.title}</span>
              <p className="text-gray-200">{proj.description}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
