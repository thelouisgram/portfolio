/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const Home = () => {
  const Span = ({ children }) => {
    return <span className="text-blue-500">{children}</span>;
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const transition = {
    duration: 1,
    ease: "easeInOut",
  };

  return (
    <motion.section
      id="home"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={contentVariants}
      transition={transition}
      className="h-auto md:h-[625px] flex flex-col md:flex-row md:justify-between md:items-center justify-center 
      items-center pt-40 ss:pt-40 gap-6 md-gap-0"
    >
      <div className="flex flex-col justify-center items-center md:items-start text-white md:w-[1/2] text-center md:text-left">
        <motion.h1
          variants={contentVariants}
          className="text-[24px] xs:text-[28px] ss:text-[48px] text-blue-500 font-[600] ss:leading-[48px]"
        >
          Hello, I'm
        </motion.h1>
        <motion.h2
          variants={contentVariants}
          className="text-[24px] xs:text-[28px] ss:text-[48px] text-white font-[600]"
        >
          Adeyeye Adesanoye
        </motion.h2>
        <motion.h1
          variants={contentVariants}
          className="text-[24px] xs:text-[28px] ss:text-[48px] text-blue-500 font-[600] ss:leading-[48px]"
        >
          FRONTEND ENGINEER
        </motion.h1>
        <motion.p
          variants={contentVariants}
          className="w-full ss:w-[575px] md:w-[475px] text-[13px] xs:text-[16px] mt-[32px]"
        >
          I'm a <Span>frontend developer</Span> with a proven track record of
          crafting visually captivating and{" "}
          <Span>user-centric web interfaces</Span>. I'm driven to seek
          opportunities that push my skills to the limit while delivering
          exceptional value to website visitors. I'm enthusiastic about joining
          a team where I can leverage my expertise and make meaningful
          contributions to a company's achievements.
        </motion.p>
      </div>
      <motion.div
        variants={imageVariants}
        transition={transition}
        className="w-auto h-[250px] md:w-[1/2] p-4 md:h-[435px] flex justify-end items-center relative"
      >
        <img
          src="/assets/rocket.png"
          alt="rocket"
          className="absolute right-0 top-0 tilt w-[40px] h-auto md:w-auto"
        />
        <img
          src="/assets/code.png"
          alt="code"
          className="absolute left-10  infinite-up-and-down w-[40px] h-auto ss:w-auto"
        />
        <img
          src="/assets/hero-image.svg"
          alt="software engineer"
          className="w-full h-full"
        />
      </motion.div>
    </motion.section>
  );
};

export default Home;
