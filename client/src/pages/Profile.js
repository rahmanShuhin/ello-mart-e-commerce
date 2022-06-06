import React from 'react';
import LoadingSpinner from '../components/LoadingSpiner/LoadingSpinner';

const Profile = () => {
  return (
      <section className='profile--main'>
        <div className="container">
            <div>My Profile</div>
            <LoadingSpinner/>
        </div>
      </section>
    
  )
}

export default Profile;