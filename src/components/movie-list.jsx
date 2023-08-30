import { MovieItem } from './movie-item.jsx';

export function MovieList(props) {
  const {movies} = props;

  return (
    <div className="movie__list">
      {movies.map((movie) => {
        return <MovieItem key={movie.imdbID} {...movie} />
      })}
    </div>
  );
}