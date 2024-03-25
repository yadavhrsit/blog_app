import React from "react";
import Stats from "../components/home/Stats";
import BlogList from "../components/blog/BlogsList";

function HomePage() {
  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-overlay bg-opacity-20"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg">
            <h1 className="mb-5 text-5xl font-bold">Blog space</h1>
            <p className="mb-5">Your one stop for latest blogs</p>
            {/* <button className="btn btn-success mb-10 font-bold md:text-xl text-sm">Get Started</button> */}
            <Stats />
          </div>
        </div>
      </div>
      <div className="flex items-start justify-start px-2 mx-auto gap-6">
        <BlogList />
        <div className="w-full max-w-xs mx-2">
          <h1 className="text-left">
            adasdasdasdasdasdasddd
            dddddddddd ddddddddddddd dddddddd ddddddddddddddddd
            dddddddddd dddddddddddddddddddddd dddddddddddddddd
            ddddddddddddddddd dddddddddddddddddd ddddddddddddd
            dddddddddddd ddddddddddddd dddddddddd ddddddddddddd
            ddddddddddddddddddddddddddddd
            dddddddddddddd ddddddddddddddddddddddddddd dddddddddddddddddddddddddd
          </h1>
        </div>
      </div>
    </>
  );
}

export default HomePage;
