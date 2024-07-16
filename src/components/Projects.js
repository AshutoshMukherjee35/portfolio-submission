import React from "react";
import { projects } from "../data";
import { CodeIcon } from "@heroicons/react/solid";

export default function Projects() {
  return (
    <section id="projects" className="py-10 bg-white">
      <div className="container mx-auto px-5">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">Apps I've Built</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover"/>
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <h4 className="text-md text-gray-600 mb-4">{project.subtitle}</h4>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline inline-flex items-center">
                  <CodeIcon className="w-5 h-5 mr-2" />
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
