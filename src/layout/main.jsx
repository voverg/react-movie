import { Component } from 'react';
import { MovieList } from '../components/movie-list.jsx';
import { Loader } from '../components/loader.jsx';

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
    this.apiKey = 'faadd693';
    this.baseURL = 'http://www.omdbapi.com/';
  }

  componentDidMount() {
    const movieName = 'matrix';
    const url = `${this.baseURL}?apikey=${this.apiKey}&s=${movieName}`;
    // const url = 'http://www.omdbapi.com/?apikey=faadd693&s=matrix';

    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({movies: data.Search}));
  }

  render() {
    const {movies} = this.state;
    const content = movies.length ? <MovieList movies={movies} /> : <Loader />;
          
    return (
      <main className="main">
        <div className="container">{content}</div>
      </main>
    );
  }
}

