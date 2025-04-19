// src/components/Projects.jsx
import React from "react";

function Projects() {
  return (
    <section id="projects" className="fade-in">
      <h2>Projects</h2>
      <div className="card">
        <h3>Weather App</h3>
        <p>React app using OpenWeather API for real-time forecasts.</p>
      </div>
      <div className="card">
        <h3>Todo Pro</h3>
        <p>Productivity app with dark mode and local storage.</p>
      </div>
      <div className="card">
        <h3>Portfolio V1</h3>
        <p>This website right here — rebuilt for speed and style 😎</p>
      </div>
    </section>
  );
}

export default Projects;
