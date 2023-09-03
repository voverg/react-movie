import { MovieItem } from './movie-item.jsx';

export function MovieList(props) {
  const {movies} = props;

  return (
    <div className="movie__list">
      {movies.length ? movies.map((movie) => {
        return <MovieItem key={movie.imdbID} {...movie} />
      }) : <h4 className="movie__not-found">No results</h4>
      }
    </div>
  );
}