export function MovieItem(props) {
  const {
    Title: title, 
    Year: year, 
    imdbID: id, 
    Type: type, 
    Poster: poster
  } = props;

  const movieImgPath = poster === 'N/A' ? `https://placehold.co/300x400?text=${title}` : poster;

  return (
    <div className="movie__item">
      <img src={movieImgPath} alt="image" className="movie__img" />
      <h4 className="movie__title">{title}</h4>
      <p className="movie__year">{year}</p>
    </div>
  );
}