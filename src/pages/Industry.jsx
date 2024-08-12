import React from "react";
import { NavLink } from 'react-router-dom';
import { Footer, NavBar } from "../components";

const industryBlogs = [
  {
    id: 1,
    title: "Tesla car that killed motorcyclist was in 'Full Self-Driving mode'",
    description: "A Tesla Model S car was in 'Full Self-Driving' mode (FSD) when it was involved in a fatal crash in Seattle, Washington in April this year, Washington State Police have confirmed.",
    image: "https://www.just-auto.com/wp-content/uploads/sites/30/2024/08/Tesla2-1024x683.jpg",
    link: "https://www.just-auto.com/newsletters/tesla-car-that-killed-motorcyclist-was-in-full-self-driving-mode"
  },
  {
    id: 2,
    title: "US expected to propose barring Chinese software in autonomous vehicles",
    description: "The U.S. Commerce Department is expected to propose barring Chinese software in autonomous and connected vehicles in the coming weeks, according to sources briefed on the matter.",
    image: "https://www.reuters.com/resizer/v2/UQG54WPIDFORBOQNCYQLKMGGPI.jpg?auth=c27535fe8b6e1fe27c904d59ee811135eaf76509942cb34befb6b85fe020e1eb&width=1920&quality=80",
    link: "https://www.reuters.com/business/autos-transportation/us-expected-propose-barring-chinese-software-autonomous-vehicles-2024-08-04"
  },
  // Add more blogs as needed
];

const Industry = () => {
  return (
    <div className="bg-[#0C0C0C] px-2 md:px-14 lg:px-[12%] h-[100%] min-h-[100vh]">
      <NavBar />
      <div className="flex flex-col justify-top items-center h-auto w-full mt-[5%] mb-5 md:mb-[5%]">
        <h1 className="text-white text-4xl mb-8">Industry News</h1>
        <div className="w-full">
          {industryBlogs.length > 0 ? (
            industryBlogs.map((blog) => (
              <NavLink
                key={blog.id}
                to={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-[#0582B8] rounded-lg overflow-hidden shadow-lg mb-6 bg-transparent hover:bg-white hover:bg-opacity-10 transition duration-300"
              >
                <div className="flex flex-col md:flex-row items-center">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full md:w-1/3 h-48 object-cover"
                  />
                  <div className="p-4 md:w-2/3">
                    <h2 className="text-lg font-bold mb-2 text-white">{blog.title}</h2>
                    <p className="text-white mb-4">{blog.description}</p>
                    <div className="inline-block bg-[#0582B8] text-white border border-[#0582B8] px-4 py-2 rounded hover:bg-transparent hover:text-[#0582B8] transition duration-300">
                      Read More
                    </div>
                  </div>
                </div>
              </NavLink>
            ))
          ) : (
            <p className="text-white">No industry blogs available</p>
          )}
        </div>
      </div>
      <Footer bg={"black"} />
    </div>
  );
};

export default Industry;