const Banner = () => {
  return (
    <div className="flex mt-10">
      <div className="flex-1 my-auto ">
        <p className="text-4xl">Hello, this is....</p>
        <h1 className="font-extrabold text-7xl my-5">
          Syed <span className="text-[#009e66]">Ashiq</span>
        </h1>
        <p className="text-4xl ">A Frontend Developer</p>
        <p className="mt-5 text-[#9f9f9f] text-justify">
          I am eager to contribute my skills in MERN to a dynamic team.
          Dedicated to enhancing company products or projects, I am committed to
          delivering my best work and constantly improving. Excited about the
          opportunity to learn new technologies, I am ready to bring enthusiasm
          and a strong work ethic to contribute to the success of the company.
        </p>
        <a href="resumeAshiq.pdf" download="resumeAshiq.pdf">
          <button className="btn mt-10 bg-[#009e66] text-white border-none hover:bg-[#009e679d] rounded-full text-base">
            Download Resume
          </button>
        </a>
      </div>
      <div className="flex-1 textShadow">
        <img
          src="https://i.ibb.co/YNvfY8M/Untitled-design-2.png"
          alt="image"
          className="w-full  transition-all ease-in transform grayscale hover:grayscale-0 hover:opacity-100 hover:scale-105 opacity-40 duration-500 "
        />
      </div>
    </div>
  );
};
export default Banner;
