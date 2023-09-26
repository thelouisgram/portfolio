/* eslint-disable react/prop-types */
const Home = () => {
  const Span = ({ children }) => {
    return <span className="text-blue-500">{children}</span>;
  };

  return (
    <section
      id="home"
      className="h-auto md:h-[625px] flex flex-col md:flex-row md:justify-between md:items-center justify-center items-center pt-40 pb-16"
    >
      <div className="flex flex-col justify-center items-center md:items-start text-white md:w-[1/2] text-center md:text-left">
        <h1 className="text-[36px] ss:text-[48px] text-blue-500 font-[600] ss:leading-[24px]">
          Hello, I'm
        </h1>
        <h2 className="text-[36px] md:text-[48px] text-white font-[600]">
          Adeyeye Adesanoye
        </h2>
        <p className="w-full ss:w-[475px] text-[16px] mt-[32px]">
          I'm a <Span>frontend developer</Span> with a proven track record of
          crafting visually captivating and{" "}
          <Span>user-centric web interfaces</Span>. I'm driven to seek
          opportunities that push my skills to the limit while delivering
          exceptional value to website visitors. I'm enthusiastic about joining
          a team where I can leverage my expertise and make meaningful
          contributions to a company's achievements.
        </p>
      </div>
      <div>
        <div className="w-auto h-[250px] md:w-[1/2] p-4 md:h-[435px] flex justify-end items-center">
          <img
            src="/assets/hero-image.svg"
            alt="software engineer"
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
