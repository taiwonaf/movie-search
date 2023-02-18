import axios from "axios";
import React, { useEffect, useState } from "react";
import { Header, Movies, Search, Modal } from "../components";
import index from "../components/Navbar";

const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=3e2caaefaccae1457af256fc74f148c4`;

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [searchMovies, setSearchMovies] = useState([]);
  const [query, setQuery] = useState({ title: "", year: "", genre: "" });
  const [searchResult, setSearchResult] = useState(false);
  const [genres, setGenres] = useState([]);
  const [modalData, setModalData] = useState({});
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    console.log(openModal);
  });
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
  useEffect(() => {
    console.log(query);
  }, [query]);

  const fetchSearch = () => {
    try {
      axios
        .get(
          `${process.env.REACT_APP_MOVIE_URL}query=${query.title}&page=1&include_adult=false&year=${query?.year}`
        )
        .then((res) => {
          const data = res.data.results;
          const selectedGenre = query.genre;
          if (selectedGenre > 0) {
            // setSearchMovies([]);
            const genreResult = data.filter((obj) => {
              return obj.genre_ids.includes(selectedGenre);
            });
            setSearchMovies(genreResult);
            setSearchResult(true);
          } else {
            setSearchMovies(res.data.results);
            setSearchResult(true);
          }
        });
    } catch (error) {
      setSearchResult(false);
      console.log(error);
    }
  };
  return (
    <React.Fragment>
      {openModal && <Modal close={setOpenModal} modalData={modalData} />}
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
            <Movies
              setOpenModal={setOpenModal}
              setModalData={setModalData}
              data={movies}
            />
          </div>
        </main>
      ) : (
        <Search
          query={query}
          data={searchMovies}
          setSearchResult={setSearchResult}
          setOpenModal={setOpenModal}
          setModalData={setModalData}
        />
      )}
    </React.Fragment>
  );
};

export default Home;
