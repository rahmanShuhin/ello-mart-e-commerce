import React from 'react'

const PriceInfo = () => {
  return (
    <div className='price-info--section'>
        <div>
            <span>Subtotal:</span><span>$2610.00</span>
        </div>
        <div>
            <span>Shipping:</span><span>-</span>
        </div>
        <div>
            <span>Tax:</span><span>$40</span>
        </div>
        <div>
            <span>Discount:</span><span>-</span>
        </div>
        <span className='divider'/>
        <div>
        <span>Total:</span><span>$2610.00</span>
        </div>
        <div className='voucher-input--group'>
            <input className='voucher--input' type="text" placeholder='Voucher'/>
            <button>Apply Voucher</button>
        </div>
    </div>
  )
}

export default PriceInfo