import React from "react";
import { useSelector } from "react-redux";
import cash from "../../../assets/icons/cash-icon.svg";
import bkash from "../../../assets/images/BKash-Logo.wine.svg";
import CheckoutProgress from "../../../components/Checkout/CheckoutProgress/CheckoutProgress";
import PriceInfo from "./../../../components/Checkout/PriceInfo/PriceInfo";

const Payment = () => {
    const cart = useSelector((state) => state.cart);
    return (
        <div className="container">
            <CheckoutProgress active="payment" />
            <div className="payment--section">
                <div className="payment--section--wrapper">
                    <h3>Payment Method</h3>
                    <div className="radio--group--wrapper">
                        <div className="radio--group">
                            <input
                                id="cash-on-delivery"
                                type="radio"
                                name="payment"
                            />
                            <label htmlFor="cash-on-delivery">
                            <img src={cash} alt="cash on delivery" width="100%" />
                            </label>
                        </div>
                        <div className="radio--group">
                            <input id="bkash" type="radio" name="payment" />
                            <label htmlFor="bkash">
                              <img src={bkash} alt="bkash" width="100%" />
                            </label>
                        </div>
                    </div>
                </div>
                <div className="price-info--wrapper">
                    <PriceInfo {...cart}/>
                </div>
            </div>
        </div>
    );
};

export default Payment;
