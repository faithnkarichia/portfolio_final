import React from "react";
import { Glasses } from "lucide-react";

const certificates = [
  {
    title: "Software Engineering Certificate",
    issuer: "Moringa School",
    date: "July 2025",
    link: "#",
    description:
      "Focused on full-stack development with React, Python, PostgreSQL, and REST APIs.",
  },

  {
    title: "Problem Solving",
    issuer: "African Management Institute",
    date: "2025",
    link: "#",
    description:
      "Learned structured approaches to identifying, analyzing, and solving complex challenges.",
  },
  {
    title: "Personal Productivity: Getting Things Done",
    issuer: "African Management Institute",
    date: "2025",
    link: "#",
    description:
      "Training on time management, prioritization, and boosting daily productivity.",
  },
  {
    title: "Performance Management",
    issuer: "African Management Institute",
    date: "2025",
    link: "#",
    description:
      "Covered techniques for setting goals, giving feedback, and evaluating team performance.",
  },
  {
    title: "Emotional Intelligence",
    issuer: "African Management Institute",
    date: "2025",
    link: "#",
    description:
      "Developed skills for understanding and managing emotions in yourself and others.",
  },
  {
    title: "Setting Goals for Success",
    issuer: "African Management Institute",
    date: "2025",
    link: "#",
    description:
      "Learned to set effective, achievable goals aligned with personal and team priorities.",
  },
  {
    title: "Self-Management",
    issuer: "African Management Institute",
    date: "2025",
    link: "#",
    description:
      "Built habits around self-discipline, focus, and resilience to achieve consistent performance.",
  },
];

export default function Certificates() {
  return (
    <div className="p-6 md:p-10 flex flex-col items-center">
      <div className="flex items-center justify-center gap-2 mb-4">
        <Glasses className="text-primary" />
        <h2 className="text-3xl font-bold text-center">Certificates</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        {certificates.map((cert, index) => (
          <div key={index} className="p-4  rounded shadow bg-white">
            <h3 className="text-xl font-semibold">{cert.title}</h3>
            <p className="text-sm text-gray-600">
              {cert.issuer} — {cert.date}
            </p>
            <p className="mt-2">{cert.description}</p>
            {cert.link && (
              <a
                href={cert.link}
                className="text-blue-500 underline mt-2 inline-block"
              >
                View Certificate
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
