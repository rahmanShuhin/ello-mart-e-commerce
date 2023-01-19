import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../../../components/Checkout/CartItem/CartItem';

const Cart = () => {

    const cart = useSelector( state => state.cart)

  return (
    <div className='cart--section container'>
        <>
            {cart?.cartItems.length > 0 &&
                cart?.cartItems.map((cart)=>(
                    <CartItem {...cart}/>
                ))
            }
        </>
    </div>
  )
}

export default Cart