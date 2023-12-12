import Navbar from '../components/Navbar';
import resume from '../../public/resumeAshiq.pdf';

const Home = () => {
  return (
    <div className="lg:max-w-[1440px]  mx-auto min-h-screen">
      <Navbar></Navbar>
      <div className="flex w-11/12  mx-auto mt-10">
        <div className="flex-1 my-auto ml-32">
          <p className="text-4xl">This is</p>
          <h1 className="font-extrabold text-7xl my-5">
            Syed <span className="text-[#009e66]">Ashiq</span>
          </h1>
          <p className="text-4xl ">A Frontend Developer</p>
          <a href={resume} download={resume}>
            <button className="btn mt-10 bg-[#009e66] text-white border-none hover:bg-[#009e679d] rounded-full">
              Resume Download
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
    </div>
  );
};
export default Home;
