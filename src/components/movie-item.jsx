export function MovieItem(props) {
  const {
    Title: title, 
    Year: year, 
    imdbID: id, 
    Type: type, 
    Poster: poster
  } = props;

  return (
    <div className="movie__item">
      <img src={poster} alt="image" className="movie__img" />
      <h4 className="movie__title">{title}</h4>
      <p className="movie__year">{year}</p>
    </div>
  );
}