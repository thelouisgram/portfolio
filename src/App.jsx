import { useState, useEffect } from "react";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import MobileNavbar from "./components/MobileNavbar";
import RevealDiv from "./components/animation/RevealDiv";
import { AnimatePresence, motion } from "framer-motion";
import RevealDivX from "./components/animation/RevealDivX";

const App = () => {
  const [nav, setNav] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
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

  useEffect(() => {
    const checkScrollPosition = () => {
      if (window.scrollY !== 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", checkScrollPosition);

    return () => {
      window.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);

  return (
    <div className ="bg-[#23252C] w-full h-auto font-Space relative ">
      <div>
        <Navbar
          setNav={setNav}
          nav={nav}
          activeSection={activeSection}
          isScrolled={isScrolled}
        />
        <AnimatePresence>
          {nav && (
            <motion.div
              initial={{ y: "-100%", opacity: 1 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 1}}
              transition={{ ease: "easeInOut", duration: 0.5 }}
              className="w-full z-[10] bg-[#161619] shadow-sm text-white top-[80px] h-auto fixed md:hidden"
            >
              <MobileNavbar setNav={setNav} activeSection={activeSection} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="w-full px-3 xs:px-5 md:px-0 md:w-[1100px] md:mx-auto h-auto relative">
        <Home id="home" />
        <RevealDiv id="skills">
          <Skills />
        </RevealDiv>
        <RevealDiv id="projects">
          <Projects />
        </RevealDiv>
        <RevealDivX id="contact">
          <Contact />
        </RevealDivX>
        {isScrolled && (
          <button
            onClick={scrollToTop}
            className="w-[50px] h-[50px] rounded-full fixed infinite-up-and-down flex justify-center items-center p-3 cursor-pointer bg-gray-700 shadow-xl right-2 z-10 bottom-10"
          >
            <img src="/assets/up.png" alt="up" />
          </button>
        )}
      </div>
    </div>
  );
};

export default App;
