import React from "react";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <nav className="fixed z-[999999] left-0 right-0 top-0 h-[70px] text-white bg-[#121212] w-full flex justify-center items-center px-[17px]">
      <div className="max-w-[1200px] py-[10px] flex justify-center items-center">
        <Link to="/" className="brand text-[32px] font-[700]">
          movieSearch
        </Link>
      </div>
    </nav>
  );
};

export default index;
