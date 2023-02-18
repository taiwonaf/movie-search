import axios from "axios";
import React, { useEffect, useState } from "react";
import { Header, Movies, Search } from "../components";
import index from "../components/Navbar";

const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=3e2caaefaccae1457af256fc74f148c4`;

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [searchMovies, setSearchMovies] = useState([]);
  const [query, setQuery] = useState({ title: "", year: "", genre: "" });
  const [searchResult, setSearchResult] = useState(false);
  const [genres, setGenres] = useState([]);
  // fetch genres
  useEffect(() => {
    axios.get(process.env.REACT_APP_GENRE_URL).then((res) => {
      setGenres(res.data.genres);
    });
  }, []);
  // Fetch popular movies
  useEffect(() => {
    try {
      axios.get(API_URL).then((res) => {
        setMovies(res.data.results);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  // fetch data base of title genre and date

  const fetchSearch = () => {
    try {
      axios
        .get(
          `${process.env.REACT_APP_MOVIE_URL}query=${query.title}&page=1&include_adult=false&year=${query?.year}`
        )
        .then((res) => {
          const data = res.data.results;
          const selectedGenre = query.genre;
          // if (selectedGenre) {
          //   data.forEach((item) => {
          //     const itemGenres = item.genre_ids;
          //     itemGenres.forEach((itemGenre) => {
          //       if (itemGenre === selectedGenre) {
          //         setSearchMovies((prev) => [...prev, item]);
          //       }
          //     });
          //   });
          // }
          setSearchMovies(res.data.results);
          console.log("Searched moveis", res.data.results);
          setSearchResult(true);
        });
    } catch (error) {
      setSearchResult(false);
      console.log(error);
    }
  };
  return (
    <React.Fragment>
      {!searchResult ? (
        <main>
          <div>
            <Header
              fetchSearch={fetchSearch}
              setQuery={setQuery}
              query={query}
              genres={genres}
            />
          </div>
          <div className="py-[100px]">
            <h2 className="px-[17px] font-[700] text-center text-[21px] md:text-[38px] mb-[20px]">
              Popular Movies
            </h2>
            <Movies data={movies} />
          </div>
        </main>
      ) : (
        <Search data={searchMovies} setSearchResult={setSearchResult} />
      )}
    </React.Fragment>
  );
};

export default Home;
