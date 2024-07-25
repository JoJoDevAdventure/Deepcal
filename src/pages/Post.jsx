import React from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Contact, Footer, NavBar } from "../components";
import { NavLink } from "react-router-dom";

const Post = () => {
  const location = useLocation();
  const { post } = location.state || {};

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="bg-[#0C0C0C] px-2 md:px-14 lg:px-[12%] min-h-[100vh]">
      <Helmet>
        <title>{post.name} | Deepcal Blog</title>
        <meta
          name="description"
          content={
            post.excerpt || "Read this amazing blog post on Your Blog Name"
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
      <NavBar />
      <div className="flex flex-col justify-top h-auto w-full mt-[5%] mb-[5%] px-4 md:px-[20%] justify-start">
        <h1 className="text-white text-2xl md:text-4xl mb-4 text-left bm-2">
          {post.name}
        </h1>
        <img
          src={post.featuredImage}
          alt=""
          className="w-full h-48 object-cover"
        />
        <div className="pt-10 text-white">
          <div dangerouslySetInnerHTML={{ __html: post.postBody }}></div>
        </div>
      </div>
      <div className="flex justify-center items-center h-[250px] w-full py-6 lg:py-10">
        <div className="text-center bg-white p-4 shadow-md w-[80%] md:w-[500px]">
          <h2 className="text-2xl font-medium mb-4">Want To Know More?</h2>
          <p className="font-light mb-4">
            Get in touch with us today for further details. We're here to answer
            any questions you may have!
          </p>
          <div className="flex justify-center gap-10">
            <p className="font-light">info@deepcal.xyz</p>
            <NavLink
              to="/contact"
              className="bg-black hover:bg-transparent hover:text-black text-white font-semibold py-2 px-4 rounded-full border-black border-2"
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      </div>
      <Footer bg={"black"} />
    </div>
  );
};

export default Post;