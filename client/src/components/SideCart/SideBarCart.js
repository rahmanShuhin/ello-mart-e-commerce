import React from 'react'
import { useOnClickOutside } from '../../hooks/useOnClickOutside'

const SideBarCart = ({openSideBarCart, setOpenSideBarCart}) => {

  const cartRef = React.useRef(null)
  useOnClickOutside(cartRef,()=>setOpenSideBarCart(false))

  return (
      <>
        
          <div ref={cartRef} className={openSideBarCart ? 'sidebar--cart--main-wrapper': 'sidebar--cart--out'}>
            SideCart
          </div>
        
        <div className={openSideBarCart && 'sidebar--cart--backdrop'}/>
      </>
    
  )
}

export default SideBarCart