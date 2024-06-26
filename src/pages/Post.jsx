import React from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Footer, NavBar } from "../components";

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
        <meta name="description" content={post.excerpt || "Read this amazing blog post on Your Blog Name"} />
        <meta name="keywords" content={post.metaDescription} />
        <meta property="og:title" content={post.name} />
        <meta property="og:description" content={post.metaDescription || "Read this amazing blog post on Deepcal"} />
        <meta property="og:image" content={post.featuredImage} />
        <meta property="og:url" content={window.location.href} />
        <meta name="twitter:card" content="summary_large_image"/>
      </Helmet>
      <NavBar/>
      <div className="flex flex-col justify-top h-auto w-full mt-[5%] mb-[5%] px-4 md:px-[20%] justify-start">
        <h1 className="text-white text-2xl md:text-4xl mb-4 text-left bm-2">{post.name}</h1>
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
