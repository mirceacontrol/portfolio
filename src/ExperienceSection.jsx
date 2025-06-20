import { useState } from "react";

const jobs = [
  {
    company: "Cogito Code",
    role: "Backend Software Developer Intern",
    date: "Oct 2023 - Dec 2023",
    description: (
      <>
        <p>
          At Cogito Code, I gained hands-on experience with both backend and frontend development. I worked on integrating web application templates with backend databases, collaborating with the team to build and refine internal tools. This internship helped me improve my technical skills and understand the full stack development workflow in a professional environment.
        </p>
      </>
    ),
  },
  {
    company: "Quantic Lab",
    role: "QA Analyst (Game Tester)",
    date: "Feb 2025",
    description: (
      <>
        <p>
          At Quantic Lab, I gained my first hands-on experience with manual testing and briefly worked with tools like Jira for bug tracking and reporting. These experiences taught me to pay attention to details and helped me see how testing is handled in a real work environment.
        </p>
      </>
    ),
  },
];

export default function ExperienceSection() {
  const [selected, setSelected] = useState(0);

  return (
    <section id="experience" className="mb-20">
      <h2 className="text-3xl font-bold mb-6 border-b border-gray-700 pb-2">Experience</h2>
      {/* Tabs */}
      <div className="flex gap-4 mb-8">
        {jobs.map((job, idx) => (
          <button
            key={job.company}
            onClick={() => setSelected(idx)}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              selected === idx
                ? "bg-purple-700 text-white shadow"
                : "bg-gray-800 text-gray-300 hover:bg-purple-700 hover:text-white"
            }`}
          >
            {job.company}
          </button>
        ))}
      </div>
      {/* Description */}
      <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
        <h3 className="text-xl font-bold text-purple-200 mb-1">{jobs[selected].role}</h3>
        <span className="block text-gray-400 mb-2">{jobs[selected].date}</span>
        <div className="text-gray-200">{jobs[selected].description}</div>
      </div>
    </section>
  );
}
