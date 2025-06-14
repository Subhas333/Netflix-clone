import React from "react";
import { Navbar } from "./Navbar";

export default function HeroSection () {
  return (
    <div
      className="h-[40em] md:h-[44em] lg:h-[44em] "
      style={{
        background:
          "linear-gradient(80deg, black, transparent), url(https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/fe1147dd-78be-44aa-a0e5-2d2994305a13/IN-en-20231016-popsignuptwoweeks-perspective_alpha_website_large.jpg)",
      }}
    >
      <Navbar />
      <div className=" container mx-auto flex justify-center items-center h-96">
        <div className=" mt-52 ">
          <h1 className=" text-white text-center lg:text-6xl md:text-5xl text-3xl px-5  font-bold lg:px-20  mb-4 m-24">
            Unlimited movies, TV shows, and more
          </h1>
          <p className="text-center text-white lg:text-2xl md:text-2xl text-xl mb-5">
            Starts at USD 2.99. Cancel anytime.
          </p>
          <p
            className="text-center text-white lg:text-xl md:text-xl
                    text-lg mb-5"
          >
            Ready to watch? Enter your email to create or restart your
            membership. <br className=" lg:hidden md:hidden" />
          </p>
          <div className="flex flex-wrap justify-center items-center space-x-2">
            <input
              type="text"
              className=" bg-[#1d1e1e] text-white text-lg py-3 px-3 w-80 lg:w-96 rounded-md opacity-80 border border-gray-300 hover:ring-1 hover:ring-gray-50   outline-none mb-5 md:mb-0 lg:mb-0"
              placeholder="Email address"
            />
            <button className="bg-[#e50815] flex items-center gap-2 py-3 px-5 rounded-lg hover:bg-red-800">
              <p className="text-white font-bold text-xl">Get Started</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
