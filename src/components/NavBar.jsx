import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar bg-light border-bottom shadow-sm py-3 mb-4">
      <div className="container d-flex justify-content-center flex-wrap gap-2">
        <NavLink to="/" end className="rounded fw-semibold">
          <i className="bi bi-house-door-fill me-1"></i> Home
        </NavLink>
        <NavLink to="/directors" end className="rounded fw-semibold">
          <i className="bi bi-people-fill me-1"></i> Directors
        </NavLink>
        <NavLink to="/directors/new" className="rounded fw-semibold">
          <i className="bi bi-plus-circle-fill me-1"></i> Add Director
        </NavLink>
        <NavLink to="/about" className="rounded fw-semibold">
          <i className="bi bi-info-circle-fill me-1"></i> About
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
