import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    let cursor_dot = document.querySelector('.cursor-dot');
    let cursor_circle = document.querySelector('.cursor-circle');

    document.addEventListener('mousemove', function (e) {
      cursor_dot.style.cssText = cursor_circle.style.cssText =
        'left: ' + e.clientX + 'px; top:' + e.clientY + 'px;';
    });

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('mousemove', () => {});
    };
  }, []);

  return (
    <div>
      <div className="cursor-dot"></div>
      <div className="cursor-circle"></div>

      <div className="lg:max-w-[1280px]  mx-auto  ">
        <Navbar></Navbar>

        {/* Banner Section */}
        <Banner></Banner>

        <main>
          {/* Skill Section */}
          <Skills></Skills>

          {/* Project section */}
          <Projects></Projects>

          {/* Contact section */}
          <Contact></Contact>
        </main>
      </div>
      <footer className=" p-8  text-center mt-20 bg-[#161616] ">
        <div className="my-5  ">
          <div className="text-2xl flex gap-4 justify-center">
            <a href="https://www.linkedin.com/in/syed-ashiq-%E2%9C%A8-7251372a0/">
              <FaLinkedin></FaLinkedin>
            </a>
            <a href="https://github.com/syedashiqbd/">
              <FaGithub></FaGithub>
            </a>
            <a href="https://www.facebook.com/IamSyedAshiq/">
              <FaFacebook></FaFacebook>
            </a>
            <a href="https://wa.me/8801784968090">
              <FaWhatsapp></FaWhatsapp>
            </a>
          </div>
        </div>
        <p>Copyright © 2024 - All right reserved by Syed Ashiq</p>
      </footer>
    </div>
  );
};
export default Home;
