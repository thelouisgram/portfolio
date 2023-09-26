const Skills = () => {
  const tech = [
    { image: "/public/assets/skills/react.svg", name: "React" },
    { image: "/public/assets/skills/tailwindcss.svg", name: "TailwindCss" },
    { image: "/public/assets/skills/git.svg", name: "Github" },
    { image: "/public/assets/skills/html.svg", name: "Html" },
    { image: "/public/assets/skills/typescript.svg", name: "TypeScript" },
    { image: "/public/assets/skills/javascript.svg", name: "JavaScript" },
    { image: "/public/assets/skills/css.svg", name: "Css" },
    { image: "/public/assets/skills/nodejs.svg", name: "Nodejs" },
  ];
  return (
    <section className="w-full h-auto bg-[#1A1B21] py-10 text-white">
      <h1 className="text-white text-center text-[48px] font-[700] mb-12">
        Skills and Technologies
      </h1>
          <h2 className="text-[28px] font-[600] mb-3">
              I primarily specialize in Frontend Technologies.
      </h2>
      <h2 className="w-[525px] text-left text-[18px] font-[500] mb-10">
        
         I've gained experience with a range of tools and technologies.
        These have been instrumental in various projects, including personal,
        professional, and open-source endeavors.
      </h2>
      <div className="w-full h-full grid grid-cols-4 gap-10 ">
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
