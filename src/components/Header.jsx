import { motion } from "framer-motion";
import React from "react";
import { NavLink } from "react-router-dom";
import { slideAnimation } from "../config/motion";
import CustomButton from "./CustomButton";
import NavBar from "./NavBar";


const Header = () => {

  const scrollByAmount = (amount) => {
    window.scrollTo({
      top: window.scrollY + amount,
      behavior: 'smooth',
    });
  };
  
  return (
    <div className="bg-[url('/background-image.jpeg')] bg-background bg-cover bg-center h-[80vh]  px-2 md:px-14 lg:px-[12%] relative">
      <NavBar/>
      <div className="justify-center items-center h-full py-5 md:py-13 lg:py-20 text-center lg:justify-start lg:text-left">
        <motion.div {...slideAnimation("left", 0.4)} className="">
          <h1 className="head-text text-white">
            <span className="text-[#53A9CE]">Zero-Click </span>Automated<br />
            Sensor Calibration
          </h1>
        </motion.div>
        <motion.div
          className="flex flex-col gap-5 items-center lg:items-start"
          {...slideAnimation("left", 0.7)}
        >
          <p className="max-w-md font-norma text-white py-3 md:py-8 text-2xl">
            Hands-free, real-time sensor calibration
          </p>
        </motion.div>
        <motion.div
          className="md:flex md:space-x-10 md:items-center md:justify-center md:text-center px-[20%] mt-5 lg:justify-start lg:text-left lg:items-start lg:px-0 lg:w-[49%]"
          {...slideAnimation("up", 1)}
        >
          <CustomButton
            type="filled"
            title="OUR SOLUTIONS"
            handleClick={() => scrollByAmount(1000)}
            customStyles={"w-full px-6 py-3 md:px-6 md:py-4 md:font-bold text-sm mb-3 md:mb-5 md:my-0 hover:bg-transparent hover:border hover:border-white bg-white hover:text-white"}
          />
          <NavLink to="/demo" className="w-[45%]">
          <CustomButton
            type="filled"
            title="REQUEST DEMO"
            handleClick={ () => {}}
            customStyles={"w-full px-6 py-3 md:px-6 md:py-4 md:font-bold text-sm mb-3 bg-[#53A9CE] text-white md:mb-5 md:my-0 hover:bg-transparent hover:border hover:border-[#53A9CE] hover:text-white"}
          />
          </NavLink>
        </motion.div>
      </div>
      {/* TODO: Add down button */}
    </div>
  );
};

export default Header;
