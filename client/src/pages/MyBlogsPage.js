import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BlogCard from "../components/blog/BlogCard";

function MyBlogsPage() {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const token = localStorage.getItem("BlogAppToken");

  useEffect(() => {
    const fetchUserBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:5000/blogs/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching user blogs:", error);
      }
    };
    if (!token) {
      navigate("/login");
    } else {
      fetchUserBlogs();
    }
  }, [navigate, token]);

  

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">My Blogs</h1>
      {blogs.length > 0 ? (
        <div>
          <BlogCard blogs={blogs} />
        </div>
      ) : (
        <p className="text-3xl">You haven't posted any blogs yet.</p>
      )}
    </div>
  );
}

export default MyBlogsPage;
