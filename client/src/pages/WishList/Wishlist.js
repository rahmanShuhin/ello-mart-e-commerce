import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import emptyWishList from "../../assets/images/empty-wishlist.png";
import Card from '../../components/Card/Card';


const Wishlist = () => {

    const navigate = useNavigate();
    const wishlist = useSelector(state => state.wishlist)

  return (
    <>
        <section className="wishlist--section container">
            <div className="wishlist--container--header">
                <h2>My WIsh List</h2>
            </div>
            <div className="card--container--wrapper">
                {wishlist?.wishlistItems.length > 0 ?
                    wishlist?.wishlistItems.map((product,i) => (
                        <Card {...product} key={i}/>
                    )):
                    <div className='empty--wishlist'>
                        <img className='empty--wishlist--img' src={emptyWishList} alt="empty-wishlist" width="100%"/>
                        <span>Your Wish List is empty!</span>
                        <button onClick={()=> navigate('/')}>Start Shopping</button>
                    </div>
                }
            </div>
        </section>
    </>
  )
}

export default Wishlist