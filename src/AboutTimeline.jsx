import React, { useState } from "react";

const PAGES = [
  {
    label: "2017–2021: High School",
    content: (
      <>
        <p>
          I attended Simion Bărnuțiu National College in Șimleu Silvaniei, where I joined the Excellence Center for Informatics in the 9th, 10th and 11th grade. Here, I participated in all county informatics olympiads that took place (except for 2020-2021, canceled due to COVID).  
        </p>
        <p>
          During these years, I developed my passion for programming, learned the fundamentals of C++ and algorithms, and realized I wanted a career in IT.
        </p>
      </>
    ),
  },
  {
    label: "2021–2024: University",
    content: (
      <>
        <p>
          I broadened my programming knowledge at Babeș-Bolyai University, learning new languages (Java, Python, C#, JavaScript) and key CS concepts like OOP, database design, cryptography, and software testing.
        </p>
        <p>
          Alongside coursework, I volunteered, met great people, participated in workshops and social events, and fell in love with the city of Cluj.
        </p>
      </>
    ),
  },
  {
    label: "2024–Present: My Journey Now",
    content: (
      <>
        <p>
          I'm focused on developing portfolio projects that solve real problems, keeping up with the latest in tech, and preparing for my first full-time role as a developer.
        </p>
        <p>
          I'm always eager to learn, meet new people, and grow both as an engineer and a person!
        </p>
      </>
    ),
  },
];

export default function AboutTimeline({ onClose }) {
  const [page, setPage] = useState(0);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center">
      <div className="bg-gray-900 rounded-2xl shadow-2xl p-8 max-w-lg w-full relative">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-purple-400 text-2xl"
          onClick={onClose}
        >
          ×
        </button>
        <h3 className="text-xl font-bold text-purple-200 mb-2">
          {PAGES[page].label}
        </h3>
        <div className="text-gray-300 mb-6 space-y-2">{PAGES[page].content}</div>
        <div className="flex justify-between">
          <button
            className="px-4 py-1 rounded bg-purple-700 disabled:opacity-50"
            onClick={() => setPage(page - 1)}
            disabled={page === 0}
          >
            Previous
          </button>
          <button
            className="px-4 py-1 rounded bg-purple-700 disabled:opacity-50"
            onClick={() => setPage(page + 1)}
            disabled={page === PAGES.length - 1}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
