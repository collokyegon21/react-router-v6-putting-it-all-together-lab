import { useParams, useOutletContext } from "react-router-dom";

function MovieCard() {
  const { id, movieId } = useParams();
  const context = useOutletContext();
  const directors = context?.directors || [];

  const director = directors.find((dir) => String(dir.id) === String(id));
  if (!director) return <h2>Director not found.</h2>;

  const movie = director.movies.find((m) => String(m.id) === String(movieId));
  if (!movie) {
    return (
      <div className="alert alert-warning mt-3">
        <h2>Movie not found.</h2>
      </div>
    );
  }

  return (
    <div className="card bg-light border-primary mt-3 p-3">
      <h2 className="h4 fw-bold mb-2">{movie.title}</h2>
      <p className="mb-1">Duration: {movie.time} minutes</p>
      <p className="mb-0">Genres: {movie.genres.join(", ")}</p>
    </div>
  );
}

export default MovieCard;
