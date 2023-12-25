import { FaGithub } from 'react-icons/fa';
const Projects = () => {
  return (
    <div id="projects" className=" mt-32 ">
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
                explore and engage with posts. To participate actively, users
                can register using either their email and password or their
                Gmail ID. Upon successful registration, users start as bronze
                members, allowing them to write up to 5 posts and access a user
                panel for post and comment management. Bronze members also have
                the ability to review, delete, and provide feedback on comments.
                For those wanting to extend their posting capabilities beyond 5,
                a gold membership can be purchased. Our platform ensures a
                user-friendly experience with distinct roles for both admins and
                users, offering specialized functionalities to enhance the forum
                engagement.
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
                  Welcome to our premier online car dealership! Our home page
                  boasts a user-friendly navbar, featuring logos of top car
                  brands. Clicking on a brand card takes you to a dedicated page
                  with a slider showcasing the hottest cars. To access detailed
                  car information, register or log in via Gmail or any email ID.
                  With a responsive design, your seamless experience extends
                  from desktop to mobile, making car exploration and shopping a
                  breeze!
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
                  assignments, create, and manage their own on the Assignment
                  page. Registration options include Gmail or email/password,
                  granting access to a personal assignment dashboard. Students
                  can view assignment details, submit Google Drive-hosted PDFs,
                  and receive peer evaluations. Mobile and tablet responsiveness
                  enhances accessibility, providing a seamless experience for
                  users.
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
  );
};
export default Projects;
