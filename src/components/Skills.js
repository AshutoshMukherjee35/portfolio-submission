import React from "react";
import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="py-10 bg-gray-100">
      <div className="container mx-auto px-5">
        <div className="text-center mb-10">
          <ChipIcon className="w-10 h-10 inline-block text-gray-800 mb-4" />
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Skills & Technologies</h1>
          <p className="text-lg text-gray-700">
            Here are some of the major tools and technologies that I am familiar with:
          </p>
        </div>
        <div className="flex flex-wrap justify-center">
          {skills.map((skill, index) => (
            <div key={index} className="p-2 w-40">
              <div className="bg-white rounded-lg shadow-lg p-4 flex items-center justify-center h-20">
                <BadgeCheckIcon className="w-6 h-6 text-green-500 mr-2" />
                <span className="text-gray-800 text-lg">{skill}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
