import React from "react";
import { Helmet } from "react-helmet";
import { NavLink, useLocation } from "react-router-dom";
import { Footer } from "../components";


const Post = () => {
  const location = useLocation();
  const { post } = location.state || {};

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="bg-white text-black px-2 md:px-14 lg:px-[12%] min-h-[100vh]">
      <Helmet>
        <title>{post.name} | Deepcal Blog</title>
        <meta
          name="description"
          content={
            post.excerpt || "Read this amazing blog post on Deepcal Blog"
          }
        />
        <meta name="keywords" content={post.metaDescription} />
        <meta property="og:title" content={post.name} />
        <meta
          property="og:description"
          content={
            post.metaDescription || "Read this amazing blog post on Deepcal"
          }
        />
        <meta property="og:image" content={post.featuredImage} />
        <meta property="og:url" content={window.location.href} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className="flex flex-col justify-top h-auto w-full mt-[5%] mb-[5%] px-4 md:px-[20%] justify-start">
        <h1 className="text-black text-2xl md:text-4xl mb-4 text-left bm-2">
          {post.name}
        </h1>
        <img
          src={post.featuredImage}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="pt-10 text-black">
          <div dangerouslySetInnerHTML={{ __html: post.postBody }}></div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-10 py-4 lg:py-6">
        <div className="text-center bg-gray-100 p-4 shadow-md w-[90%] md:w-[80%] lg:w-[60%] max-w-[500px]">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium mb-2 md:mb-4">
            Want To Know More?
          </h2>
          <p className="text-sm md:text-base lg:text-lg font-light mb-2 md:mb-4">
            Get in touch with us today for further details. We're here to answer
            any questions you may have!
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <p className="font-light text-sm md:text-base lg:text-lg mb-2 md:mb-0">
              info@deepcal.xyz
            </p>
            <NavLink
              to="/contact"
              className="bg-black hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-full border-black border-2 text-sm md:text-base lg:text-lg"
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      </div>
      <Footer bg={"white"} />
    </div>
  );
};

export default Post;