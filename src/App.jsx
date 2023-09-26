import { useState, useEffect } from "react";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import MobileNavbar from "./components/MobileNavbar";
import RevealDiv from "./components/animation/RevealDiv";
import { AnimatePresence, motion } from "framer-motion";

const App = () => {
  const [nav, setNav] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: "0px",
      threshold: 0.3, // Trigger when 50% of the component is in the viewport
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          switch (entry.target.id) {
            case "home":
              setActiveSection("home");
              break;
            case "skills":
              setActiveSection("skills");
              break;
            case "projects":
              setActiveSection("projects");
              break;
            case "contact":
              setActiveSection("contact");
              break;
            default:
              setActiveSection("home");
          }
        }
      });
    }, options);

    // Observe the components
    observer.observe(document.getElementById("home"));
    observer.observe(document.getElementById("skills"));
    observer.observe(document.getElementById("projects"));
    observer.observe(document.getElementById("contact"));

    // Clean up the observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="bg-[#23252C] w-full h-auto font-Space relative">
      <div className="w-full md:w-[1100px] md:mx-auto h-full ">
        <Navbar setNav={setNav} nav={nav} activeSection={activeSection}/>
        <AnimatePresence>
          {nav && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ ease: "easeInOut", duration: 0.8 }}
            >
              <MobileNavbar setNav={setNav} activeSection={activeSection} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="w-full px-3 xs:px-5 md:px-0 md:w-[1100px] md:mx-auto h-auto ">
        <Home id="home" />
        <RevealDiv id="skills">
          <Skills />
        </RevealDiv>
        <RevealDiv id="projects">
          <Projects />
        </RevealDiv>
        <RevealDiv id="contact">
          <Contact />
        </RevealDiv>
      </div>
    </div>
  );
};

export default App;
