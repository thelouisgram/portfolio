/* eslint-disable react/no-unescaped-entities */
import ProjectItems from "./ProjectItems";
import RevealDivX from "./animation/RevealDivX";
import { useState } from "react";
import { scrollToSection } from "../utils";

const Projects = () => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 3;

  const prevBtn = () => {
    setStartIndex((prev) => prev - itemsPerPage);
  };

  const nextBtn = () => {
    setStartIndex((prev) => prev + itemsPerPage);
  };

  return (
    <section
      id="projects"
      className="w-full h-auto bg-[#23252C] pt-[128px]"
    >
      <h1 className="text-white text-center text-[36px] md:text-[48px] font-[700] mb-12">
        Projects
      </h1>
      <h2 className="ss:w-[625px] text-center mx-auto text-[18px] font-[500] text-white">
        During my free time, I take pleasure in engaging in experimentation and
        constructing projects. You can explore some of these endeavors on my
        GitHub page, where you'll also discover various other miscellaneous
        creations I've been involved in.
      </h2>
      <RevealDivX >
        <section id="rendered-projects"  className="w-full h-full grid grid-cols-1 pt-20 ss:grid-cols-3 gap-6 md:gap-10 mb-8">
          <ProjectItems startIndex={startIndex} itemsPerPage={itemsPerPage} />
        </section>
        <div className="w-full flex gap-4 items-center justify-center">
          {startIndex > 0 && (
            <button
              className="font-[500] py-2 w-auto px-6 text-[16px] rounded-[4px] bg-blue-500 text-white hover:bg-white hover:text-[#23252C]"
              onClick={() => {
                prevBtn();
                scrollToSection("rendered-projects");
              }}
            >
              Prev
            </button>
          )}
          {startIndex < 4 && (
            <button
              className="font-[500] py-2 w-auto px-6 text-[16px] rounded-[4px] bg-blue-500 text-white hover:bg-white hover:text-[#23252C]"
              onClick={() => {
                nextBtn();
                scrollToSection("rendered-projects");
              }}
            >
              Next
            </button>
          )}
        </div>

      </RevealDivX>
    </section>
  );
};

export default Projects;
