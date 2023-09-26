const Contact = () => {
  const sendEmail = () => {
    const recipient = "hadesanoye01@gmail.com";

    const mailtoLink = `mailto:${recipient}`;

    window.location.href = mailtoLink;
  };
  return (
    <section
      id="contact"
      className="w-full h-auto bg-[#1A1B21] pb-24 pt-[80px] text-white"
    >
      <h1 className="text-white text-center text-[28px] ss:text-[48px] font-[700] mb-8 ms:mb-12">
        Want to work with me?
      </h1>
      <h2 className="text-[20px] ss:text-[24px] md:text-[28px] font-[600] text-center mb-12 text-blue-500">
        Let’s Connect, I am open to remote and onsite full-time, part-time, and
        contract frontend web development jobs.
      </h2>

      <div className="w-auto flex flex-col xs:flex-row gap-6 justify-center ">
        <div
          onClick={sendEmail}
          className="rounded-[3px] hover:bg-blue-500 hover:text-white cursor-pointer  bg-white text-gray-800 text-[18px] font-[600] px-4 py-2"
        >
          Email
        </div>
        <a
          href="https://twitter.com/thelouisgram/"
          className="rounded-[3px] bg-white text-gray-800  hover:bg-blue-500  cursor-pointer hover:text-white text-[18px] font-[600] px-4 py-2"
        >
          Twitter
        </a>
        <a
          href="https://github.com/thelouisgram"
          className="rounded-[3px] hover:bg-blue-500 cursor-pointer  hover:text-white bg-white text-gray-800 text-[18px] font-[600] px-4 py-2"
        >
          GitHub
        </a>
      </div>
    </section>
  );
};

export default Contact;
