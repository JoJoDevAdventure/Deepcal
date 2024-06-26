import React from "react";
import { useLocation } from "react-router-dom";
import { Footer, NavBar } from "../components";

const Post = () => {
  const location = useLocation();
  const { post } = location.state || {};

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="bg-[#0C0C0C] px-2 md:px-14 lg:px-[12%] min-h-[100vh]">
      <NavBar />
      <div className="flex flex-col justify-top items-center h-auto w-full mt-[5%] mb-[5%] px-4 md:px-[20%]">
        <h1 className="text-white text-4xl mb-4">{post.name}</h1>
        <img
          src={post.featuredImage}
          alt=""
          className="w-full h-48 object-cover"
        />
        <div className="pt-10 text-white">
          <div dangerouslySetInnerHTML={{ __html: post.postBody }}></div>
        </div>
      </div>
      <Footer bg={"black"} />
    </div>
  );
};

export default Post;
