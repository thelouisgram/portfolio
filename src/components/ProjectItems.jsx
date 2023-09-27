/* eslint-disable react/prop-types */
import { projects } from "../utils";

const ProjectItems = ({ startIndex, itemsPerPage }) => {
  const items = projects.slice(startIndex, startIndex + itemsPerPage);
  return (
    <>
      {items.map((item) => {
        return (
          <div
            key={item.name}
            className="bg-[#161619] transition-all text-white h-auto w-full flex aspect-auto pb-5 flex-col gap-3 font-Space relative"
          >
            <div className="aspect-[244/116.28] w-full h-auto">
              <img loading="lazy" src={item.image} alt={item.name} />
            </div>
            <div className="px-3 flex flex-col gap-3">
              <h3 className="font-[600] text-[18px] text-white">{item.name}</h3>
              <p className="text-gray-400 text-[16px]">{item.description}</p>
              <div className="flex items-center gap-5">
                <a href={item.Link} className="flex gap-2 items-center">
                  <img src="/assets/projects/eye.png" className="h-[20px]" />
                  Site
                </a>
                <a href={item.Repository} className="flex gap-2 items-center">
                  <img src="/assets/projects/github.png" className="h-[20px]" />
                  Repo
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProjectItems;
