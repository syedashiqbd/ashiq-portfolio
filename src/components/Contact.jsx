import { FaBullseye, FaPaperPlane } from 'react-icons/fa';
import { IoMdCall, IoMdMap } from 'react-icons/io';

const Contact = () => {
  return (
    <div id="contact" className=" mt-32">
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
              <p className="text-[#9f9f9f]">Thakurpara, Cumilla, Bangladesh</p>
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
  );
};
export default Contact;
