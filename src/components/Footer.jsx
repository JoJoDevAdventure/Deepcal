import React from "react";
import { NavLink } from "react-router-dom";

const Footer = ({ bg }) => {

  const scrollByAmount = (amount) => {
    window.scrollTo({
      top: 0 + amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="px-[8%] py-[3%]">
      <div className="mb-2">
        <ul className="flex md:text-lg text-[#8F8F8F] text-sm">
          <li className="mr-4 lg:mr-8 duration-300 transition-all ease-in transform hover:-translate-y-2"
          onClick={() => scrollByAmount(0)}
          >
            <NavLink to="/">Home</NavLink>{" "}
          </li>
          <li className="mr-4 lg:mr-8 duration-300 transition-all ease-in transform hover:-translate-y-2"
          onClick={() => scrollByAmount(500)}>
            <NavLink to="/">Company</NavLink>
          </li>
          <li className="mr-4 lg:mr-8 duration-300 transition-all ease-in transform hover:-translate-y-2"
          onClick={() => scrollByAmount(1000)}>
            <NavLink to="/">Solutions</NavLink>
          </li>
          <li className="mr-4 lg:mr-8 duration-300 transition-all ease-in transform hover:-translate-y-2">
            <NavLink to="https://blog.deepcal.xyz">Blog</NavLink>
          </li>
          <li className="mr-4 lg:mr-8 duration-300 transition-all ease-in transform hover:-translate-y-2">
          <NavLink to="/industry-news">Industry News</NavLink>
        </li>
        </ul>
      </div>
      <div className="border-b-2 border-[#8F8F8F] w-[100%] h-1 mb-4"></div>
      <div className="flex justify-between items-center">
        <p className="text-[#8F8F8F] text-xs md:text-sm">
          Copyright © 2024 DeepCal. All Rights Reserved.
        </p>
        {bg === "black" ? (
          <img
            className="w-[60px] md:w-[120px] object-cover"
            src="./Logo-W.png"
            alt=""
          />
        ) : (
          <img
            className="w-[60px] md:w-[120px] object-cover"
            src="./Logo-B.png"
            alt=""
          />
        )}
      </div>
    </div>
  );
};

export default Footer;
