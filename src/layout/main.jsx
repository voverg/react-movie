import { Component } from 'react';

import { MovieList } from '../components/movie-list.jsx';
import { Loader } from '../components/loader.jsx';
import { Search } from '../components/search.jsx';

import { Api } from '../services/api.js';

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      totalResults: 0,
      loading: true,
    };
  }

  componentDidMount() {
    this.api = new Api();
    const movieName = 'matrix';
    const type = '';
    this.api.getMovies(movieName, type).then((data) => {
      this.setState({movies: data.movieList, totalResults: +data.totalResults, loading: false});
    });
  }

  onSearch = (movieName, type) => {
    this.setState({loading: true});
    this.api.getMovies(movieName, type).then((data) => {
      this.setState({movies: data.movieList, totalResults: +data.totalResults, loading: false});
    });
  }

  render() {
    const {movies, loading} = this.state;
    const moviesContent = loading  ? <Loader /> : <MovieList movies={movies} />;
          
    return (
      <main className="main">
        <div className="container">
          <Search onSearch={this.onSearch} />
          {moviesContent}
        </div>
      </main>
    );
  }
}

