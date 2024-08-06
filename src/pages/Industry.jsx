import React from "react";
import { Link } from 'react-router-dom';
import { Footer, NavBar } from "../components";

const industryBlogs = [
  {
    id: 1,
    title: "Industry Blog 1",
    description: "A brief description of the first industry blog post.",
    image: "link_to_image_1.jpg",
    link: "https://example.com/blog1"
  },
  {
    id: 2,
    title: "Industry Blog 2",
    description: "A brief description of the second industry blog post.",
    image: "link_to_image_2.jpg",
    link: "https://example.com/blog2"
  },
  {
    id: 3,
    title: "Industry Blog 3",
    description: "A brief description of the third industry blog post.",
    image: "link_to_image_3.jpg",
    link: "https://example.com/blog3"
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
              <a
                key={blog.id}
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-white rounded-lg overflow-hidden shadow-lg mb-6 bg-transparent hover:bg-white hover:bg-opacity-10 transition duration-300"
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
                    <Link
                      to={{ pathname: blog.link }}
                      target="_blank"
                      className="inline-block bg-white text-black border border-black px-4 py-2 rounded hover:bg-black hover:text-white transition duration-300"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </a>
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