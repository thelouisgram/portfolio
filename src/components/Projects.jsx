import { projects } from "../utils";

const Projects = () => {
  return (
    <section id="projects" className="w-full h-auto bg-[#23252C] pb-20 md:pb-24 pt-[80px]">
      <h1 className="text-white text-center text-[48px] font-[700] mb-12">
        Projects
      </h1>
      <h2 className="ss:w-[625px] text-center mx-auto text-[18px] font-[500] mb-16 text-white">
        During my free time, I take pleasure in engaging in experimentation and
        constructing projects. You can explore some of these endeavors on my GitHub page,
        where you'll also discover various other miscellaneous creations I've
        been involved in.
      </h2>
      <div className="w-full h-full grid grid-cols-1 ss:grid-cols-3 gap-6 ss:gap-10 ">
        {projects.map((item) => {
          return (
            <div
              key={item.name}
              className="bg-[#161619] text-white h-full w-full flex aspect-auto pb-5 flex-col gap-3 font-Space relative"
            >
              <img loading="lazy" src={item.image} alt={item.name} />
              <div className="px-2 flex flex-col gap-3">
                <h3 className="font-[600] text-[18px] text-white">
                  {item.name}
                </h3>
                <p className="text-gray-400 text-[16px]">{item.description}</p>
                <div className="flex items-center gap-5">
                  <a href={item.Link} className="flex gap-2 items-center">
                    <img
                      src="/assets/projects/eye.png"
                      className="h-[20px]"
                    />
                    Site
                  </a>
                  <a href={item.Repository} className="flex gap-2 items-center">
                    <img
                      src="/assets/projects/github.png"
                      className="h-[20px]"
                    />
                    Repo
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
