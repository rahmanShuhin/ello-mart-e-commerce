import React, { useState } from 'react';
import CheckoutProgress from '../../../components/Checkout/CheckoutProgess/CheckoutProgress';

const Details = () => {
  const [active] = useState('details');
  return (
    <div className='container'>
      <CheckoutProgress active={active}/>
      Details
    </div>
  )
}

export default Details