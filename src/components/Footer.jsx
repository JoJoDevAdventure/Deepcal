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
      <div className="mb-2 flex flex-col md:flex-row justify-between md:items-center ">
        <ul className="flex md:text-lg text-[#8F8F8F] text-sm">
          <li
            className="mr-4 lg:mr-8 duration-300 transition-all ease-in transform hover:-translate-y-2"
            onClick={() => scrollByAmount(0)}
          >
            <NavLink to="/">Home</NavLink>{" "}
          </li>
          <li
            className="mr-4 lg:mr-8 duration-300 transition-all ease-in transform hover:-translate-y-2"
            onClick={() => scrollByAmount(500)}
          >
            <NavLink to="/">Company</NavLink>
          </li>
          <li
            className="mr-4 lg:mr-8 duration-300 transition-all ease-in transform hover:-translate-y-2"
            onClick={() => scrollByAmount(1000)}
          >
            <NavLink to="/">Solutions</NavLink>
          </li>
          <li className="mr-4 lg:mr-8 duration-300 transition-all ease-in transform hover:-translate-y-2">
            <NavLink to="https://blog.deepcal.xyz">Blog</NavLink>
          </li>
          <li className="mr-4 lg:mr-8 duration-300 transition-all ease-in transform hover:-translate-y-2">
            <NavLink to="/industry-news">Industry News</NavLink>
          </li>
        </ul>
        <div className="flex flex-row gap-4">
          <a
            href="https://www.youtube.com/@deep_cal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              height="512px"
              className="w-8 h-8 text-[#8F8F8F] hover:-translate-y-2 transition-all duration-200"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="currentColor">
                <path d="M265,96c65.3,0,118.7,1.1,168.1,3.3l0.7,0h0.7c23.1,0,42,22,42,49.1v1.1l0.1,1.1c2.3,34,3.4,69.3,3.4,104.9v0v0c0.1,35.6-1.1,70.9-3.4,104.9l-0.1,1.1v1.1c0,13.8-4.7,26.6-13.4,36.1c-7.8,8.6-18,13.4-28.6,13.4h-0.8l-0.8,0c-52.9,2.5-108.8,3.8-166.4,3.8c-3.5,0-7.1,0-10.6,0H256h-0.1c-3.6,0-7.2,0-10.8,0c-57.8,0-113.7-1.3-166.2-3.7l-0.8,0h-0.8c-10.6,0-20.7-4.8-28.5-13.4c-8.6-9.5-13.4-22.3-13.4-36.1v-1.1l-0.1-1.1c-2.4-34.1-3.5-69.4-3.3-104.7v-0.1v-0.1c-0.1-35.3,1-70.5,3.3-104.6l0.1-1.1v-1.1c0-27.2,18.8-49.3,41.9-49.3H78l0.7,0c49.5-2.3,102.9-3.3,168.2-3.3h9H265 M265,64c-3,0-6,0-9,0s-6,0-9,0c-57.6,0-114.2,0.8-169.6,3.3c-40.8,0-73.9,36.3-73.9,81.3C1,184.4-0.1,220,0,255.7c-0.1,35.7,0.9,71.3,3.4,107c0,45,33.1,81.6,73.9,81.6c54.8,2.6,110.7,3.8,167.8,3.8c3.6,0,7.3,0,10.9,0c3.6,0,7.2,0,10.7,0c57.1,0,113-1.2,167.9-3.8c40.9,0,74-36.6,74-81.6c2.4-35.7,3.5-71.4,3.4-107.1c0.1-35.7-1-71.3-3.4-107.1c0-45-33.1-81.1-74-81.1C379.2,64.8,322.7,64,265,64L265,64z" />
                <path d="M207,353.8V157.4l145,98.2L207,353.8z" />
              </g>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/company/deepcal/about/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-8 h-8 text-[#8F8F8F] hover:-translate-y-2 transition-all duration-200"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
            >
              <g>
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z" />
              </g>
            </svg>{" "}
          </a>
          <a
            href="https://x.com/deep_cal"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center"
          >
            <svg
              className="w-6 h-6 text-[#8F8F8F] hover:-translate-y-2 transition-all duration-200"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 1227"
              fill="currentColor"
            >
              <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
            </svg>
          </a>
        </div>
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
            alt="Logo"
          />
        ) : (
          <img
            className="w-[60px] md:w-[120px] object-cover"
            src="./Logo-B.png"
            alt="Logo"
          />
        )}
      </div>
    </div>
  );
};

export default Footer;
