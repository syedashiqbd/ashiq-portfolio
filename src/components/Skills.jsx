const Skills = () => {
  return (
    <div id="skills" className=" mt-32 ">
      <div className="text-center mb-20">
        <p className="text-[#9f9f9f]">I regular work with these</p>
        <h1 className="text-6xl font-bold my-5">Technical Skills</h1>
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
  );
};
export default Skills;
