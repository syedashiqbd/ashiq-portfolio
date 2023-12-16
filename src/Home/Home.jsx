import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div className="container m-auto ">
      <Navbar></Navbar>
      {/* Banner Section */}
      <div className="flex w-11/12  mx-auto mt-10">
        <div className="flex-1 my-auto ">
          <p className="text-4xl">Hello, This is....</p>
          <h1 className="font-extrabold text-7xl my-5">
            Syed <span className="text-[#009e66]">Ashiq</span>
          </h1>
          <p className="text-4xl ">A Frontend Developer</p>
          <p className="mt-5 text-[#9f9f9f] text-justify">
            I am eager to contribute my skills in MERN to a dynamic team.
            Dedicated to enhancing company products or projects, I am committed
            to delivering my best work and constantly improving. Excited about
            the opportunity to learn new technologies, I am ready to bring
            enthusiasm and a strong work ethic to contribute to the success of
            the company.
          </p>
          <a href="resumeAshiq.pdf" download="resumeAshiq.pdf">
            <button className="btn mt-10 bg-[#009e66] text-white border-none hover:bg-[#009e679d] rounded-full text-base">
              Download Resume
            </button>
          </a>
        </div>
        <div className="flex-1">
          <img
            src="https://i.ibb.co/YNvfY8M/Untitled-design-2.png"
            alt="image"
            className="w-full object-cover grayscale opacity-40"
          />
        </div>
      </div>

      <main>
        {/* Skill Section */}
        <div className="w-11/12 m-auto mt-32 ">
          <div className="text-center mb-20">
            <p className="text-[#9f9f9f]">I'm Regular work with</p>
            <h1 className="text-6xl font-bold my-5">My Technical Skills</h1>
            <div className="bg-[#009e66] h-1.5 w-40 mx-auto "></div>
          </div>
          <div className="lg:flex lg:gap-20 ">
            <div className="flex-1">
              <div>
                <div className="text-[#CECECE] text-base flex justify-between mb-1">
                  <span className="mb-2">HTML/CSS</span>
                  <span className="mr-[5%]">95%</span>
                </div>
                <div className="bg-[#2f2f2f]">
                  <div className="progress h-2 rounded-none bg-[#009e66] w-[95%]"></div>
                </div>
              </div>
              <div>
                <div className="text-[#CECECE] text-base flex justify-between mt-10">
                  <span className="mb-2">Web Design</span>
                  <span className="mr-[20%]">80%</span>
                </div>
                <div className="bg-[#2f2f2f]">
                  <div className="progress h-2 rounded-none bg-[#009e66] w-[80%]"></div>
                </div>
              </div>
              <div>
                <div className="text-[#CECECE] text-base flex justify-between mt-10">
                  <span className="mb-2">Tailwind | DaisyUI</span>
                  <span className="mr-[15%]">85%</span>
                </div>
                <div className="bg-[#2f2f2f]">
                  <div className="progress h-2 rounded-none bg-[#009e66] w-[85%]"></div>
                </div>
              </div>
              <div>
                <div className="text-[#CECECE] text-base flex justify-between mt-10">
                  <span className="mb-2">Javascript</span>
                  <span className="mr-[35%]">65%</span>
                </div>
                <div className="bg-[#2f2f2f]">
                  <div className="progress h-2 rounded-none bg-[#009e66] w-[65%]"></div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div>
                <div className="text-[#CECECE] text-base flex justify-between lg:mt-0 mt-10">
                  <span className="mb-2">React</span>
                  <span className="mr-[20%]">80%</span>
                </div>
                <div className="bg-[#2f2f2f]">
                  <div className="progress h-2 rounded-none bg-[#009e66] w-[80%]"></div>
                </div>
              </div>
              <div>
                <div className="text-[#CECECE] text-base flex justify-between mt-10">
                  <span className="mb-2">Express.js</span>
                  <span className="mr-[40%]">60%</span>
                </div>
                <div className="bg-[#2f2f2f]">
                  <div className="progress h-2 rounded-none bg-[#009e66] w-[60%]"></div>
                </div>
              </div>
              <div>
                <div className="text-[#CECECE] text-base flex justify-between mt-10">
                  <span className="mb-2">Node.js</span>
                  <span className="mr-[35%]">65%</span>
                </div>
                <div className="bg-[#2f2f2f]">
                  <div className="progress h-2 rounded-none bg-[#009e66] w-[65%]"></div>
                </div>
              </div>
              <div>
                <div className="text-[#CECECE] text-base flex justify-between mt-10">
                  <span className="mb-2">MongoDB</span>
                  <span className="mr-[25%]">75%</span>
                </div>
                <div className="bg-[#2f2f2f]">
                  <div className="progress h-2 rounded-none bg-[#009e66] w-[75%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default Home;
