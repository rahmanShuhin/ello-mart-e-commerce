import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <div className="left">
          <Link to="/">
            <h1>HomeLogo</h1>
          </Link>
        </div>
        {/* <SearchBar></SearchBar> */}
        <div className="center">
          <label>
            <input className="search-input" placeholder="search" type="text" />
          </label>
        </div>
        <div className="right">
          <div className="calls">
            <h1>available</h1>
            <p>call now</p>
          </div>
          <i>icon</i>
          <i>icon</i>
          <i>icon</i>
        </div>
      </nav>
    </div>
  );
}
