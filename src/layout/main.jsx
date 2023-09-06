import { useState, useEffect, useRef } from 'react';

import { MovieList } from '../components/movie-list.jsx';
import { Loader } from '../components/loader.jsx';
import { Search } from '../components/search.jsx';
import { Pagination } from '../components/pagination.jsx';

import { Api } from '../services/api.js';

export function Main() {
  const [movies, setMovies] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const apiRef = new Api();

  const getMovies = (movieName, type) => {
    apiRef.getMovies(movieName, type)
      .then((data) => {
        setMovies(data.movieList);
        setTotalResults(+data.totalResults);
        setCurrentPage(Math.floor(+data.totalResults / 10));
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  const onSearch = (movieName, type) => {
    setLoading(false);
    getMovies(movieName, type);
  }

  const onCurrentPage = (currentPage) => {
    setLoading(false);
    console.log('current page in main: ', currentPage);
  }

  useEffect(() => {
    const movieName = 'cat';
    const type = '';
    getMovies(movieName, type);
  }, []);

  return (
    <main className="main">
      <div className="container">
        <Search onSearch={onSearch} />
        {loading
          ? <Loader />
          : <MovieList movies={movies} />
        }
        <Pagination pageCount={currentPage} onCurrentPage={onCurrentPage} />
      </div>
    </main>
  );

}

