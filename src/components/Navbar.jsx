/* eslint-disable react/prop-types */
import { scrollToSection } from "../utils";

const Navbar = ({ setNav, nav }) => {
    return (
        <section className="h-[80px] fixed top-0 px-4 md:px-0 w-full md:w-[1100px] shadow-2xl md:shadow-none md:mx-auto z-10 bg-[#23252C] flex items-center justify-between text-white font-[700]">
            <div className="w-auto h-auto flex items-center bg-[#23252C]">
                <h1 className="font-[600] text-[24px] font-Poppins">thelouisgram</h1>
            </div>
            <div className="hidden gap-6 items-center md:flex">
                <h2
                    className="cursor-pointer hover:text-blue-500 "
                    onClick={() => scrollToSection("home")}
                >
                    Home
                </h2>
                <h2
                    className="cursor-pointer hover:text-blue-500 "
                    onClick={() => scrollToSection("skills")}
                >
                    Skills
                </h2>
                <h2
                    className="cursor-pointer hover:text-blue-500 "
                    onClick={() => scrollToSection("projects")}
                >
                    Projects
                </h2>
                <h2
                    className="cursor-pointer hover:text-blue-500 "
                    onClick={() => scrollToSection("contact")}
                >
                    Contact
                </h2>
            </div>
            <div
                className="flex md:hidden h-[40px] w-auto items-center transform "
                onClick={() => setNav((prev) => !prev)}
            >
                {nav ? (
                    <img src="/assets/cancel.svg" alt="cancel" className="w-full h-full transition" />
                ) : (
                        <img src="/assets/menu.svg" alt="menu" className="w-full h-full transition" />
                )}
            </div>
        </section>
    );
};

export default Navbar;
