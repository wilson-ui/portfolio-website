// src/App.jsx
import React, { useEffect } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  useEffect(() => {
    const fadeElements = document.querySelectorAll(".fade-in");

    const handleScroll = () => {
      fadeElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add("show");
        }
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app-wrapper">
      <div className="background-blur" />
      <div className="content-overlay">
        <Hero />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
