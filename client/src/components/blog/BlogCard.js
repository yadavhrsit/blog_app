import React from "react";
import { Link } from "react-router-dom";

function BlogCard({ blog }) {
  return (
    <div className="card bg-neutral text-neutral-content my-4">
      <div className="card-body pb-0">
        <h2 className="card-title">{blog.title}</h2>
        <p className="text-left">{blog.content.substring(0, 150)}...</p>
      </div>
      <div className="card-actions justify-start mb-8 mt-4 mx-8">
        <Link to={`/blog/${blog._id}`} className="btn">
          Read Blog
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;
