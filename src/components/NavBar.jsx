import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollByAmount = (amount) => {
    window.scrollTo({
      top: window.scrollY + amount,
      behavior: "smooth",
    });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="text-white pt-5 flex justify-between items-center relative">
      <div className="flex flex-row space-x-1 justify-between align-left text-left origin-left align-middle items-center">
        {/* Side menu icon for mobile */}
        <div className=" md:hidden mt-0 flex flex-col items-start justify-start text-left">
          <button onClick={toggleMenu} className="text-white ml-4 flex flex-col items-start justify-start text-left">
            {isMenuOpen ? "" : <span className="text-3xl">&#9776;</span>}
          </button>
        </div>

        {/* Logo on the left */}
        <div className="flex items-center">
          <img className="w-24" src="./Logo-W.png" alt="Logo" />
        </div>
      </div>

      {/* Navigation links in the middle (visible on large screens) */}
      <ul
        className={`hidden md:flex mt-4 md:mt-0 md:flex-grow md:justify-center md:text-l md:font-regular`}
      >
        <li className="mr-4 lg:mr-8 hover:text-gray-400">
          <NavLink to="/">Home</NavLink>
        </li>
        <li
          className="mr-4 lg:mr-8 hover:text-gray-400"
          onClick={() => scrollByAmount(500)}
        >
          <NavLink to="/">Company</NavLink>
        </li>
        <li
          className="mr-4 lg:mr-8 hover:text-gray-400"
          onClick={() => scrollByAmount(1000)}
        >
          <NavLink to="/">Solutions</NavLink>
        </li>
        <li className="mr-4 lg:mr-8 hover:text-gray-400">
          <NavLink to="https://blog.deepcal.xyz">Blog</NavLink>
        </li>
        <li className="mr-4 lg:mr-8 hover:text-gray-400">
          <NavLink to="/industry-news">Industry News</NavLink>
        </li>
      </ul>

      {/* Side menu */}
      {isMenuOpen && (
        <div
          className="fixed top-0 left-0 h-screen w-full bg-black/70"
          onClick={toggleMenu}
        >
          <div className="absolute top-0 left-0 h-[130vh] w-60 bg-gray-900 p-8 z-50">
            <ul className="text-white">
              <li>
                <button onClick={toggleMenu} className="text-white mb-4">
                  {<span className="text-3xl">&#10005;</span>}
                </button>
              </li>
              <li className="mb-4">
                <NavLink to="/" onClick={toggleMenu}>
                  Home
                </NavLink>
              </li>
              <li className="mb-4" onClick={() => scrollByAmount(500)}>
                <NavLink
                  to="/"
                  onClick={() => {
                    toggleMenu();
                  }}
                >
                  Company
                </NavLink>
              </li>
              <li className="mb-4" onClick={() => scrollByAmount(1400)}>
                <NavLink
                  to="/"
                  onClick={() => {
                    toggleMenu();
                    scrollByAmount(-1000);
                  }}
                >
                  Solutions
                </NavLink>
              </li>
              <li className="mr-4 lg:mr-8 hover:text-gray-400 mb-4">
                <NavLink to="https://blog.deepcal.xyz">Blog</NavLink>
              </li>

              <li className="mr-4 lg:mr-8 hover:text-gray-400">
                <NavLink to="/industry-news">Industry News</NavLink>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Contact us button on the right */}
      <div className="flex">
      <NavLink
          to="/demo"
          className="hidden md:flex md:flex-col relative bg-transparent hover:text-gray-300 text-white font-semibold py-2 px-2 md:px-5 rounded-full"
        >
          Demo
        </NavLink>
        <NavLink
          to="/contact"
          className="bg-transparent mr-2 md:mr-0 hover:bg-white hover:text-black text-white md:font-semibold py-2 px-2 md:px-4 rounded-full border-white border-2"
        >
          Contact Us
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
