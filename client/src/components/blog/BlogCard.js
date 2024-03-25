import React from "react";
import { Link } from "react-router-dom";
import usericon from "../../assets/icon-user.png";

function BlogCard({ blog }) {
  return (
    <div className="card bg-sky-950 text-neutral-content my-4 rounded-md">
      <div className="card-body pb-0">
        <h2 className="card-title text-left flex flex-col md:flex-row md:justify-between items-start">
          {blog.title}
          <span className="flex gap-2 justify-center items center">
            <img src={usericon} alt="user" style={{ height: "38px" }}></img>
            <p className="text-sm">
              Harshit Yadav <br />
              15 Dec 2023
            </p>
          </span>
        </h2>
        <p className="text-left">{blog.content.substring(0, 200)}...</p>
      </div>
      <div className="card-actions items-center justify-between my-4 mx-8">
        <div className="flex gap-2 flex-wrap font-semibold">
          <Link className="px-4 py-3 badge badge-info rounded-md">
            Frontend
          </Link>
          <Link className="px-4 py-3 badge badge-success rounded-md">
            React
          </Link>
          <Link className="px-4 py-3 badge badge-secondary rounded-md">
            Javascript
          </Link>
          <Link className="px-4 py-3 badge badge-warning rounded-md">
            Backend
          </Link>
          <Link className="px-4 py-3 badge badge-primary rounded-md">
            NodeJS
          </Link>
        </div>

        <div className="flex gap-2 flex-wrap font-semibold">
          <Link className="px-4 py-4 badge border-0 bg-stone-800 rounded-md mt-3 md:mt-0">
            9 min read
          </Link>
        </div>
      </div>
      <Link
        to={`/blog/${blog._id}`}
        className="btn rounded-t-none bg-sky-900 border-0 hover:bg-sky-700"
      >
        Read Blog
      </Link>
    </div>
  );
}

export default BlogCard;
