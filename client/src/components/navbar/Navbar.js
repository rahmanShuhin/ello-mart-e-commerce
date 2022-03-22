import { Link } from "react-router-dom";
import searchIcon from "../../assets/icons/charm_search.svg";
import "./Navbar.scss";
export default function Navbar() {
  return (
    <div className="navbar">
      <nav className="navbar-upper">
        <div className="navbar-upper-left">
          <Link to="/">
            <h1>HomeLogo</h1>
          </Link>
        </div>
        {/* <SearchBar></SearchBar> */}
        <div className="navbar-upper-center">
          <span className="navbar-upper-center-search">
            <input
              className="navbar-upper-center-search-input"
              placeholder="search"
              type="text"
            />
            <img src={searchIcon} alt="" />
          </span>
        </div>
        <div className="navbar-upper-right">
          <div className="navbar-upper-right-calls">
            <h1>available</h1>
            <p>call now</p>
          </div>
          <i>icon</i>
          <i>icon</i>
          <i>icon</i>
        </div>
      </nav>

      <section className="navbar-bottom">
        <div className="navbar-bottom-names">
          <ul>
            <li>NEW IN </li>
            <li>MUST HAVE </li>
            <li>TREND </li>
            <li>THEME DEMOS </li>
            <li>CHILD THEME</li>
            <li>PAGES</li>
            <li>BUY THEME</li>
          </ul>
        </div>
        <div className="navbar-bottom-support">
          <h1>help | lang</h1>
        </div>
      </section>
    </div>
  );
}
