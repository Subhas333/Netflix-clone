import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className="w-full text-white py-4 px-4 flex items-center justify-between md:px-8 lg:px-16">
      <div className="netflixlogo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="Netflix Logo"
          className="h-6 sm:h-8 md:h-10 lg:h-12 w-auto"
        />
      </div>
      <div className="flex items-center space-x-3 sm:space-x-4">
        <Link to="/signin">
          <button className="bg-[#e50815] hover:bg-red-700 transition px-4 sm:px-5 py-1.5 sm:py-2 text-sm sm:text-base rounded-md font-semibold">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};
