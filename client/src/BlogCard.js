import React from "react";
import { Link } from "react-router-dom";

function BlogCard({ blogs }) {
  return (
    <div>
      {blogs.map((blog) => (
        <div key={blog._id} className="border p-4 mb-4">
          <h2 className="text-lg font-bold">{blog.title}</h2>
          <p className="text-gray-700">{blog.content.substring(0, 150)}...</p>
          <Link
            to={`/blog/${blog._id}`}
            className="mt-2 inline-block bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600"
          >
            Read Blog
          </Link>
        </div>
      ))}
    </div>
  );
}

export default BlogCard;
