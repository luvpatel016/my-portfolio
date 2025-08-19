import React from 'react';
import './AnimatedNavbar.css';

const AnimatedNavbar = () => {
  return (
    <div className="navbar">
      <h1>Hello, I'm Luv Patel 🧑🏽‍💻</h1>
      <div className="button-container">
        <a href="#projects" className="nav-btn">Projects</a>
        <a href="mailto:1501lpatel@gmail.com" className="nav-btn">Email</a>
        <a href="https://www.linkedin.com/in/luv-patel-395267299" className="nav-btn" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/luvpatel016" className="nav-btn" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
  );
};

export default AnimatedNavbar;
