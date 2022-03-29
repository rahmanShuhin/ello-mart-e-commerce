import { useState } from 'react';
import CrossIcon from '../../IconComponents/CrossIcon';

const SideCartSingle = ({title, price, image}) => {

    const [count, setCount] = useState(1)

    const plus = () => setCount(prev => prev + 1);
    const minus = () => (count > 1) && setCount(prev => prev - 1);

  return (
    <div className="cart--item">
        <div className="add--to--cart">
            <span onClick={minus} className="cart--icon--wrapper">-</span>
            <span className="counter-text">{count}</span>
            <span onClick={plus} className="cart--icon--wrapper">+</span>
        </div>
        <div className="cart--item--inside">
            <div className="cart--item--inside--img">
            <img src={image} width="100%" alt="" />
            </div>
            <div className="cart--item--inside--info">
            <h5>{title}</h5>
            <p>${price} x {count}</p>
            <p className='price'>${price*count}</p>
            </div>
        </div>
        <div className='cross-icon'>
            <CrossIcon/>
        </div>
    </div>
  )
}

export default SideCartSingle