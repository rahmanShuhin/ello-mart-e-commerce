import { useRef, useState } from 'react';
import { categories } from "../../../../assets/data/navdata";
import DownIcon from "../../../IconComponents/DownIcon";
import SearchIcon from "../../../IconComponents/SearchIcon";
import { useOnClickOutside } from './../../../../hooks/useOnClickOutside';

const NavbarSearch = () => {

    const [showAllCategories, setShowAllCategories] = useState(false);

    const categoryRef = useRef(null);

    useOnClickOutside(categoryRef,()=> setShowAllCategories(false));

  return (
        <div className="navbar--wrapper--search">
            <div className="navbar--wrapper--search--container ">
              <div className="navbar--wrapper--search--container--icon">
                <SearchIcon />
              </div>
              <div className="navbar--wrapper--search--container--searchbox">
                <input type="search" placeholder="search and hit enter.." />
              </div>
              <div className="navbar--wrapper--search--container--dropdown">
    
                <div 
                    className={showAllCategories ? 'mouse-pointer' : ""} onClick={() =>    setShowAllCategories(true)}
                >
                    <h4>All categories</h4>
                    <span className={showAllCategories ? "dropdown--icon rotate" : "dropdown--icon"}>
                        <DownIcon />
                    </span>
                </div>
                    <ul ref={categoryRef} className={showAllCategories ? "dropdown-links" : " "}>
                    {showAllCategories &&
                        categories.map((category) => (
                        <li key={category.index}>{category.text}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
  )
}

export default NavbarSearch