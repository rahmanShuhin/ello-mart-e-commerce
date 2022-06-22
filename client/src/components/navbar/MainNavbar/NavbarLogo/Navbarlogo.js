import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { categories } from "../../../../assets/data/navdata";
import logo from "../../../../assets/icons/NinjaMartMain.svg";
import CategoryIcon2 from "../../../IconComponents/CategoryIcon2";
import DownFilledIcon from "../../../IconComponents/DownFilledIcon";
import { useOnClickOutside } from './../../../../hooks/useOnClickOutside';

const Navbarlogo = () => {

    const [showMenuCategories, setShowMenuCategories] = useState(false);
    const [top, setTop] = useState(false);

    const menuCategoryRef = useRef(null);

    useOnClickOutside(menuCategoryRef,()=> setShowMenuCategories(false));

    useEffect(()=>{
      if (typeof window !== "undefined") {
        window.addEventListener("scroll", (e) => {
          let y = window.scrollY;
          let w = window.innerWidth;
          (y > 40 && w > 1023) ? setTop(true) : setTop(false);
        });
      }
    },[])
    

  return (
    <div className="navbar--wrapper--header">
      <div className="navbar--wrapper--header--logo">
        <Link to='/'>
          <img src={logo} alt="" />
        </Link>
      </div>
      {
        top && 
        <div className= 'navbar--wrapper--header--category'>
          <div 
            onClick={()=>setShowMenuCategories(!showMenuCategories)}
            className={showMenuCategories ? 'mouse-pointer d-flex' : 'd-flex'}
            >
            <CategoryIcon2 />
            <DownFilledIcon />
          </div>
          <ul 
              ref={menuCategoryRef} 
              className={showMenuCategories ? "menu-dropdown" : ""}
          >
              {showMenuCategories &&
                categories.map((category) => (
                  <li key={category.text}>{category.text}</li>
                ))}
            </ul>
        </div>
      }
      
    </div>
  )
}

export default Navbarlogo