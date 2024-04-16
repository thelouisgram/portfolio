/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import { noDoseOffImg, scrollToSection } from "../utils";
import ProjectItems from "./ProjectItems";
import RevealDivX from "./animation/RevealDivX";

const Projects = () => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 3;

  const prevBtn = () => {
    setStartIndex((prev) => prev - itemsPerPage);
  };

  const nextBtn = () => {
    setStartIndex((prev) => prev + itemsPerPage);
  };
  const [color, setColor] = useState("white");

  useEffect(() => {
    const interval = setInterval(() => {
      setColor((prevColor) => (prevColor === "white" ? "blue-500" : "white"));
    }, 1000); // Change color every second

    return () => clearInterval(interval);
  }, []); // Empty dependency array to run effect only once

  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <section id="projects" className="w-full h-auto bg-[#23252C] pt-[128px]">
      <RevealDivX>
        <div className="mb-20">
          <h1 className="text-white text-center text-[36px] md:text-[48px] font-[700] mb-8">
            Real World Application
          </h1>
          <div className="w-full flex justify-center">
            <a
              href="https://nodoseoff.vercel.app"
              className={`text-${color} text-center text-[28px] md:text-[36px] font-[700] mb-6`}
            >
              NoDoseOff WebApp
            </a>
          </div>
          <div className="flex w-full justify-center flex-wrap gap-6 mb-6">
            {noDoseOffImg.map((image, index) => {
              return (
                <div key={index}>
                  <img
                    src={image.image}
                    className="md:h-[200px] w-full md:w-auto"
                  />
                </div>
              );
            })}
          </div>
          <div className="w-full flex justify-center flex-col">
            <h2 className="ss:w-[625px] text-center mx-auto text-[13px] xs:text-[16px] font-[500] text-white">
              {showFullDescription
                ? "NoDoseOff is a drug tracking, monitoring and Reminder fullstack web app. Built with Nextjs, Ts, Redux and Supabase. Has a smart dashboard with features like, Next Dose Countdown, Number of Drugs and Drug Complance level. Other Features include, Add drug, Add Allergies, Add Side Effects, Edit Drug and Dose, Download Drug History Summary and Responsive Calendar with daily Report and more."
                : "NoDoseOff is a drug tracking, monitoring and Reminder fullstack web app. Built with Nextjs, Ts, Redux and Supabase. Has a smart dashboard with features like, ..."}
            </h2>
            <button className="text-blue-500" onClick={toggleDescription}>
              {showFullDescription ? "Show Less" : "Show More"}
            </button>
          </div>
          <div className="w-full flex gap-4 justify-center my-4">
            <a
              href="https://nodoseoff.vercel.app"
              className="px-5 py-2 bg-white text-blue-500 rounded-md font-semibold"
            >
              View Landing Page
            </a>
            <a
              href="https://nodoseoff.vercel.app/dashboard"
              className="px-5 py-2 text-white bg-blue-500 rounded-md font-semibold"
            >
              View Web App
            </a>
          </div>
          <h1 className="text-white text-center text-[28px] md:text-[36px] font-[700] my-12">
            Other Projects
          </h1>
          <h2 className="ss:w-[625px] text-center mx-auto text-[13px] xs:text-[16px] font-[500] text-white">
            During my free time, I take pleasure in engaging in experimentation
            and constructing projects. You can explore some of these endeavors
            on my GitHub page, where you'll also discover various other
            miscellaneous creations I've been involved in.
          </h2>
        </div>
        <section
          id="rendered-projects"
          className="w-full h-full grid grid-cols-1 pt-20 ss:grid-cols-3 gap-6 md:gap-10 mb-8"
        >
          <ProjectItems startIndex={startIndex} itemsPerPage={itemsPerPage} />
        </section>
        <div className="w-full flex gap-4 items-center justify-center">
          {startIndex > 0 && (
            <button
              className="font-[700] py-2 w-auto px-6 flex gap-1 items-center text-[16px] rounded-[4px] bg-blue-500 text-white hover:bg-white hover:text-[#23252C]"
              onClick={() => {
                prevBtn();
                scrollToSection("rendered-projects");
              }}
            >
              <i className="fa-solid fa-angle-left"></i>
              Prev
            </button>
          )}
          {startIndex < 4 && (
            <button
              className="font-[700] py-2 w-auto flex gap-1 items-center px-6 text-[16px] rounded-[4px] bg-blue-500 text-white hover:bg-white hover:text-[#23252C]"
              onClick={() => {
                nextBtn();
                scrollToSection("rendered-projects");
              }}
            >
              Next
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          )}
        </div>
      </RevealDivX>
    </section>
  );
};

export default Projects;
