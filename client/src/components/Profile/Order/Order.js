import React from 'react';
import emptyCart from '../../../assets/images/empty_cart.svg';

const Order = () => {

  const orderStyle = {
    backgroundColor: "#f1f1f1",
    padding: "1rem 2rem",
    borderRadius: "6px",
    fontWeight:"600",
    color:"gray",
    border:"1px solid lightgray",
    textAlign: "center"
  }
  return (
    <>
      <div style={orderStyle}> Currently you don't have any order!</div>
      <div style={{display:"flex", justifyContent:"center", padding:"2rem 0"}}>
        <img src={emptyCart} alt=''/>
      </div>
        
    </>
    
  )
}

export default Order;