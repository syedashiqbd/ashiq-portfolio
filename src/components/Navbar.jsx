const Navbar = () => {
  const navLinks = (
    <>
      <li className="textShadow">
        <a href="#">Home</a>
      </li>
      <li className="textShadow">
        <a href="#skills">Skills</a>
      </li>
      <li className="textShadow">
        <a href="#projects">Projects</a>
      </li>
      <li className="textShadow">
        <a href="#contact">Contact</a>
      </li>
    </>
  );
  return (
    <div className="navbar pt-5 m-0">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#161616] rounded-lg w-52  "
          >
            {navLinks}
          </ul>
        </div>
        <p className=" font-bold text-5xl">
          <span className="text-[#009e66] text-7xl italic">A</span>shiq
        </p>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg ">{navLinks}</ul>
      </div>
    </div>
  );
};
export default Navbar;
