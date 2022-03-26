//icons
import { useRef, useState } from "react";
<<<<<<< HEAD
=======
import { Link } from 'react-router-dom';
>>>>>>> b836d7bbbc7a34881248de3341467120f37f6fef
import { categories } from "../../assets/data/navdata";
import logo from "../../assets/icons/NinjaMartMain.svg";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import BagIcon from "../IconComponents/BagIcon";
import CategoryIcon from "../IconComponents/CategoryIcon";
import DownFilledIcon from "../IconComponents/DownFilledIcon";
import DownIcon from "../IconComponents/DownIcon";
import SearchIcon from "../IconComponents/SearchIcon";
import UserIcon from "../IconComponents/UserIcon";
import "./_navbar.scss";

<<<<<<< HEAD
export default function Navbar() {
=======
export default function Navbar({handleOpenCart}) {

>>>>>>> b836d7bbbc7a34881248de3341467120f37f6fef
  const [showAllCategories, setShowAllCategories] = useState(false);
  const categoryRef = useRef(null);
  useOnClickOutside(categoryRef, () => setShowAllCategories(false));
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header--wrapper">
            <article className="header--wrapper--contact">
              <div>
                📞<span> +88012 3456 7894</span>{" "}
              </div>
              <div>
                📧<span> arifbhai-zindabad@gmail.com</span>{" "}
              </div>
            </article>
            <article className="header--wrapper--help">
              <div>FAQ</div>
              {/* <div>need help</div>
              <div>lang</div> */}
              <div>💸currency</div>
            </article>
          </div>
        </div>
      </header>

      <nav className="navbar">
        <section className="navbar--wrapper container">
          <article className="navbar--wrapper--header">
            <div className="navbar--wrapper--header--logo">
              <Link to='/'>
                <img src={logo} alt="" />
              </Link>
            </div>
            <div className="navbar--wrapper--header--category">
              <div>
                <CategoryIcon />
              </div>
              <div>
                <DownFilledIcon />
              </div>
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
                {" "}
                <div onClick={() => setShowAllCategories(!showAllCategories)}>
                  <h4>All categories</h4>
                  <span
                    className={
                      showAllCategories
                        ? "dropdown--icon rotate"
                        : "dropdown--icon"
                    }
                  >
                    <DownIcon />
                  </span>
                </div>{" "}
                <ul
                  ref={categoryRef}
                  className={showAllCategories && "dropdown-links"}
                >
                  {showAllCategories &&
                    categories.map((category) => (
                      <li key={category.index}>{category.text}</li>
                    ))}
                </ul>
              </div>
            </div>
          </article>{" "}
          <article className="navbar--wrapper--icons">
            <div className="navicon">
              <a href="#">
                <i>
                  {" "}
                  <UserIcon />
                </i>
              </a>
            </div>
            <div onClick={handleOpenCart} class="navicon">
              <a href="#">
                <i>
                  {" "}
                  <BagIcon />
                </i>
                <span class="navicon--badge">3</span>
              </a>
            </div>
          </article>
        </section>
      </nav>
    </>
  );
}
