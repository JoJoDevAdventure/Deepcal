import React from "react";
import { NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <div className="bg-[url('/contact.jpg')] bg-cover bg-center w-screen h-[500px] md:h-[500px] mt-10% text-center flex flex-col items-center">
      <h1 className="text-2xl md:text-4xl font-medium border-b-2 text-white border-gray-400 inline-block mb-4 lg:mb-8 pb-2 mt-20">
        GET IN TOUCH
      </h1>
      <div className="h-[250px] w-[400px] md:w-[500px] bg-[#D9D9D9] mt-10 justify-between items-center py-6 lg:py-10 px-4 lg:px-10 flex flex-col">
        <h2 className="text-2xl font-medium"> Want To Know More ? </h2>
        <p className="font-light w-[80%] md:w-full"> Get in touch with us today for further details. We're here to answer any questions you may have! </p>
        <div className="flex text-center gap-10 justify-center items-center">
          <p className="font-light"> info@deepcal.xyz</p>
          <NavLink to="/contact" className="bg-[#0582B8] hover:bg-transparent hover:text-[#0582B8] text-white font-semibold py-2 px-4 rounded-full border-[#0582B8] border-2">
            Contact Us
        </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Contact;
