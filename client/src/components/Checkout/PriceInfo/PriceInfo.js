import React from 'react';
import { useSelector } from 'react-redux';

const PriceInfo = () => {

    // const [total, setTotal] = useState();

    // useEffect(() => {
    //     let isMounted = true;
    //     if (isMounted) {
    //         const getTotal = () => {
    //             let totalPrice = 0;
    //             cart?.cartItems.forEach((item) => {
    //                 totalPrice += item.price * item.cartTotalQuantity;
    //                 setTotal(totalPrice);
    //             });
    //         };
    //         getTotal();
    //     }
    //     return () => {
    //         isMounted = false;
    //     };
    // }, [cart]);

    const {cartTotalAmount, cartTotalAmountWithTax} = useSelector(state=> state.cart)

  return (
    <div className='price-info--section'>
        <div>
            <span>Subtotal:</span><span>${cartTotalAmount}</span>
        </div>
        <div>
            <span>Shipping:</span><span>$0</span>
        </div>
        <div>
            <span>Tax:</span><span>$4.00</span>
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