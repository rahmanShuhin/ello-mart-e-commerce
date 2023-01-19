import { useDispatch } from "react-redux";
import { addToCart, deleteFromCart, removeFromCart } from "../../../redux/cart";
import CrossIcon from "../../IconComponents/CrossIcon";

const CartItem = (cart) => {
    const { title, price, images, i, cartTotalQuantity } = cart;

    const dispatch = useDispatch();

    return (
        <div key={i} className="cart--item--section">
            <div className="flex align-center">
                <div className="cart--item--inside--img">
                    <img src={images} width="100%" alt="" />
                </div>
                <div className="cart--item--inside--info">
                    <h5>{title}</h5>
                    <p>
                        ${price} x {cartTotalQuantity}{" "}
                        <span className="price">
                            ${price * cartTotalQuantity}
                        </span>
                    </p>
                </div>
            </div>
            <div className="cart--item--right">
                <div
                    onClick={() => dispatch(deleteFromCart(cart))}
                    className="cross-icon"
                >
                    <CrossIcon />
                </div>
                <div className="add--to--cart">
                    {cartTotalQuantity >= 2 ? (
                        <span
                            onClick={() => dispatch(removeFromCart(cart))}
                            className="cart--icon--wrapper"
                        >
                            -
                        </span>
                    ) : (
                        <span className="cart--icon--wrapper gray">-</span>
                    )}
                    <span className="counter-text">{cartTotalQuantity}</span>
                    <span
                        onClick={() => dispatch(addToCart(cart))}
                        className="cart--icon--wrapper"
                    >
                        +
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
