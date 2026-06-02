import { useState, useEffect } from "react";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Dock from "./components/Dock";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import RevealDiv from "./components/animation/RevealDiv";
import { AnimatePresence, motion } from "framer-motion";
import RevealDivX from "./components/animation/RevealDivX";
import { useCallback } from "react";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");

  const getRandomDarkColor = useCallback(() => {
    const minColorValue = 40;
    const maxColorValue = 120;
    const getRandomComponent = () => Math.floor(Math.random() * (maxColorValue - minColorValue + 1) + minColorValue);
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
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-zinc-950 text-zinc-400 min-h-screen font-Inter selection:bg-white/5">
      <Dock activeSection={activeSection} />

      <main className="max-w-7xl mx-auto px-6 py-12 md:py-24 space-y-48">
        <Home id="home" />
        
        <RevealDiv id="experience">
          <Experience />
        </RevealDiv>

        <RevealDiv id="skills">
          <Skills getRandomDarkColor={getRandomDarkColor}/>
        </RevealDiv>

        <RevealDiv id="projects">
          <Projects />
        </RevealDiv>

        <RevealDivX id="contact">
          <Contact />
        </RevealDivX>
      </main>

      <footer className="pb-32 text-center text-zinc-600 text-xs font-space tracking-widest uppercase">
        <p>© {new Date().getFullYear()} • thelouisgram </p>
      </footer>
    </div>
  );
};

export default App;
