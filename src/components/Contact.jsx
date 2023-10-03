const Contact = () => {
  const sendEmail = () => {
    const recipient = "hadesanoye01@gmail.com";

    const mailtoLink = `mailto:${recipient}`;

    window.location.href = mailtoLink;
  };
  return (
    <section
      id="contact"
      className="w-full h-auto bg-[#23252C] pb-24 pt-[128px] text-white relative"
    >
      <h1 className="text-white text-center text-[28px] ss:text-[48px] font-[700] mb-8 ms:mb-12">
        Want to work with me?
      </h1>
      <div className="w-full flex flex-col md:flex-row-reverse items-center justify-center">
        <div className="w-full md:w-[1/2] flex items-center justify-center px-8 mb-12 md:mb-0 robot">
          <img src="/assets/robot.png" alt="" />
        </div>
        <div className="w-full md:w-[1/2] items-center justify-center">
          <h2 className="text-[20px] ss:text-[24px] md:text-[28px] font-[600] text-center mb-12 text-blue-500">
            Let’s Connect, I am open to remote and onsite full-time, part-time,
            and contract frontend web development jobs.
          </h2>

          <div className="w-full items-center flex flex-col ss:flex-row gap-6 justify-center ">
            <div
              onClick={sendEmail}
              className="rounded-[3px] w-[160px] flex gap-3 items-center justify-center hover:bg-[#97C1CA]  cursor-pointer  bg-white text-gray-800 text-[18px] font-[600] py-2"
            >
              <img src="/assets/social/gmail.svg" alt="gmail" />
              Email
            </div>
            <a
              href="https://twitter.com/thelouisgram/"
              className="rounded-[3px] bg-white w-[160px] gap-3 text-gray-800 flex justify-center  hover:bg-[#97C1CA] cursor-pointer  text-[18px] font-[600] py-2"
            >
              <img src="/assets/social/twitter.svg" alt="twitter" />
              Twitter
            </a>
            <a
              href="https://github.com/thelouisgram"
              className="rounded-[3px]  w-[160px] gap-3 cursor-pointer flex justify-center hover:transform  hover:bg-[#97C1CA] bg-white text-gray-800 text-[18px] font-[600] py-2"
            >
              <img src="/assets/social/github.svg" alt="github" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
