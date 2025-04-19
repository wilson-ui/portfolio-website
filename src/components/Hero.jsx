// src/components/Hero.jsx
import React from "react";

function Hero() {
  return (
    <section id="hero" className="fade-in">
      <h1 className="typewriter">Hey, I'm Wilson 👑</h1>
      <p className="fade-in">A frontend developer building cool things with React.</p>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <a href="#projects">
          <button>View My Work</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
