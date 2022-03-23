//icons
import logo from "../../assets/icons/riadmart.svg";
import BagIcon from "./BagIcon";
import CategoryIcon from "./CategoryIcon";
import DownFilledIcon from "./DownFilledIcon";
import DownIcon from "./DownIcon";
import "./Navbar.css";
import SearchIcon from "./SearchIcon";
import UserIcon from "./UserIcon";
export default function Navbar() {
  return (
    <>
      <header className="header">
        <div className="header--wrapper">
          <article className="header--wrapper--contact">
            <div>
              📞<span> +88012 3456 7894</span>{" "}
            </div>
            <div>
              📧<span> aldflasfj@gmail.com</span>{" "}
            </div>
          </article>
          <article className="header--wrapper--help">
            <div>FAQ</div>
            <div>need help</div>
            <div>lang</div>
            <div>💸currency</div>
          </article>
        </div>
      </header>

      <nav className="navbar">
        <section className="navbar--wrapper">
          <article className="navbar--wrapper--header">
            <div className="navbar--wrapper--header--logo">
              <img src={logo} alt="" />
            </div>
            <div>
              <CategoryIcon />
            </div>
            <div>
              <DownFilledIcon />
            </div>
          </article>
          <article className="navbar--wrapper--search">
            <div className="navbar--wrapper--search--container ">
              <div className="navbar--wrapper--search--container--icon">
                <SearchIcon />
              </div>
              <div className="navbar--wrapper--search--container--searchbox">
                <input type="search" placeholder="search and hit enter.." />
              </div>
              <div className="navbar--wrapper--search--container--dropdown">
                <h4>all categories </h4>
                <div>
                  <DownIcon />
                </div>
              </div>
            </div>
          </article>
          <article className="navbar--wrapper--icons">
            <div>
              <UserIcon />
            </div>
            <div>
              <BagIcon />
            </div>
          </article>
        </section>
      </nav>
    </>
  );
}
