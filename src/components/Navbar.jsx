/* eslint-disable react/prop-types */
import { scrollToSection } from "../utils";

const Navbar = ({ setNav, nav, activeSection, isScrolled }) => {
  return (
    <section className={`h-[80px] w-full fixed top-0 z-[101] bg-[#23252C] `}>
      <div className={`${isScrolled ? "shadow-xl" : ""} w-full h-full `}>
        <div
          className={`px-4 md:px-0 md:w-[1100px] h-full flex items-center justify-between text-white font-[700] md:mx-auto `}
        >
          <div className="w-auto h-auto flex items-center bg-[#23252C]">
            <h1 className="font-[600] text-[20px] font-Poppins">
              thelouisgram
            </h1>
          </div>
          <div className="hidden gap-6 items-center md:flex">
            <h2
              className={`cursor-pointer hover:text-blue-500 ${
                activeSection === "home" ? "text-blue-500" : ""
              }`}
              onClick={() => scrollToSection("home")}
            >
              Home
            </h2>
            <h2
              className={`cursor-pointer hover:text-blue-500 ${
                activeSection === "skills" ? "text-blue-500" : ""
              }`}
              onClick={() => scrollToSection("skills")}
            >
              Skills
            </h2>
            <h2
              className={`cursor-pointer hover:text-blue-500 ${
                activeSection === "projects" ? "text-blue-500" : ""
              }`}
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </h2>
            <h2
              className={`cursor-pointer hover:text-blue-500 ${
                activeSection === "contact" ? "text-blue-500" : ""
              }`}
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </h2>
          </div>
          <div
            className="flex md:hidden h-[40px] w-auto items-center transform"
            onClick={() => setNav((prev) => !prev)}
          >
            {nav ? (
              <img
                src="/assets/cancel.svg"
                alt="cancel"
                className="w-full h-full transition"
              />
            ) : (
              <img
                src="/assets/menu.svg"
                alt="menu"
                className="w-full h-full transition"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
