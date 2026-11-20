import { Link, useOutletContext } from "react-router-dom";

const DirectorList = () => {
  const context = useOutletContext();
  const directors = context?.directors || [];

  const displayDirectors = directors.map((d) => (
    <li
      key={d.id}
      className="list-group-item d-flex justify-content-between align-items-center p-3"
    >
      <Link
        to={`/directors/${d.id}`}
        className="fw-semibold text-decoration-none fs-5"
      >
        <i className="bi bi-camera-reels text-primary me-2"></i>
        {d.name}
      </Link>
      <span className="badge bg-primary rounded-pill">
        {d.movies?.length || 0} {d.movies?.length === 1 ? "Movie" : "Movies"}
      </span>
    </li>
  ));

  return (
    <div className="card shadow-sm border-0">
      <ul className="list-group list-group-flush">{displayDirectors}</ul>
    </div>
  );
};

export default DirectorList;
