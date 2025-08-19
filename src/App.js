function App() {
  return (
    <div className="container">
      <h1>Luv Patel's Developer Portfolio</h1>
      <p style={{ textAlign: 'center' }}>
        Welcome to my personal React portfolio site!
      </p>

      <section>
        <h2>🚀 Skills Demonstrated</h2>
        <ul>
          <li>React.js</li>
          <li>JavaScript</li>
          <li>HTML5, CSS3</li>
          <li>Responsive Design</li>
        </ul>
      </section>

      <section>
        <h2>🎯 Featured Projects</h2>
        <ul>
          <li>🎮 Tetris Game – <span style={{ color: "#ccc" }}>A fun browser-based game built from scratch</span></li>
          <li>☁️ Weather App – <span style={{ color: "#ccc" }}>Real-time weather info using OpenWeather API</span></li>
          <li>🎵 Music Player – <span style={{ color: "#ccc" }}>Fully functioning custom MP3 player</span></li>
        </ul>
      </section>

      <section>
        <h2>🧠 Skills & Tech Used</h2>
        <ul>
          <li>React.js</li>
          <li>JavaScript</li>
          <li>HTML5 & CSS3</li>
          <li>Git & GitHub</li>
        </ul>
      </section>

      <section>
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
