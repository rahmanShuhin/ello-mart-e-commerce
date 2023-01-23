import React from 'react';
import { useSelector } from 'react-redux';

const PriceInfo = () => {

    const {cartTotalAmount, cartTotalAmountWithTax, tax, shipping} = useSelector(state=> state.cart)

  return (
    <div className='price-info--section'>
        <div>
            <span>Subtotal:</span><span>${cartTotalAmount}</span>
        </div>
        <div>
            <span>Shipping:</span><span>${shipping}</span>
        </div>
        <div>
            <span>Tax:</span><span>${tax}</span>
        </div>
        <span className='divider'/>
        <div>
        <span>Total:</span><span>${cartTotalAmountWithTax}</span>
        </div>
        <div className='voucher-input--group'>
            <input className='voucher--input' type="text" placeholder='Voucher'/>
            <button>Apply Voucher</button>
        </div>
    </div>
  )
}

export default PriceInfo