import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function ErrorPage() {
  return (
    <>
      <NavBar />
      <main>
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <Link to="/">Return to Home</Link>
      </main>
    </>
  );
}
