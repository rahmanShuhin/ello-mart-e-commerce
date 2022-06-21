import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { categories } from './../../../assets/data/navdata';
import { useOnClickOutsideWithSecondRef } from './../../../hooks/useOnClickOutsideWithSecondRef';
import CategoryIcon from './../../IconComponents/CategoryIcon';
import DownIcon from './../../IconComponents/DownIcon';
import RightArrowIcon from './../../IconComponents/rightArrow';

const BottomNavbar = () => {

    const [activeCategory,setActiveCategory] = useState('');
    const [open,setOpen] = useState(false);

    const location = useLocation();
    const categoryDropdownRef = useRef(null);
    const newRef = useRef(null)

    useOnClickOutsideWithSecondRef(categoryDropdownRef,newRef,()=>setOpen(false));

    useEffect(()=>{
        setActiveCategory(location.pathname);
    },[location.pathname])

  return (
    <div className="bottom-navbar">
        <div  className="bottom-navbar-wrapper container">
            <div
                ref={newRef}
                className={`${open ? 'active-category' : ''}
                bottom-navbar-category`}
                onClick={()=>setOpen(!open)}
            >
                <CategoryIcon/>
                <span> Categories </span> 
                <span className={activeCategory !== '/' && open ? 'down-icon' : 'rotate down-icon'}>
                    <DownIcon />
                </span>   
            </div>
            {
                (activeCategory === '/' || open) && 
                <ul 
                    ref={categoryDropdownRef} 
                    className='bottom-navbar-wrapper-dropdown'>
                  {
                    categories.map((category) => (
                        <li key={category.text}>
                            {category.text}
                            {
                                (category?.subCategory) && <RightArrowIcon />
                            }
                            {
                                (category?.subCategory) && 
                                <ul>
                                    {category?.subCategory?.map((subCategory) => (
                                            <li key={subCategory.name}>
                                                {subCategory.name}  
                                            </li> 
                                    ))}
                                </ul>
                            }
                        </li>
                    ))}
            </ul>
            } 
            <div className='bottom-navbar-links-wrapper'>
                <ul>
                    <li>Home</li>
                    <li>Trending</li>
                    <li>New arrivel</li>
                    <li>Limited edition</li>
                </ul>
            </div>
        </div>
       


    </div>
  )
}

export default BottomNavbar