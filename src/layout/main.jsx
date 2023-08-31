import { Component } from 'react';

import { MovieList } from '../components/movie-list.jsx';
import { Loader } from '../components/loader.jsx';
import { Search } from '../components/search.jsx';

import { Api } from '../servises/api.js';

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
    // this.apiKey = 'faadd693';
    // this.baseURL = 'http://www.omdbapi.com/';
  }

  componentDidMount() {
    this.api = new Api();
    const movieName = 'matrix';
    this.api.getMovies(movieName).then((data) => this.setState({movies: data}));
  }

  onSearch = (movieName) => {
    this.api.getMovies(movieName).then((data) => this.setState({movies: data}));
  }

  render() {
    const {movies} = this.state;
    const moviesContent = movies.length ? <MovieList movies={movies} /> : <Loader />;
          
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

