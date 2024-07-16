import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with your form submission logic
    console.log("Form submitted", { name, email, message });
  };

  return (
    <section id="contact" className="py-10 bg-gray-100">
      <div className="container mx-auto px-5">
        {/* <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Contact Me</h1>
          <p className="text-lg text-gray-700">
            Feel free to reach out for any inquiries or collaborations.
          </p>
        </div> */}
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-5">Hire Me</h2>
        <p>Contact me</p>
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 border border-gray-300 rounded-lg"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-gray-300 rounded-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
              Message
            </label>
            <textarea
              id="message"
              className="w-full p-3 border border-gray-300 rounded-lg"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white py-3 px-6 rounded-lg font-bold hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
