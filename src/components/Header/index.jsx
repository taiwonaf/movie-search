import React from "react";
import { HeroImg } from "./../assets";
import Genre from "./Genre";
import Date from "./Date";

const index = ({ query, setQuery, fetchSearch, genres }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchSearch();
  };
  return (
    <div className="h-screen relative w-full text-white px-[17px] flex justify-center items-center">
      <div className="bg-black bg-opacity-30 inset-0 absolute z-[10]"></div>
      <img
        src={HeroImg}
        alt=""
        className="h-full w-full absolute z-[9] inset-0 object-cover"
      />
      <div className="z-[99] relative h-full w-full flex mt-[200px] md:mt-0 md:justify-center items-center max-w-[1200px] flex-col">
        <div className="w-full">
          <h1 className="capitalize text-[32px] md:text-[42px] text-center font-[700] mb-[20px] md:mb-[40px]">
            All the movies you need, in one place
          </h1>
          <h4 className="text-center text-[18px] md:text-[28px] mb-[20px] md:mb-[40px]">
            Explore the world of movies with ease.
          </h4>
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-full flex justify-center items-center flex-col gap-[20px]">
          <div className="max-w-[700px] w-full bg-white flex flex-col md:flex-row  justify-between items-center gap-[5px] p-[5px] rounded-[5px]">
            <Genre setQuery={setQuery} genres={genres} />
            <div className="w-full flex-1">
              <input
                value={query.title}
                name="search"
                onChange={(e) =>
                  setQuery((prev) => ({ ...prev, title: e.target.value }))
                }
                type="text"
                placeholder="Search here"
                className="pl-[8px] w-full outline-none text-[#121212]"
              />
            </div>
            <Date setQuery={setQuery} />
          </div>
          <button
            type="submit"
            className="bg-white max-w-[200px] hover:border-[2px] hover:border-white hover:bg-black hover:p-[10px] hover:text-white text-black inline-block p-[12px] rounded-[5px] w-full">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default index;
