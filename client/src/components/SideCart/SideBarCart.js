import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CART_DATA } from '../../assets/data/cartData';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import { openCart } from '../../redux/SidebarCart';
import BagIcon from '../IconComponents/BagIcon';
import CrossIcon from '../IconComponents/CrossIcon';
import SideCartSingle from './SideCartSingle/SideCartSingle';
 
  const SideBarCart = () => {

  const cartRef = useRef(null);
  const dispatch = useDispatch();
  const openSideBarCart = useSelector(state => state.sideCart.value);
    useOnClickOutside(cartRef,() => dispatch(openCart(false)))
  
  return (
      <>
        <div 
          ref={cartRef} 
          className={openSideBarCart ? 'sidebar--cart': 'sidebar--cart--out'}
        >
          <div className="sidebar--cart--wrapper">
            <div className="cart--header">
              <BagIcon/> <h3> 03 items</h3> 
            </div>
            <div className="cart--item--wrapper">
              {
                CART_DATA.map((cart,i)=>(
                  <SideCartSingle
                    title = {cart.title}
                    price = {cart.price}
                    image = {cart.images}
                  />
                ))
              }
            </div>  
          </div>
          <div className='sidebar--cart--checkout'>
            <button>Checkout</button>
          </div>
        </div>
        {openSideBarCart && <div className= 'sidebar--cart--backdrop'/>}
      </>
    
  )
}

export default SideBarCart