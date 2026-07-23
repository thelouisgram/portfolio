"use client";

import { useState, useEffect, useCallback } from "react";
import Contact from "./Contact";
import Home from "./Home";
import Dock from "./Dock";
import Projects from "./Projects";
import Skills from "./Skills";
import Experience from "./Experience";
import RevealDiv from "./animation/RevealDiv";
import RevealDivX from "./animation/RevealDivX";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");

  const getRandomDarkColor = useCallback(() => {
    const minColorValue = 40;
    const maxColorValue = 120;
    const getRandomComponent = () =>
      Math.floor(
        Math.random() * (maxColorValue - minColorValue + 1) + minColorValue,
      );
    return `rgb(${getRandomComponent()}, ${getRandomComponent()}, ${getRandomComponent()})`;
  }, []);

  useEffect(() => {
    const options = { root: null, rootMargin: "0px", threshold: 0.2 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, options);

    const sections = ["home", "experience", "skills", "projects", "contact"];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-zinc-950 text-zinc-400 min-h-screen font-Inter selection:bg-white/5">
      <Dock activeSection={activeSection} />

      <main className="max-w-7xl mx-auto px-6 py-12 md:py-24 space-y-48">
        <Home />

        <RevealDiv>
          <Experience />
        </RevealDiv>

        <RevealDiv>
          <Skills getRandomDarkColor={getRandomDarkColor} />
        </RevealDiv>

        <RevealDiv>
          <Projects />
        </RevealDiv>

        <RevealDivX>
          <Contact />
        </RevealDivX>
      </main>

      <footer className="pb-32 text-center text-zinc-600 text-xs font-space tracking-widest uppercase">
        <p>© {new Date().getFullYear()} • thelouisgram </p>
      </footer>
    </div>
  );
};

export default Portfolio;
