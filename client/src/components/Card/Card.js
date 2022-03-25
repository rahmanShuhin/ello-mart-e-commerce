import React from "react";
import EyeIcon from "../IconComponents/eye";
import FavouriteIcon from "../IconComponents/favourite";
import StarIcon from "../IconComponents/star";
import "./_card.scss";

const Card = ({ title, price, rating }) => {
  return (
    <div className="card--wrapper">
      <div className="card--wrapper--inner">
        <div className="card--image--holder">
          <div className="discount--text">50% off</div>
          <div className="card--hover--view">
            <div>
              <EyeIcon />
            </div>
            <div>
              <FavouriteIcon />
            </div>
          </div>
          <img
            src={require("../../assets/images/flash-1.webp")}
            alt=""
            width="100%"
          />
        </div>
        <div className="card--details--wrapper">
          <div className="card--details">
            <h3 className="card--title">{title}</h3>
            <div className="card--rating">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
            <div class="card--price">
              <span class="card--price--active">${price}</span>
              <span class="card--price--inactive">
                {" "}
                <del>250.00</del>{" "}
              </span>
            </div>
          </div>
          <div className="add--to--cart">
            <span className="cart--icon--wrapper">-</span>
            <span className="counter-text">1</span>
            <span className="cart--icon--wrapper">+</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
