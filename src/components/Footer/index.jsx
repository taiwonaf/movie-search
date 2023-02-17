import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "..";

const index = () => {
  return (
    <footer className="fixed flex justify-center items-center z-[999999] text-white h-[50px] bottom-0 left-0 right-0 bg-gray-400">
      <div className="max-w-[1200px] py-[10px] flex justify-center gap-[10px] items-center">
        Made with ❤️ by -{" "}
        <Link to="https://twitter.com/taiwonaf">Taiwo Nafiu</Link>
      </div>
    </footer>
  );
};

export default index;
