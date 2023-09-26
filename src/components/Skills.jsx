const Skills = () => {
  const tech = [
    { image: "/assets/skills/react.svg", name: "React" },
    { image: "/assets/skills/tailwindcss.svg", name: "TailwindCss" },
    { image: "/assets/skills/git.svg", name: "Github" },
    { image: "/assets/skills/html.svg", name: "Html" },
    { image: "/assets/skills/typescript.svg", name: "TypeScript" },
    { image: "/assets/skills/javascript.svg", name: "JavaScript" },
    { image: "/assets/skills/css.svg", name: "Css" },
    { image: "/assets/skills/nodejs.svg", name: "Nodejs" },
  ];
  return (
    <section id="skills" className="w-full h-auto bg-[#23252C] pb-16 md:pb-24 pt-[80px] text-white">
      <h1 className="text-white text-center text-[28px] ss:text-[48px] font-[700] mb-8 ss:mb-12">
        Skills and Technologies
      </h1>
      <h2 className="text-[20px] ss:text-[28px] font-[600] mb-3 text-blue-500 text-center md:text-left">
        I primarily specialize in Frontend Technologies.
      </h2>
      <h2 className="ss:w-[525px] md:text-left text-[18px] font-[500] mb-10 text-center mx-auto md:mx-0">
        I've gained experience with a range of tools and technologies.
        These have been instrumental in various projects, including personal,
        professional, and open-source endeavors.
      </h2>
      <div className="w-full h-full grid grid-cols-2 ss:grid-cols-4 gap-4 ss:gap-6 md:gap-10 ">
        {tech.map((item) => {
          return (
            <div
              key={item.name}
              className="bg-[#161619] h-full w-full flex items-center justify-center aspect-auto py-5 flex-col gap-2 font-Inter relative"
            >
              <img src={item.image} alt={item.name} />
              <h3 className="font-[500] text-white">{item.name}</h3>
              <div className="absolute top-0 left-0 bg-blue-500 transform hover:rotate-20 h-full w-full z-[-2]" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
