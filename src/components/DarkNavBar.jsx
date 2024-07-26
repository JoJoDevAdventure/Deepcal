import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const DarkNavBar = () => {
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
    <nav className="bg-white text-gray-800 pt-5 flex justify-between items-center relative">
      <div className="flex flex-row space-x-2 justify-between align-left text-left origin-left align-middle items-center">
        {/* Side menu icon for mobile */}
        <div className="block md:hidden mt-0 self-center">
          <button onClick={toggleMenu} className="text-gray-200 ml-4">
            {isMenuOpen ? "" : <span className="text-3xl">&#9776;</span>}
          </button>
        </div>

        {/* Logo on the left */}
        <div className="flex items-center">
          <img className="w-24" src="./Logo-B.png" alt="Logo" />
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
          <NavLink to="/blog">Blog</NavLink>
        </li>
      </ul>

      {/* Side menu */}
      {isMenuOpen && (
        <div
          className="fixed top-0 left-0 h-screen w-full bg-black/70"
          onClick={toggleMenu}
        >
          <div className="absolute top-0 left-0 h-[130vh] w-60 bg-gray-800 p-8 z-50">
            <ul className="text-gray-200">
              <li>
                <button onClick={toggleMenu} className="text-gray-200 mb-4">
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
              <li className="mb-4" onClick={() => scrollByAmount(1000)}>
                <NavLink
                  to="/"
                  onClick={() => {
                    toggleMenu();
                  }}
                >
                  Solutions
                </NavLink>
              </li>
              <li className="mb-4">
                <NavLink to="/blog" onClick={toggleMenu}>
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Contact us button on the right */}
      <div className="block">
        <NavLink
          to="/contact"
          className="bg-transparent hover:bg-gray-600 hover:text-white text-gray-600 font-semibold py-2 px-3 md:px-4 rounded-full border-gray-600 border-2"
        >
          Contact Us
        </NavLink>
      </div>
    </nav>
  );
};

export default DarkNavBar;