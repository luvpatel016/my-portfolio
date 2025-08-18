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
            A React-based weather app that shows real-time weather using an API.
          </p>
        </div>

        {/* Project Card 2 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-2">Stock Price App</h3>
          <p className="text-gray-700">
            Lets users search stocks and see their latest prices and charts.
          </p>
        </div>

        {/* Project Card 3 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-2">NASA Clone Page</h3>
          <p className="text-gray-700">
            A pixel-perfect clone of the NASA website built for a final exam.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
