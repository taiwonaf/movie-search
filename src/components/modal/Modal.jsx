import React, { useState, useEffect } from "react";
import axios from "axios";
import { XCircleIcon } from "@heroicons/react/24/solid";

const Modal = ({ modalData, close }) => {
  const {
    title,
    vote_average,
    backdrop_path,
    genre_ids,
    release_date,
    overview,
  } = modalData;
  const [movieGenre, setMovieGenre] = useState([]);
  useEffect(() => {
    axios.get(process.env.REACT_APP_GENRE_URL).then((res) => {
      const genres = res.data.genres;
      const genreNames = genre_ids.map((id) => {
        const genre = genres.find((genre) => genre.id === id);
        return genre.name;
      });
      setMovieGenre(genreNames);
    });
  }, [genre_ids]);
  useEffect(() => {
    window.screenY = "hidden";
    return () => {
      window.screenX = "scroll";
    };
  });
  return (
    <div className="m-[5px] mt-[50px] md:mt-0 fixed h-screen flex justify-center items-center inset-0 z-[99999999999] flex-col ">
      <div
        onClick={() => close(false)}
        className="absolute inset-0 bg-black bg-opacity-70"></div>
      <div className="flex relative z-[9999999999]  text-white justify-end w-full max-w-[600px] mb-[20px]">
        <XCircleIcon
          onClick={() => close(false)}
          className="h-10 w-10 text-white"
        />
      </div>
      <div className="bg-white p-[10px] rounded-[5px] z-[99] max-w-[600px] w-full min-h-[700x]">
        <div className="w-full h-[200px] rounded-[5px] overflow-hidden mb-[10px]">
          {backdrop_path ? (
            <img
              src={process.env.REACT_APP_API_IMG + backdrop_path}
              className="object-cover w-full h-full"
              alt=""
            />
          ) : (
            <div className="w-full h-full text-black flex justify-center items-center font-[700] bg-gray-300">
              Image not found
            </div>
          )}
        </div>
        <h2 className="">
          <span className="font-[700]">Title:</span>
          {title}
        </h2>
        <div className="text-[14px] flex justify-between gap-[5px] items-center">
          <span>
            <span className="font-[700]">Rating:</span>
            {vote_average}
          </span>
          <span>
            <span className="font-[700]">Year:</span> {release_date}
          </span>
        </div>
        <span className="text-[10px]">
          <span className="font-[700] text-[14px]">Genre:</span>{" "}
          {movieGenre.toString()}
        </span>
        <p className="text-justify text-[14px]">{overview}</p>
      </div>
    </div>
  );
};

export default Modal;
