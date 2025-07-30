// TechStack.jsx
import React from "react";
import {
  LayoutTemplate,
  Server,
  Gauge,
  ShieldCheck,
  Boxes,
  Code2
} from "lucide-react";



function TechStack() {
  return (
    <div className="px-4 py-10">
      <h1 className="text-center font-bold text-3xl mb-10">My Skills</h1>
        <div className="flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center md:w-[70%]">
        {/* === Card 1 === */}
        <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-sm hover:shadow-xl transition-shadow">
          <LayoutTemplate/>
          <h2 className="font-bold text-xl mb-2">Frontend Web Development</h2>
          <p className="text-gray-700 text-lg">
            I build beautiful and responsive user interfaces using HTML5, CSS3, Tailwind CSS, and JavaScript. I'm also proficient with React for creating dynamic, component-based applications.
          </p>
        </div>

        {/* === Card 2 === */}
        <div className="bg-white shadow-xl rounded-xl p-6 w-full max-w-sm hover:shadow-xl transition-shadow">
            <Server/>
          <h2 className="font-bold text-lg mb-2">Backend Web Development</h2>
          <p className="text-gray-700 text-lg">
            I use Python and Flask to create robust APIs and manage data with SQLite and SQLAlchemy, building secure and scalable backend systems.
          </p>
        </div>

        {/* === Card 3 === */}
        <div className="bg-white shadow-xl rounded-xl p-6 w-full max-w-sm hover:shadow-xl transition-shadow">
            <Gauge/>
          <h2 className="font-bold text-lg mb-2">Web Optimization</h2>
          <p className="text-gray-700 text-lg">
            I improve website performance and speed using optimization techniques, ensuring a smooth and fast user experience that boosts engagement and SEO.
          </p>
        </div>

        {/* === Card 4 === */}
        <div className="bg-white shadow-xl rounded-xl p-6 w-full max-w-sm hover:shadow-xl transition-shadow">
            <ShieldCheck/>
          <h2 className="font-bold text-lg mb-2">Testing & QA</h2>
          <p className="text-gray-700 text-lg">
            I test and debug applications to ensure high-quality, bug-free experiences. Quality and reliability are at the core of everything I build.
          </p>
        </div>

        {/* === Card 5 === */}
        <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-sm hover:shadow-xl transition-shadow">
            <Boxes/>
          <h2 className="font-bold text-xl mb-2">Collaboration & Soft Skills</h2>
          <p className="text-gray-700 text-lg">
            With a background in education, I bring strong communication, leadership, and problem-solving skills into every tech project I take on.
          </p>
        </div>

        {/* === Card 6 === */}
        <div className="bg-white shadow-xl rounded-xl p-6 w-full max-w-sm hover:shadow-xl transition-shadow">
            <Code2/>
          <h2 className="font-bold text-lg mb-2">Technology Stack</h2>
          <ul className="text-gray-700 text-lg list-disc list-inside space-y-1">
            <li>Frontend: HTML, CSS, Tailwind, JS, React</li>
            <li>Backend: Python, Flask</li>
            <li>Database: SQLite, SQLAlchemy</li>
            <li>Version Control: Git & GitHub</li>
          </ul>
        </div>
      </div>
      </div>
    </div>
  );
}

export default TechStack;
