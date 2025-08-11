import React, { useState } from "react";
import profile from "../assets/faith.jpg";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const closeModal = () => {
    setMenuOpen(false);
  };

  return (
    <div className="w-full h-auto md:h-screen flex flex-col items-center justify-center relative">
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full bg-black text-white h-auto md:h-[10vh] flex items-center justify-center z-40 px-4">
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <button onClick={() => scrollToSection("profile")} className="px-4 py-2 font-bold hover:text-gray-400">Profile</button>
          <button onClick={() => scrollToSection("contacts")} className="px-4 py-2 font-bold hover:text-gray-400">Contacts</button>
          <button onClick={() => scrollToSection("projects")} className="px-4 py-2 font-bold hover:text-gray-400">Projects</button>
          <button onClick={() => scrollToSection("techstack")} className="px-4 py-2 font-bold hover:text-gray-400">Tech Stack</button>
          <button onClick={() => scrollToSection("certificates")} className="px-4 py-2 font-bold hover:text-gray-400">Certificates</button>
          <button onClick={handleLoginClick} className="px-4 py-2 bg-white text-black rounded hover:bg-gray-300 font-bold">Admin Signup</button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden ml-auto">
          <button onClick={() => setMenuOpen(true)} aria-label="Open menu">
            <Menu />
          </button>
        </div>
      </div>

      {/* Mobile Modal Menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center transition-all duration-300 ease-in-out"
          onClick={closeModal}
        >
          <div className="absolute top-5 right-5 text-white text-3xl">
            <button onClick={closeModal} aria-label="Close menu">
              <X />
            </button>
          </div>

          <ul className="flex flex-col items-center gap-6 text-white text-xl font-semibold">
            <li><button onClick={() => { scrollToSection("profile"); closeModal(); }}>Profile</button></li>
            <li><button onClick={() => { scrollToSection("contacts"); closeModal(); }}>Contacts</button></li>
            <li><button onClick={() => { scrollToSection("projects"); closeModal(); }}>Projects</button></li>
            <li><button onClick={() => { scrollToSection("techstack"); closeModal(); }}>Tech Stack</button></li>
            <li><button onClick={() => { scrollToSection("certificates"); closeModal(); }}>Certificates</button></li>
            <li>
              <button
                className="mt-4 px-4 py-2 bg-white text-black rounded hover:bg-gray-300"
                onClick={() => {
                  handleLoginClick();
                  closeModal();
                }}
              >
                Admin Signup
              </button>
            </li>
          </ul>
        </div>
      )}

      {/* Hero Section */}
      <div className="mt-[12vh] w-full md:w-[80%] h-auto md:h-[90vh] flex flex-col-reverse md:flex-row items-center justify-center px-4 md:px-0">
        {/* Text Section */}
        <div className="w-full md:w-[60%] flex flex-col justify-center">
          <h1 className="font-extrabold text-2xl md:text-5xl mb-6 text-gray-900">
            Hello, my name is Faith
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
            A motivated and adaptable software engineer with a solid foundation in web development, gained through hands-on training at Moringa School. Experienced in building scalable full-stack applications, leading team projects, and collaborating in agile environments.
            <br /><br />
            Successfully transitioned from a Bachelor of Education Arts background, bringing strong communication, leadership, and critical thinking skills that enhance my ability to solve technical problems and work effectively with teams. Passionate about continuous learning, clean code, and creating user-focused solutions.
          </p>
          <button
            onClick={() => scrollToSection("techstack")}
            className="bg-black text-white mt-6 px-6 py-2 rounded-md font-bold hover:bg-gray-300 hover:text-black w-fit"
          >
            See More
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-[40%] flex justify-center items-center p-10">
          <img className="rounded-md w-full max-w-sm" src={profile} alt="Profile" />
        </div>
      </div>
    </div>
  );
}
