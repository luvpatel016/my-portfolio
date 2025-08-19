import React from 'react';
import './AnimatedNavbar.css';

const AnimatedNavbar = () => {
  return (
    <div className="navbar">
      <h1>Hello, I’m Luv 👋</h1>
      <div className="nav-links">
        <a href="#projects">Projects</a>
        <a href="mailto:luvpatel016@gmail.com">Email</a>
        <a href="https://www.linkedin.com/in/luvpatel016" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/luvpatel016" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
  );
};

export default AnimatedNavbar;
