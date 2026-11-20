import { Link, Outlet, useParams, useOutletContext } from "react-router-dom";

function DirectorCard() {
  const { id } = useParams();
  const context = useOutletContext();
  const directors = context?.directors || [];

  const director = directors.find((dir) => String(dir.id) === String(id));

  if (!director) {
    return (
      <div className="alert alert-warning text-center">
        <h2>Director not found.</h2>
      </div>
    );
  }

  return (
    <div className="card shadow-sm border-0 p-4">
      <h2 className="h3 fw-bold text-primary mb-2">{director.name}</h2>
      <p className="text-muted mb-4">{director.bio}</p>

      <div className="d-flex justify-content-between align-items-center mb-2">
        <h3 className="h5 fw-bold mb-0">Movies:</h3>
        <Link to={`movies/new`} className="btn btn-sm btn-success">
          <i className="bi bi-plus-lg me-1"></i>Add New Movie
        </Link>
      </div>

      <ul className="list-group mb-4">
        {director.movies.map((movie) => (
          <li key={movie.id} className="list-group-item">
            <Link
              to={`movies/${movie.id}`}
              className="text-decoration-none fw-medium"
            >
              <i className="bi bi-film me-2 text-secondary"></i>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>

      <Outlet context={context} />
    </div>
  );
}

export default DirectorCard;
