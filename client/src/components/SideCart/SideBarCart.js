import React from 'react'
import { useOnClickOutside } from '../../hooks/useOnClickOutside'
import BagIcon from '../IconComponents/BagIcon'

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
            <div className="cart--item">
              <div className="add--to--cart">
                <span className="cart--icon--wrapper">-</span>
                <span className="counter-text">1</span>
                <span className="cart--icon--wrapper">+</span>
              </div>
            </div>
          </div>
        </div>
        <div className={openSideBarCart && 'sidebar--cart--backdrop'}/>
      </>
    
  )
}

export default SideBarCart