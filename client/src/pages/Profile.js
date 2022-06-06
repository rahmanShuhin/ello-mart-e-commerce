import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LocationIcon from "../components/IconComponents/LocationIcon";
import LogoutIcon from "../components/IconComponents/LogoutIcon";
import OrderIcon from "../components/IconComponents/OrderIcon";
import ProfileIcon from "../components/IconComponents/ProfileIcon";
import Address from '../components/Profile/Address/Address';
import Information from '../components/Profile/Information/Information';
import Order from '../components/Profile/Order/Order';
import { alertMessage, alertType } from '../redux/alertBox';
import { logout } from '../redux/Auth';


const Profile = () => {

    const [active, setActive] = useState('info');

    const dispatch = useDispatch();
    const navigate = useNavigate();
   
    const handleLogout = () =>{
        dispatch(logout()).then((res)=>{
            if(res.payload.status === 202){
                dispatch(alertType('success'))
                dispatch(alertMessage(res.payload.data.message))
                localStorage.removeItem('user')
                navigate('/')
                // console.log(res)
            }
        })
        dispatch(alertType(''))
   }


  return (
      <section className='profile--main'>
        <div className="container">
            <span className='navigation--text'>Home / <span>profile</span></span>
            <h2 className='profile--header'>My Profile</h2>
            <div className='profile--wrapper'>
                <div className='profile--wrapper--left'>
                    <ul>
                        <li onClick={()=>setActive('info')}
                            className={active === 'info' ? 'active' : ''}
                        > 
                            <span>
                                <ProfileIcon/>
                            </span> 
                            My information 
                        </li>
                        <li onClick={()=>setActive('address')}
                            className={active === 'address' ? 'active' : ''}
                        > 
                            <span>
                                <LocationIcon/> 
                            </span> 
                            Address book 
                        </li>
                        <li onClick={()=>setActive('order')}
                            className={active === 'order' ? 'active' : ''}
                        > 
                            <span>
                                <OrderIcon/>
                            </span> 
                            My orders 
                        </li>
                        <li onClick={handleLogout}>
                            <span>
                                <LogoutIcon/>
                            </span>
                            Logout
                        </li>
                    </ul>
                    
                </div>
                <div className='profile--wrapper--right'>
                    {
                        active === 'info' && <Information/>
                    }
                    {
                        active === 'address' && <Address/>
                    }
                    {
                        active === 'order' && <Order/>
                    }
                </div>
            </div>
        </div>
      </section>
    
  )
}

export default Profile;