//icons
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import { categories } from "../../assets/data/navdata";
import logo from "../../assets/icons/NinjaMartMain.svg";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import { openModal } from "../../redux/Modal";
import { openCart } from "../../redux/SidebarCart";
import BagIcon from "../IconComponents/BagIcon";
import CategoryIcon from "../IconComponents/CategoryIcon";
import DownFilledIcon from "../IconComponents/DownFilledIcon";
import DownIcon from "../IconComponents/DownIcon";
import SearchIcon from "../IconComponents/SearchIcon";
import UserIcon from "../IconComponents/UserIcon";
import WishListIcon from "../IconComponents/WishList";
import "./_navbar.scss";


const Navbar = () => {

  const [showAllCategories, setShowAllCategories] = useState(false);

  const categoryRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goToHomepage = () => navigate('/');
  const goToProfile = () => navigate('/profile');

  const user = JSON.parse(localStorage.getItem("user")) 
  

  let isLogged;

  (user === null) ? isLogged = false : isLogged = user.isVerified || false;
    
  useOnClickOutside(categoryRef,()=> setShowAllCategories(false))

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header--wrapper">
            <div className="header--wrapper--contact">
              <div>
                📞<span> +88012 3456 7894</span>{" "}
              </div>
              <div>
                📧<span> arifbhai-zindabad@gmail.com</span>{" "}
              </div>
            </div>
            <div className="header--wrapper--help">
              <div>FAQ</div>
              {/* <div>need help</div>
              <div>lang</div> */}
              <div>💸currency</div>
            </div>
          </div>
        </div>
      </header>

      <nav className="navbar">
        <section className="navbar--wrapper container">
          <div className="navbar--wrapper--header">
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
          </div>
          <div className="navbar--wrapper--search">
            <div className="navbar--wrapper--search--container ">
              <div className="navbar--wrapper--search--container--icon">
                <SearchIcon />
              </div>
              <div className="navbar--wrapper--search--container--searchbox">
                <input type="search" placeholder="search and hit enter.." />
              </div>
              <div className="navbar--wrapper--search--container--dropdown">
                {" "}
                <div className={showAllCategories ? 'mouse-pointer' : ""} onClick={() => setShowAllCategories(true)}>
                  <h4>All categories</h4>
                  <span className={showAllCategories ? "dropdown--icon rotate" : "dropdown--icon"}>
                    <DownIcon />
                  </span>
                </div>{" "}
                <ul ref={categoryRef} className={showAllCategories ? "dropdown-links" : " "}>
                  {showAllCategories &&
                    categories.map((category) => (
                      <li key={category.index}>{category.text}</li>
                    ))}
                </ul>
              </div>
            </div>
          </div>{" "}
          <div className="navbar--wrapper--icons">
            <div data-tooltip="cart" onClick={()=> dispatch(openCart(true))} className="navicon">     
                <BagIcon />
                <span className="navicon--badge">3</span>   
            </div>
            {
              isLogged && 
              <div data-tooltip="wishlist" onClick={goToHomepage} className="navicon"> 
                <WishListIcon/>
              </div>
            }
            {
              isLogged ?
              <div data-tooltip="profile" onClick={goToProfile} className="navicon"> 
                <UserIcon />
              </div>
              :
              <div data-tooltip="login" onClick={()=> dispatch(openModal('login'))} className="navicon"> 
                <UserIcon />
              </div>
            }
          </div>
        </section>
      </nav>
    </>
  );
}
export default Navbar
