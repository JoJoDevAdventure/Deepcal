import React, { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="text-white p-4 flex justify-between items-center">
      <div className="flex space-x-2 justify-center items-center">
        {/* Side menu icon for mobile */}
        <div className="block md:hidden">
          <button onClick={toggleMenu} className="text-white ml-4">
            {isMenuOpen ? "" : <span className="text-3xl">&#9776;</span>}
          </button>
        </div>

        {/* Logo on the left */}
        <div className="flex items-center">
        <img className="w-24" src="./Logo.png" alt="Logo" />
        </div>
      </div>

      {/* Navigation links in the middle (visible on large screens) */}
      <ul
        className={`md:flex ${
          isMenuOpen ? "block" : "hidden"
        } mt-4 md:mt-0 md:flex-grow md:justify-center md:text-l md:font-regular`}
      >
        {/* Side menu icon for mobile */}
        <div className="block md:hidden">
          <button onClick={toggleMenu} className="text-white ml-4">
            {isMenuOpen ? <span className="text-2xl">&#10005;</span> : ""}
          </button>
        </div>

        <li className="mr-4 lg:mr-8">
          <a onClick={toggleMenu} href="#">Home</a>
        </li>
        <li className="mr-4 lg:mr-8">
          <a onClick={toggleMenu} href="#">Company</a>
        </li>
        <li className="mr-4 lg:mr-8">
          <a onClick={toggleMenu} href="#">Solutions</a>
        </li>
      </ul>

      {/* Contact us button on the right */}
      <div className="block">
        <button className="bg-transparent hover:bg-white hover:text-black text-white font-semibold py-2 px-4 rounded-full border-white border-2">
          Contact Us
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
