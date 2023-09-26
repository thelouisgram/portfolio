/* eslint-disable react/prop-types */
import { scrollToSection } from "../utils";

const sections = [
  { id: "home", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const MobileNavbar = ({ setNav, activeSection }) => {
  const handleClick = (sectionId) => {
    scrollToSection(sectionId);
    setNav(false);
  };

  return (
    <div className="px-3 xs:px-5 w-full h-auto shadow-sm text-white top-[80px] fixed z-[9] md:hidden">
      <div className="w-full bg-[#161619] p-4 shadow-2xl rounded-b-[5px]">
        <div className="gap-6 items-center flex flex-col">
          {sections.map((section) => (
            <h2
              key={section.id}
              onClick={() => handleClick(section.id)}
              className={`cursor-pointer w-full border-gray-300 flex justify-center ${
                activeSection === section.id
                  ? "hover:text-blue-500 text-blue-500"
                  : "hover:text-white"
              }`}
            >
              {section.label}
            </h2>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
