import React from 'react';
import { useNavigate } from 'react-router';

const CheckoutProgress = ({active}) => {

    const navigate = useNavigate();

  return (
    <div className="checkout--progress">
        <div onClick={()=>navigate('/cart')}>1. Cart</div>
        <div className={(active === 'details' || active === 'payment') && 'line--active'}></div>
        <div className={(active === 'details' || active === 'payment') && 'active'} onClick={()=>navigate('/Details')}>2. Details</div>
        <div className={(active === 'payment') && 'line--active'}></div>
        <div className={(active === 'payment') && 'active'} onClick={()=>navigate('/payment')}>3. Payment</div>
    </div>
  )
}

export default CheckoutProgress;