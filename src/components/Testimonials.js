import React from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { testimonials } from "../data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-10 bg-gray-100">
      <div className="container mx-auto px-5">
        <div className="text-center mb-10">
          <UsersIcon className="w-10 h-10 inline-block text-gray-800 mb-4" />
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Client Testimonials</h1>
          <p className="text-lg text-gray-700">
            Hear what others have to say about my work and collaboration.
          </p>
        </div>
        <div className="flex flex-wrap justify-center -m-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-4 w-full md:w-1/2 lg:w-1/3">
              <div className="h-full bg-white p-8 rounded-lg shadow-lg">
                <TerminalIcon className="w-6 h-6 text-gray-500 mb-4" />
                <p className="leading-relaxed mb-6">{testimonial.quote}</p>
                <div className="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src={testimonial.image}
                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">{testimonial.name}</span>
                    <span className="text-gray-500 text-sm">{testimonial.company}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
