import { useState } from "react";
import { useParams, useOutletContext, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function MovieForm() {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [genres, setGenres] = useState("");

  const { id } = useParams();
  const context = useOutletContext();
  const directors = context?.directors || [];
  const setDirectors = context?.setDirectors;
  const navigate = useNavigate();

  const director = directors.find((dir) => String(dir.id) === String(id));

  if (!director) {
    return <h2>Director not found.</h2>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = {
      id: uuidv4(),
      title,
      time: parseInt(time),
      genres: genres.split(",").map((genre) => genre.trim()),
    };

    fetch(`http://localhost:4000/directors/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ movies: [...director.movies, newMovie] }),
    })
      .then((r) => {
        if (!r.ok) {
          throw new Error("failed to add movie");
        }
        return r.json();
      })
      .then((data) => {
        setDirectors((prevDirectors) =>
          prevDirectors.map((dir) =>
            String(dir.id) === String(data.id) ? data : dir,
          ),
        );
        navigate(`/directors/${id}/movies/${newMovie.id}`);
      })
      .catch(console.log);
  };

  return (
    <div className="card bg-light border-0 p-4 mt-3">
      <h2 className="h4 fw-bold mb-3">Add New Movie</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Movie Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            placeholder="Duration (minutes)"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Genres (comma-separated)"
            value={genres}
            onChange={(e) => setGenres(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-success w-100">
          Add Movie
        </button>
      </form>
    </div>
  );
}

export default MovieForm;
