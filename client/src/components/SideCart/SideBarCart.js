import React from 'react';
import { CART_DATA } from '../../assets/data/cartData';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import BagIcon from '../IconComponents/BagIcon';
import CrossIcon from '../IconComponents/CrossIcon';

const SideBarCart = ({openSideBarCart, setOpenSideBarCart}) => {

  const cartRef = React.useRef(null)
  useOnClickOutside(cartRef,()=>setOpenSideBarCart(false))

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
                  <div className="cart--item">
                    <div className="add--to--cart">
                      <span className="cart--icon--wrapper">-</span>
                      <span className="counter-text">1</span>
                      <span className="cart--icon--wrapper">+</span>
                    </div>
                    <div className="cart--item--inside">
                      <div className="cart--item--inside--img">
                        <img src={require('../../assets/images/flash-1.webp')} width="100%" alt="" />
                      </div>
                      <div className="cart--item--inside--info">
                        <h5>volvo car</h5>
                        <p>$250 x 1</p>
                        <p className='price'>$210.00</p>
                      </div>
                    </div>
                    <div className='cross-icon'>
                      <CrossIcon/>
                    </div>
                  </div>
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