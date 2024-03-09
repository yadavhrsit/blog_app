import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "./BlogCard";

function HomePage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:5000/blogs");
        setBlogs(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } 
    };

    fetchBlogs();
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">All Blogs</h1>
      {loading ? <p>Loading...</p> : <BlogCard blogs={blogs} />}
    </div>
  );
}

export default HomePage;
