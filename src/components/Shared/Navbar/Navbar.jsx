import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className=" flex flex-wrap bg-opacity-20 bg-slate-900 w-full  fixed  z-30 lg:pl-36 ">
      <div className="container px-4 mx-auto flex flex-wrap justify-around items-center">
        <div className="w-full relative lg:w-auto lg:static lg:block lg:justify-start">
          <Link
            to="/"
            className="text-md  items-center  font-bold leading-relaxed gap-2 flex mr-10 py-3 whitespace-nowrap uppercase text-black"
          >
            {/* <img className=" rounded-full w-12 h-12" src={logo} alt="" /> */}

            <h1 className="bg-gradient-to-r animate-text from-gray-300 via-orange-300 to-gray-200 bg-clip-text text-transparent">
              {" "}
              Khana Dhana <br />
              Restaurant
            </h1>
          </Link>
          <button
            className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            {navbarOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow justify-center md:ml-6 ml-24 items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
          id="example-navbar-danger"
        >
          <ul className="flex md:items-center justify-center gap-2 flex-col lg:flex-row list-none lg:mx-auto ">
            <li className="nav-item">
              <Link
                to="/"
                className="px-2 py-2 rounded-lg hover:bg-gray-50 text-center flex items-center text-xs uppercase font-semibold leading-snug duration-300 text-white hover:text-orange-400"
              >
                <span className="ml-2 text-md">Home</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/menu"
                className="px-2 rounded-lg hover:bg-gray-50 py-2 flex items-center text-xs uppercase font-semibold leading-snug duration-300 text-white hover:text-orange-400"
              >
                <span className="ml-2 text-md flex items-center justify-center">
                  Our Menu
                </span>
              </Link>
            </li>
            <>
              <li className="nav-item">
                <Link
                  to="addToy"
                  className="px-1 py-2 rounded-lg hover:bg-gray-50 flex items-center text-xs uppercase font-semibold leading-snug duration-300 text-white hover:text-orange-400"
                >
                  <span className="ml-2 text-md flex items-center justify-center">
                    Our Shop
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/myToys"
                  className="px-1 py-2 rounded-lg hover:bg-gray-50 flex items-center text-xs uppercase font-semibold leading-snug duration-300 text-white hover:text-orange-400"
                >
                  <span className="ml-2 text-md flex items-center justify-center">
                    Dashboard
                  </span>
                </Link>
              </li>
            </>

            <li className="nav-item">
              <Link
                to="/blog"
                className="px-1 py-2 flex rounded-lg hover:bg-gray-50 items-center text-xs uppercase font-semibold leading-snug duration-300 text-white hover:text-orange-400"
              >
                <span className="ml-2 text-md">Blog</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/"
                className="px-1 py-2 flex items-center rounded-lg hover:bg-gray-50 text-xs uppercase font-semibold leading-snug duration-300 text-white hover:text-orange-400"
              >
                <span className="ml-2 text-md flex items-center justify-center">
                  Contact Us
                </span>
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/login"
                className=" text-white bg-violet-600  focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-md text-sm px-7 py-3 text-center"
              >
                Login
              </Link>
            </li>
            {/* <div className="lg:ml-72 flex gap-4  items-center md:mb-0 md:mt-0 md:ml-0 mb-8 mt-2 ml-4  ">
              <div className="mr-0"></div>
            </div> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
