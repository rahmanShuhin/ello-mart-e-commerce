
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { alertMessage, alertType } from '../../redux/alertBox';
import { logout } from '../../redux/Auth';
import { openModal } from "../../redux/Modal";
import { openCart } from "../../redux/SidebarCart";
import BagIcon from "../IconComponents/BagIcon";
import LogoutIcon from "../IconComponents/LogoutIcon";
import UserIcon from "../IconComponents/UserIcon";
import WishListIcon from "../IconComponents/WishList";
import { useOnClickOutsideWithSecondRef } from './../../hooks/useOnClickOutsideWithSecondRef';
import BottomNavbar from "./BottomNavbar/BottomNavbar";
import Navbarlogo from "./MainNavbar/NavbarLogo/Navbarlogo";
import NavbarSearch from "./MainNavbar/NavbarSearch/NavbarSearch";
import TopMiniNavbar from "./TopMiniNavbar/TopMiniNavbar";
import "./_navbar.scss";


const Navbar = () => {


  const [showProfile, setShowProfile] = useState(false);
  const [height, setHeight] = useState(false);

  const profileRef = useRef(null);
  const profileLogoRef = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goToHomepage = () => navigate('/');
  const goToProfile = () => {navigate('/profile'); setShowProfile(false)};

  useOnClickOutsideWithSecondRef(profileRef,profileLogoRef,()=> setShowProfile(false));

  const user = JSON.parse(localStorage.getItem("user")) 

  useEffect(()=>{
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", (e) => {
        let y = window.scrollY;
        let w = window.innerWidth;
        (y > 100 && w > 1023) ? setHeight(true) : setHeight(false);
      });
    }
  },[])

  //----- verifying user -------
  let isLogged;

  (user === null) ? isLogged = false : isLogged = user.isVerified || false;
  

  const handleLogout = () =>{
      dispatch(logout()).then((res)=>{
          if(res.payload.status === 202){
              dispatch(alertType('success'))
              dispatch(alertMessage(res.payload.data.message))
              localStorage.removeItem('user')
              navigate('/')
              setShowProfile(false)
              // console.log(res)
          }
      })
      dispatch(alertType(''))
 }

  return (
    <>
      <TopMiniNavbar/>
      <nav className={`navbar ${height ? 'shadow' : ''}`}>
        <section className='navbar--wrapper container'>
          <Navbarlogo/>
          <NavbarSearch/>
          <div className="navbar--wrapper--icons">
            <div title="cart" onClick={()=> dispatch(openCart(true))} className="navicon">     
                <BagIcon />
                <span className="navicon--badge">3</span>   
            </div>
            {
              isLogged && 
              <div title="wishlist" onClick={goToHomepage} className="navicon"> 
                <WishListIcon/>
              </div>
            }
            {
              isLogged ?
              <div style={{position:"relative"}}>
                <div 
                    ref={profileLogoRef}
                    title="profile" 
                    onClick={()=>{setShowProfile(!showProfile)}} 
                    className="navicon"
                > 
                  <UserIcon />
                </div>
                {
                  showProfile && 
                  <ul ref={profileRef} className='profile--dropdown'>
                    <li
                      className="profile--dropdown--link" 
                      onClick={goToProfile}
                    >
                      <span> <UserIcon/> </span> Profile
                    </li>
                    <li 
                      className="profile--dropdown--link"  
                      onClick={handleLogout}
                    >
                      <span><LogoutIcon/></span> Logout
                    </li>
                  </ul>
                }
              </div>
              :
              <div data-tooltip="login" onClick={()=> dispatch(openModal('login'))} className="navicon"> 
                <UserIcon />
              </div>
            }
          </div>
        </section>
      </nav>
      <BottomNavbar/>
    </>
  );
}
export default Navbar
