// src/components/Hero.js
import React from "react";

function Hero() {
  return (
    <div
      className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen flex items-center justify-center text-white p-8"
    >
      <div className="bg-white p-10 rounded-xl shadow-2xl text-center text-gray-800 max-w-md w-full">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-lg mb-6">
          Building my dreams, one line of code at a time.
        </p>
        <a href="#projects">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full transition duration-300">
            View My Work
          </button>
        </a>
      </div>
    </div>
  );
}

export default Hero;
