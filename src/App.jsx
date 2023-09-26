import { useState } from "react";
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
  return (
    <div className="bg-[#23252C] w-full h-auto font-Space relative">
      <div className="w-full md:w-[1100px] md:mx-auto h-full ">
        <Navbar setNav={setNav} />
        <AnimatePresence>
          {nav &&
            <motion.div
              initial={{ y: -700 }}
              animate={{ y: 0 }}
              exit={{ y: -350 }}
              transition={{ ease: "easeInOut", duration: 0.8 }} ><MobileNavbar setNav={setNav} />
            </motion.div>}
        </AnimatePresence>
      </div>
      <div className="w-full px-3 xs:px-5 md:px-0 md:w-[1100px] md:mx-auto h-auto ">
        <Home />
        <RevealDiv>
          <Skills />
        </RevealDiv>
        <RevealDiv>
          <Projects />
        </RevealDiv>
        <RevealDiv>
          <Contact />
        </RevealDiv>
      </div>
    </div>
  );
};

export default App;
