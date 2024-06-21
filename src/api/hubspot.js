import axios from "axios";

const HUBSPOT_ACCESS_TOKEN = "pat-eu1-23bb0deb-1d99-4bd5-8d97-2992b3f75665";
const HUBSPOT_BLOG_ID = "106932793560";

export const fetchBlogPosts = async () => {
  try {
    const response = await axios.get(
      `https://api.hubapi.com/blogs/v3/blog-posts`,
      {
        headers: {
          'Authorization': `Bearer ${HUBSPOT_ACCESS_TOKEN}`,
          'Content-Type':  'application/json;charset=utf-8',
        },
      }
    );
    return response.data.objects;
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    throw error;
  }
};
