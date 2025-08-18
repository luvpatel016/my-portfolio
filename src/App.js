import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <section className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Luv Patel's Developer Portfolio</h1>
        <p className="text-lg text-gray-600">
          Welcome to my personal React portfolio site!
        </p>
      </section>

      <section className="max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-4">🚀 Skills Demonstrated</h2>
        <ul className="list-disc list-inside text-left text-gray-700">
          <li>React.js</li>
          <li>JavaScript</li>
          <li>HTML5, CSS3</li>
          <li>Responsive Design</li>
        </ul>
      </section>

      <section className="max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-4">🎯 Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-4">
              <h3 className="text-lg font-bold">🎮 Tetris Game</h3>
              <p>A fun browser-based game built from scratch</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="text-lg font-bold">☁️ Weather App</h3>
              <p>Real-time weather info using OpenWeather API</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="text-lg font-bold">🎵 Music Player</h3>
              <p>Fully functioning custom MP3 player</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-4">🧠 Skills & Tech Used</h2>
        <ul className="list-disc list-inside text-left text-gray-700">
          <li>React.js</li>
          <li>JavaScript</li>
          <li>HTML5 & CSS3</li>
          <li>Git & GitHub</li>
        </ul>
      </section>

      <section className="max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-4">📁 Folder Structure</h2>
        <p className="text-gray-600">Organized with reusable components and clean structure.</p>
      </section>
    </main>
  );
}
