import React, { useEffect, useState } from 'react';
import { fetchBlogPosts } from '../api/hubspot';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const blogPosts = await fetchBlogPosts();
      setPosts(blogPosts);
    };

    getPosts();
  }, []);

  return (
    <div>
      <h1>Blog</h1>
      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: post.post_body }} />
        </div>
      ))}
    </div>
  );
};

export default Blog;
