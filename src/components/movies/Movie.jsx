import axios from "axios";
import React, { useEffect, useState } from "react";

const Movie = ({
  title,
  vote_average,
  backdrop_path,
  genre_ids,
  release_date,
  overview,
}) => {
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
  return (
    <div className="rounded-[5px] transition-all duration-[1] w-[300px] h-[500px] p-[5px] pb-[10px] hover:shadow-lg text-black border-gray-200 border-[2px]">
      <div className="flex flex-col gap-[5px] justify-between h-full">
        <div className="w-full h-[200px] rounded-[5px] overflow-hidden mb-[10px]">
          <img
            src={process.env.REACT_APP_API_IMG + backdrop_path}
            className="object-cover w-full h-full"
            alt=""
          />
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
        <p className="text-justify text-[14px]">
          {overview.substring(0, 100) + "..."}
        </p>

        <button className="border-[2px] p-[5px] bg-black text-white hover:bg-transparent hover:text-black">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default Movie;
