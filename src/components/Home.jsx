/* eslint-disable react/prop-types */
const Home = () => {

    const Span = ({ children }) => {
        return <span className="text-blue-500">{children}</span>
    }

    return (
        <section className="h-[575px] flex justify-between items-center">
            <div className="flex flex-col h-full justify-center text-white w-[1/2]">
                <h1 className="text-[48px] text-blue-500 font-[600] leading-[24px]">Hello, I'm</h1>
                <h2 className="text-[48px] text-white font-[600]">Adeyeye Adesanoye</h2>
                <p className="w-[475px] text-[16px] mt-[32px]">
                    I'm a <Span>frontend developer</Span> with a proven track record of crafting
                    visually captivating and <Span>user-centric web interfaces</Span>. I'm driven to
                    seek opportunities that push my skills to the limit while delivering
                    exceptional value to website visitors. I'm enthusiastic about joining
                    a team where I can leverage my expertise and make meaningful
                    contributions to a company's achievements.
                </p>
            </div>
            <div>
                <div className="w-[1/2] p-4 h-[435px] flex justify-end items-center">
                    <img src="/public/assets/hero-image.svg" alt="software engineer" className="w-full h-full" />
                </div>
            </div>
        </section>
    );
};

export default Home;
