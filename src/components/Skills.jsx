/* eslint-disable react/prop-types */
import RevealDivX from "./animation/RevealDivX";

/* eslint-disable react/no-unescaped-entities */
const Skills = ({}) => {
  const tech = [
    { image: "/assets/skills/react.svg", name: "React" },
    { image: "/assets/skills/typescript.svg", name: "TypeScript" },
    { image: "/assets/skills/tailwindcss.svg", name: "TailwindCss" },
    { image: "/assets/skills/nextjs.svg", name: "NextJs" },
    { image: "/assets/skills/redux.svg", name: "Redux" },
    { image: "/assets/skills/git.svg", name: "Git" },
    { image: "/assets/skills/html.svg", name: "Html" },
    { image: "/assets/skills/javascript.svg", name: "JavaScript" },
    { image: "/assets/skills/css.svg", name: "Css" },
    { image: "/assets/skills/nodejs.svg", name: "Nodejs" },
  ];

  return (
    <section
      id="skills"
      className="w-full h-auto bg-[#23252C] pt-[128px] text-white"
    >
      <h1 className="text-white text-center text-[36px] ss:text-[48px] font-[700] mb-8 ss:mb-12">
        Skills and Technologies
      </h1>
      <h2 className="text-[20px] ss:text-[28px] font-[600] mb-3 text-blue-500 text-center">
        I primarily specialize in Frontend Technologies.
      </h2>
      <h2 className="ss:w-[525px] text-[13px] xs:text-[16px] font-[500] mb-10 text-center mx-auto ">
        I've gained experience with a range of tools and technologies. These
        have been instrumental in various projects, including personal,
        professional, and open-source endeavors.
      </h2>
      <RevealDivX>
        <div className="w-full h-full grid grid-cols-2 ss:grid-cols-4 gap-2">
          {tech.map((item) => {
            return (
              <div
                key={item.name}
                className="h-full w-full flex items-center justify-center aspect-auto py-8 border border-gray-500 flex-col gap-2 font-Inter relative"
              >
                <img src={item.image} alt={item.name} className="w-[32px] h-auto"/>
                <h3 className="font-[500] text-white">{item.name}</h3>
              </div>
            );
          })}
        </div>
      </RevealDivX>
    </section>
  );
};

export default Skills;
