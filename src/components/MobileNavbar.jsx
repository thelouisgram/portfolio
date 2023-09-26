/* eslint-disable react/prop-types */
import { scrollToSection } from "../utils";

const sections = [
    { id: "home", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
];

const MobileNavbar = ({ setNav }) => {
    const handleClick = (sectionId) => {
        scrollToSection(sectionId);
        setNav(false);
    };

    return (
        <div className="px-3 xs:px-5 w-full h-auto shadow-sm text-white top-[80px] fixed z-[9] ">
            <div className="w-full bg-[#161619] p-4">
                <div className="gap-6 items-center flex flex-col">
                    {sections.map((section) => (
                        <h2
                            key={section.id}
                            onClick={() => handleClick(section.id)}
                            className="cursor-pointer hover:text-blue-500"
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
