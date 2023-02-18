import React from "react";
import Movie from "./Movie";

const index = ({ data }) => {
  //   console.log(movies);
  return (
    <div className="flex justify-center items-center px-[17px]">
      <div className="w-full flex justify-center gap-[20px] flex-wrap max-w-[1400px]">
        {data.map((item, index) => {
          return <Movie key={index} {...item} />;
        })}
      </div>
    </div>
  );
};

export default index;
