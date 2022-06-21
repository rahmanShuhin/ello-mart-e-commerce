import { categories } from './../../../assets/data/navdata';
import CategoryIcon from './../../IconComponents/CategoryIcon';
import DownIcon from './../../IconComponents/DownIcon';

const BottomNavbar = () => {

  return (
    <div className="bottom-navbar">
        <div className="bottom-navbar-wrapper container">
            <div className='bottom-navbar-category'>
                <CategoryIcon/>
                <span> Categories  </span>  
                <DownIcon /> 
            </div>
            <ul className="bottom-navbar-wrapper-dropdown">
                  {
                    categories.map((category) => (
                        <li key={category.text}>
                            {category.text}
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