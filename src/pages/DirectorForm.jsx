import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

function DirectorForm() {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");

  const { setDirectors } = useOutletContext();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newDirector = { name, bio, movies: [] };

    fetch("http://localhost:4000/directors", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newDirector),
    })
      .then((r) => {
        if (!r.ok) {
          throw new Error("failed to add director");
        }
        return r.json();
      })
      .then((data) => {
        setDirectors((prevDirectors) => [...prevDirectors, data]);
        navigate(`/directors/${data.id}`);
      })
      .catch(console.log);
  };

  return (
    <div className="card shadow-sm border-0 p-4">
      <h2 className="h4 fw-bold mb-3">Add New Director</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Director's Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            rows="4"
            placeholder="Director's Bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Add Director
        </button>
      </form>
    </div>
  );
}

export default DirectorForm;
