// src/components/Projects.js
import React from "react";

function Projects() {
  return (
    <div id="projects" className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-10">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Project Card 1 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-2">Weather App</h3>
          <p className="text-gray-700">
          Real-time weather info using OpenWeather API
          </p>
        </div>

        {/* Project Card 2 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-2">Tetris Game</h3>
          <p className="text-gray-700">
          A fun browser-based game built from scratch
          </p>
        </div>

        {/* Project Card 3 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-2">Music Player</h3>
          <p className="text-gray-700">
          Fully functioning custom MP3 player
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
