import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Footer, NavBar } from "../components";
import axios from "axios";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  const fetchBlogPosts = async () => {
    try {
      const response = await axios.get(
        `https://deepcal-api-2cc87306f059.herokuapp.com/api/blog-posts`
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      throw error;
    }
  };

  useEffect(() => {
    const getPosts = async () => {
      const blogPosts = await fetchBlogPosts();
      setPosts(blogPosts);
    };
    getPosts();
  }, []);

  return (
    <div className="bg-[#0C0C0C] px-2 md:px-14 lg:px-[12%] h-[100%] min-h-[100vh]">
      <NavBar />
      <div className="flex flex-col justify-top items-center h-auto w-full mt-[5%] mb-[5%]">
        <h1 className="text-white text-4xl mb-4">Our blogs</h1>
        {posts && posts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-h-[600px]">
            {posts.map((post) => (
              <div
                key={post.name}
                className="border border-white rounded-lg overflow-hidden shadow-lg mt-10 lg:mt-20 mb-10 lg:mb-20 bg-transparent hover:bg-white hover:bg-opacity-10 transition duration-300"
              >
                <img
                  src={post.featuredImage}
                  alt=""
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-bold mb-2 text-white min-h-[100px]">{post.name}</h2>
                  <Link
                    to={`/blog/${post.id}`} // assuming post.id is unique for each post
                    state={{ post }} // pass the post data as state
                  >
                    <button className="bg-white text-black border border-black px-4 py-2 rounded hover:bg-black hover:text-white transition duration-300">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-white">Loading posts...</p>
        )}
      </div>
      <Footer bg={"black"}/>
    </div>
  );
};

export default Blog;
