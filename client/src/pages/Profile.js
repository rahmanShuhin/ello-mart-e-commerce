import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LocationIcon from "../components/IconComponents/LocationIcon";
import LogoutIcon from "../components/IconComponents/LogoutIcon";
import OrderIcon from "../components/IconComponents/OrderIcon";
import ProfileIcon from "../components/IconComponents/ProfileIcon";
import { alertMessage, alertType } from '../redux/alertBox';
import { logout } from '../redux/Auth';


const Profile = () => {

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
                        <li> <span><ProfileIcon/> </span> My information </li>
                        <li> <span><LocationIcon/> </span> My address </li>
                        <li> <span><OrderIcon/></span> My Order </li>
                        <li onClick={handleLogout}> <span><LogoutIcon/></span> Logout </li>
                    </ul>
                    
                </div>
                <div className='profile--wrapper--right'>
                    right
                </div>
            </div>
        </div>
      </section>
    
  )
}

export default Profile;