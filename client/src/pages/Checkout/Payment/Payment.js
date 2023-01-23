import React from "react";
import bkash from "../../../assets/images/BKash-Logo.wine.svg";
import CheckoutProgress from "../../../components/Checkout/CheckoutProgress/CheckoutProgress";
import PriceInfo from "./../../../components/Checkout/PriceInfo/PriceInfo";

const Payment = () => {
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
                                Cash on delivery
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
                    <PriceInfo />
                </div>
            </div>
        </div>
    );
};

export default Payment;
