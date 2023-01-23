import React, { useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../../../components/Checkout/CartItem/CartItem";
import CheckoutProgress from "../../../components/Checkout/CheckoutProgress/CheckoutProgress";
import PriceInfo from "../../../components/Checkout/PriceInfo/PriceInfo";

const Cart = () => {
    const cart = useSelector((state) => state.cart);

    const [active] = useState('cart');

    return (
        <div className="container">
            <CheckoutProgress active={active}/>
            <div className="cart--section">
                <div className="cart-item--wrapper">
                    {cart?.cartItems.length > 0 &&
                        cart?.cartItems.map((cart) => <CartItem {...cart} />)}
                </div>
                <div className="price-info--wrapper">
                    <PriceInfo/>
                </div>
            </div>
        </div>
    );
};

export default Cart;
