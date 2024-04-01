import React from "react";

const Contact = () => {
  return (
    <div className="bg-[url('/contact.jpg')] bg-cover bg-center w-screen h-[580px] mt-10% text-center flex flex-col items-center">
      <h1 className="text-4xl font-medium border-b-2 text-white border-gray-400 inline-block mb-8 pb-2 mt-20">
        GET IN TOUCH
      </h1>
      <div className="h-[250px] w-[500px] bg-[#D9D9D9] mt-10 justify-between items-center py-10 px-10 flex flex-col">
        <h2 className="text-2xl font-medium"> Want To Know More ? </h2>
        <p className="font-light"> Lorem ipsum dolor sit amet consectetur. Mauris commodo malesuada condimentum elementum. </p>
        <div className="flex gap-10">
          <p className="font-light"> condimentum elementum. <br/> condimentum elementum. </p>
          <button className="bg-black hover:bg-transparent hover:text-black text-white font-semibold py-2 px-4 rounded-full border-black border-2">
          Contact Us
        </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
