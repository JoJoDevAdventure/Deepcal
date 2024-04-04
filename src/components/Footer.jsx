import React from "react";

const Footer = () => {
  return (
    <div className="px-[8%] py-[3%]">
      <div className="mb-2">
        <ul className="flex text-lg text-[#8F8F8F]  ">
          <li className="mr-4 lg:mr-8 duration-300 transition-all ease-in transform hover:-translate-y-2">
            <a href="#">
              Home
            </a>
          </li>
          <li className="mr-4 lg:mr-8 duration-300 transition-all ease-in transform hover:-translate-y-2">
            <a href="#">
              Company
            </a>
          </li>
          <li className="mr-4 lg:mr-8 duration-300 transition-all ease-in transform hover:-translate-y-2">
            <a href="#">
              Solutions
            </a>
          </li>
        </ul>
      </div>
      <div className="border-b-2 border-[#8F8F8F] w-[100%] h-1 mb-4"></div>
      <div className="flex justify-between items-center">
        <p className="text-[#8F8F8F]">Copyright © 2024 DeepCal. All Rights Reserved.</p>
        <img src="./Logo.png" alt="" className="object-cover"/>
      </div>
    </div>
  );
};

export default Footer;
