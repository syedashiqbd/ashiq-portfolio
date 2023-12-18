import Navbar from '../components/Navbar';
import { FaBullseye, FaGithub, FaPaperPlane } from 'react-icons/fa';
import { IoMdCall, IoMdMap } from 'react-icons/io';

const Home = () => {
  return (
    <div className="container m-auto ">
      <Navbar></Navbar>
      {/* Banner Section */}
      <div className="flex lg:w-10/12 w-11/12  mx-auto mt-10">
        <div className="flex-1 my-auto ">
          <p className="text-4xl">Hello, this is....</p>
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
        <div className="flex-1 textShadow">
          <img
            src="https://i.ibb.co/YNvfY8M/Untitled-design-2.png"
            alt="image"
            className="w-full  transition-all ease-in transform grayscale hover:grayscale-0 hover:opacity-100 hover:scale-105 opacity-40 duration-500 "
          />
        </div>
      </div>

      <main>
        {/* Skill Section */}
        <div id="skills" className="lg:w-10/12 w-11/12 m-auto mt-32 ">
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

        {/* Project section */}
        <div id="projects" className="lg:w-10/12 w-11/12 m-auto mt-32 ">
          <div className="text-center pb-20">
            <p className="text-[#9f9f9f]">Showcasing some of my best work</p>
            <h1 className="text-6xl font-bold my-5">Projects</h1>
            <div className="bg-[#009e66] h-1.5 w-40 mx-auto "></div>
          </div>
          {/* Project card container */}
          <div>
            <div className="lg:flex gap-6 flex-wrap">
              {/* 1st project */}
              <div className="card lg:card-side  shadow-xl border border-[#009e66] border-r-[12px] border-b-[12px]">
                <figure className="w-1/2">
                  <img
                    src="https://i.ibb.co/kGQmVHd/forum-flare-2.png"
                    className="hover:scale-105 duration-500 h-full object-cover bg-base-200"
                  />
                </figure>
                <div className="w-1/2 card-body">
                  <h2 className="card-title">Forum Posting Site</h2>
                  <p>
                    Welcome to our forum posting site, where visitors can freely
                    explore and engage with posts. To participate actively,
                    users can register using either their email and password or
                    their Gmail ID. Upon successful registration, users start as
                    bronze members, allowing them to write up to 5 posts and
                    access a user panel for post and comment management. Bronze
                    members also have the ability to review, delete, and provide
                    feedback on comments. For those wanting to extend their
                    posting capabilities beyond 5, a gold membership can be
                    purchased. Our platform ensures a user-friendly experience
                    with distinct roles for both admins and users, offering
                    specialized functionalities to enhance the forum engagement.
                  </p>
                  <div className="card-actions mt-10 mx-20 flex justify-between items-center">
                    <a href="https://forum-flare.web.app" target="blank">
                      <button className="btn bg-[#009e66] border-none text-white hover:bg-[#009e679d]">
                        Live Site
                      </button>
                    </a>
                    <a
                      href="https://github.com/syedashiqbd?tab=repositories&q=forum-flare&type=&language=&sort="
                      target="blank"
                    >
                      <FaGithub className="text-4xl text-[#009e66]"></FaGithub>
                    </a>
                  </div>
                </div>
              </div>

              <div className="lg:flex gap-8">
                {/* 2nd project */}
                <div className=" card   shadow-xl border border-[#009e66] border-r-[12px] border-b-[12px]">
                  <figure className="p-5 w-full h-[350px] overflow-hidden ">
                    <img
                      src="https://i.ibb.co/2SYD12L/prestige-carhub.png"
                      className="rounded-xl bg-base-200 h-full  hover:scale-105 duration-500 object-cover "
                    />
                  </figure>
                  <div className="card-body p-5 ">
                    <h2 className="text-2xl font-semibold hover:underline decoration-[#009e66]">
                      Brand Car Selling Site
                    </h2>
                    <p>
                      Welcome to our premier online car dealership! Our home
                      page boasts a user-friendly navbar, featuring logos of top
                      car brands. Clicking on a brand card takes you to a
                      dedicated page with a slider showcasing the hottest cars.
                      To access detailed car information, register or log in via
                      Gmail or any email ID. With a responsive design, your
                      seamless experience extends from desktop to mobile, making
                      car exploration and shopping a breeze!
                    </p>
                    <div className=" mt-10 mx-20 flex justify-between items-center">
                      <a
                        href="https://prestige-carhub-ashiq.web.app/"
                        target="blank"
                      >
                        <button className="btn bg-[#009e66] border-none text-white hover:bg-[#009e679d]">
                          Live Site
                        </button>
                      </a>
                      <a
                        href="https://github.com/syedashiqbd?tab=repositories&q=brand-car-shop&type=&language=&sort="
                        target="blank"
                      >
                        <FaGithub className="text-4xl text-[#009e66]"></FaGithub>
                      </a>
                    </div>
                  </div>
                </div>

                {/* 3rd project */}
                <div className=" card   shadow-xl border border-[#009e66] border-r-[12px] border-b-[12px]">
                  <figure className="p-5 w-full h-[350px] overflow-hidden ">
                    <img
                      src="https://i.ibb.co/q0SsyG6/all-devices-black.png"
                      className="rounded-xl bg-base-200 h-full  hover:scale-105 duration-500 object-cover "
                    />
                  </figure>
                  <div className="card-body p-5 ">
                    <h2 className="text-2xl font-semibold hover:underline decoration-[#009e66]">
                      Group Study Site
                    </h2>
                    <p>
                      Our Group Study website features a user-friendly interface
                      with a navbar for easy navigation. Students can explore
                      assignments, create, and manage their own on the
                      Assignment page. Registration options include Gmail or
                      email/password, granting access to a personal assignment
                      dashboard. Students can view assignment details, submit
                      Google Drive-hosted PDFs, and receive peer evaluations.
                      Mobile and tablet responsiveness enhances accessibility,
                      providing a seamless experience for users.
                    </p>
                    <div className=" mt-10 mx-20 flex justify-between items-center">
                      <a
                        href="https://assignment-champs-ashiq.web.app"
                        target="blank"
                      >
                        <button className="btn bg-[#009e66] border-none text-white hover:bg-[#009e679d]">
                          Live Site
                        </button>
                      </a>
                      <a
                        href="https://github.com/syedashiqbd?tab=repositories&q=assignment-champs&type=&language=&sort="
                        target="blank"
                      >
                        <FaGithub className="text-4xl text-[#009e66]"></FaGithub>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact section */}
        <div id="contact" className="lg:w-10/12 w-11/12 m-auto mt-32">
          <div className="text-center mb-20">
            <p className="text-[#9f9f9f]">Feel free to contact me anytime</p>
            <h1 className="text-6xl font-bold my-5">Get in Touch</h1>
            <div className="bg-[#009e66] h-1.5 w-40 mx-auto "></div>
          </div>
          <div className="flex gap-16">
            <div className="w-7/12">
              <h1 className="text-2xl mb-5">Message Me</h1>
              <input
                type="text"
                placeholder="Name"
                className="input  input-success w-full  rounded-none bg-[#161616] border-none"
              />
              <input
                type="text"
                placeholder="Email"
                className="input  input-success w-full  rounded-none bg-[#161616] border-none my-5"
              />
              <textarea
                className="w-full h-44 input  input-success rounded-none bg-[#161616] border-none pt-3 "
                placeholder="Message"
              ></textarea>

              <a href="">
                <button className="btn mt-10 bg-[#009e66] text-white border-none hover:bg-[#009e679d] rounded-full text-base">
                  Send Message
                </button>
              </a>
            </div>
            <div>
              <h1 className="text-2xl mb-5">Contact Info</h1>
              <p className="text-[#9f9f9f]">
                Always available for work, Feel free to contact me!
              </p>
              <div className="flex items-center mt-5">
                <span className="pr-5">
                  <FaBullseye className="text-4xl text-[#009e66]"></FaBullseye>
                </span>
                <div className="border-l-2 pl-5 py-5 border-[rgba(255,255,255,.15)]">
                  <p className="font-semibold">Name</p>
                  <p className="text-[#9f9f9f]">Syed Ashiq</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="pr-5">
                  <IoMdMap className="text-4xl text-[#009e66]"></IoMdMap>
                </span>
                <div className="border-l-2 pl-5 py-5 border-[rgba(255,255,255,.15)]">
                  <p className="font-semibold">Location</p>
                  <p className="text-[#9f9f9f]">
                    Thakurpara, Cumilla, Bangladesh
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="pr-5">
                  <IoMdCall className="text-4xl text-[#009e66]"></IoMdCall>
                </span>
                <div className="border-l-2 pl-5 py-5 border-[rgba(255,255,255,.15)]">
                  <p className="font-semibold">Call Me</p>
                  <p className="text-[#9f9f9f]">+88 01784 968090</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="pr-5">
                  <FaPaperPlane className="text-4xl text-[#009e66]"></FaPaperPlane>
                </span>
                <div className="border-l-2 pl-5 py-5 border-[rgba(255,255,255,.15)]">
                  <p className="font-semibold">Email Me</p>
                  <p className="text-[#9f9f9f]">imsyedashiq@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className=" p-8  text-center mt-20 bg-[#161616] ">
        <p>Copyright © 2024 - All right reserved by Syed Ashiq</p>
      </footer>
    </div>
  );
};
export default Home;
