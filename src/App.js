import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import './App.css';
function App() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);  
  return (
    <div className="App">
      <h1>Luv Patel's Developer Portfolio</h1>
      <p style={{ textAlign: 'center' }}>
        Building my dreams, one line of code at a time. 
      </p>

      <section data-aos="fade-up">
        <h2>🚀 Skills Demonstrated</h2>
        <ul>
          <li>React.js</li>
          <li>JavaScript</li>
          <li>HTML5, CSS3</li>
          <li>Responsive Design</li>
        </ul>
      </section>

      <section data-aos="fade-right">
        <h2>🎯 Featured Projects</h2>
        <ul>
        <li>
  🎮 <a href="https://luvpatel016.github.io/Tetris-Game/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
    Tetris Game
  </a> – <span style={{ color: "#ccc" }}>A fun browser-based game built from scratch</span>
</li>

<li>
  ☁️ <a href="https://your-weather-link.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
    Weather App
  </a> – <span style={{ color: "#ccc" }}>Real-time weather info using OpenWeather API</span>
</li>

<li>
  🎵 <a href="https://luvpatel016.github.io/music-player/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
    Music Player
  </a> – <span style={{ color: "#ccc" }}>Fully functioning custom MP3 player</span>
</li>

        </ul>
      </section>

      <section data-aos="fade-left">
        <h2>🧠 Skills & Tech Used</h2>
        <ul>
          <li>React.js</li>
          <li>JavaScript</li>
          <li>HTML5 & CSS3</li>
          <li>Git & GitHub</li>
        </ul>
      </section>

      <section data-aos="zoom-in">
        <h2>🗂️ Folder Structure</h2>
        <ul>
          <li><code>/src/components</code> – Reusable components like Header, Footer, etc.</li>
          <li><code>/public</code> – Static assets like images, logos</li>
          <li><code>/src</code> – Main logic and App entry point</li>
        </ul>
      </section>
    </div>
  );
}
export default App;
