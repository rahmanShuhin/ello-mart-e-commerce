import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router';
import emptyCart from "../../assets/images/emptyCart.JPG";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import { openCart } from "../../redux/SidebarCart";
import BagIcon from "../IconComponents/BagIcon";
import SideCartSingle from "./SideCartSingle/SideCartSingle";

const SideBarCart = () => {
    const [total, setTotal] = useState();
    const cartRef = useRef(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const openSideBarCart = useSelector((state) => state.sideCart.value);
    useOnClickOutside(cartRef, () => dispatch(openCart(false)));

    const cart = useSelector((state) => state.cart);

    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
            const getTotal = () => {
                let totalPrice = 0;
                cart.cartItems.forEach((item) => {
                    totalPrice += item.price * item.cartTotalQuantity;
                    setTotal(totalPrice);
                });
            };
            getTotal();
        }
        return () => {
            isMounted = false;
        };
    }, [cart]);

    return (
        <>
            <div
                ref={cartRef}
                className={
                    openSideBarCart ? "sidebar--cart" : "sidebar--cart--out"
                }
            >
                <div className="sidebar--cart--wrapper">
                    <div className="cart--header">
                        <BagIcon /> <h3> {cart.cartItems.length} items</h3>
                    </div>
                    <div className="cart--item--wrapper">
                        {cart.cartItems.length > 0 ? (
                            cart.cartItems?.map((cart) => (
                                <SideCartSingle {...cart} />
                            ))
                        ) : (
                            <div className="no--items">
                                <img
                                    src={emptyCart}
                                    alt="empty-cart"
                                    width="50%"
                                />
                                <span>Your shopping cart is empty.</span>
                            </div>
                        )}
                    </div>
                </div>
                <div className="sidebar--cart--checkout">
                    <button className="checkout--btn">Checkout Now {(cart.cartItems.length > 0) ? `( $${total} )` : ''}</button>
                    <button onClick={()=> {navigate('/cart');dispatch(openCart(false))}} className="view-cart--btn">View Cart</button>
                </div>
            </div>
            {openSideBarCart && <div className="sidebar--cart--backdrop" />}
        </>
    );
};

export default SideBarCart;
