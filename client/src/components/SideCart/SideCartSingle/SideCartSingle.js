import { useDispatch } from 'react-redux';
import { addToCart, deleteFromCart, removeFromCart } from '../../../redux/cart';
import CrossIcon from '../../IconComponents/CrossIcon';

const SideCartSingle = (cart) => {

    const {title, price, images , i, cartTotalQuantity} = cart
    console.log(typeof(cartTotalQuantity))
    const dispatch = useDispatch()

  return (
    <div key={i} className="cart--item">
        <div className="add--to--cart">
            {
                cartTotalQuantity >= 2 ? <span onClick={()=> dispatch(removeFromCart(cart))} className="cart--icon--wrapper">-</span> :
                <span className="cart--icon--wrapper gray">-</span>
            }
            <span className="counter-text">{cartTotalQuantity}</span>
            <span onClick={()=> dispatch(addToCart(cart))} className="cart--icon--wrapper">+</span>
        </div>
        <div className="cart--item--inside">
            <div className="cart--item--inside--img">
            <img src={images} width="100%" alt="" />
            </div>
            <div className="cart--item--inside--info">
            <h5>{title}</h5>
            <p>${price} x {cartTotalQuantity}</p>
            <p className='price'>${price*cartTotalQuantity}</p>
            </div>
        </div>
        <div onClick={()=> dispatch(deleteFromCart(cart))} className='cross-icon'>
            <CrossIcon/>
        </div>
    </div>
  )
}

export default SideCartSingle