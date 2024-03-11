import React from "react";
import Stats from "../components/home/Stats";


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
      <div className="flex flex-col lg:flex-row mx-auto xl:px-[16%] md:px-[10%] ">

       
      </div>
    </>
  );
}

export default HomePage;
