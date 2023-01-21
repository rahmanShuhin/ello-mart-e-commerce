import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../../../components/Checkout/CartItem/CartItem';
import PriceInfo from '../../../components/Checkout/PriceInfo/PriceInfo';

const Cart = () => {

    const cart = useSelector( state => state.cart)

  return (
    <div className='cart--section container'>
        <div className='cart-item--wrapper'>
            {cart?.cartItems.length > 0 &&
                cart?.cartItems.map((cart)=>(
                    <CartItem {...cart}/>
                ))
            }
        </div>
        <div className='price-info--wrapper'>
            <PriceInfo/>
        </div>

    </div>
  )
}

export default Cart