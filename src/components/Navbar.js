import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-800 sticky top-0 z-50">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href="#about" className="text-xl font-bold text-white">
          My Portfolio
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 text-gray-300 hover:text-white">
            Projects 
          </a>
          <a href="#skills" className="mr-5 text-gray-300 hover:text-white">
            Skills 
          </a>
          <a href="#testimonials" className="mr-5 text-gray-300 hover:text-white">
            Testimonials 
          </a>
          <a href="#contact" className="mr-5 text-gray-300 hover:text-white">
            Contact 
          </a>
        </nav>
      </div>
    </header>
  );
}
