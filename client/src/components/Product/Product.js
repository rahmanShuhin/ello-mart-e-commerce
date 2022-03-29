import React, { useState } from "react";
import { fakeData } from "../../assets/data/fakeData";
import StarIcon from "../IconComponents/star";
import { ImageMagnifier } from "../ImageMagnifier/ImageMagnifier";

const Product = () => {
  const [activeImg, setActiveImg] = useState(0);
  const [activeContent, setActiveContent] = useState("description");
  const [size, setSize] = useState(0);
  const [color, setColor] = useState(0);
  const [count, setCount] = useState(1)

  const plus = () => setCount(prev => prev + 1);
  const minus = () => (count > 1) && setCount(prev => prev - 1);

  return (
    //  product details page
    <section className="product">
      {/* ----------page top product details section------------------ */}
      <div className="product__top container">
        <div className="product__top__left">
          <div className="product__top__left__imgActive">
            {/* ----image magnifier--------*/}
            <ImageMagnifier width={300} src={fakeData.images[activeImg]}/>
          </div>
          <div className="product__top__left__imgGallery">
            {fakeData.images.map((img, index) => (
              <div
                onClick={() => setActiveImg(index)}
                className={index === activeImg && "active"}
              >
                <img src={img} alt="" />
              </div>
            ))}
          </div>
        </div>
        <div className="product__top__right">
          <h1>{fakeData.title}</h1>
          <p>
            {" "}
            <span>Brand:</span> &nbsp;Ziomi
          </p>
          <p>
            <span>Rated: &nbsp;</span>
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            &nbsp; (50)
          </p>
          <p>${fakeData.price}</p>
          <p>Stock Available</p>
          <div className="product__top__right__sizes">
            <p>
              <span>Size : </span>
              {fakeData.sizes[size]}
            </p>
            <div>
              {fakeData.sizes.map((siz, index) => (
                <p
                  className={index === size && "active"}
                  onClick={() => setSize(index)}
                >
                  {siz}
                </p>
              ))}
            </div>
          </div>
          <div className="product__top__right__colors">
            <p>
              <span>Color : </span>
              {fakeData.colors[color]}
            </p>
            <div>
              {fakeData.colors.map((col, index) => (
                <span className={index === color && "active"}>
                  <span
                    style={{ backgroundColor: col }}
                    onClick={() => setColor(index)}
                  />
                </span>
              ))}
            </div>
          </div>
          <div className="product__top__right__cartButton">
            <button className="btn-primary">Add to Cart</button>
            <p>Quantity : </p>
            <div className="add--to--cart">
              <span onClick={minus} className="cart--icon--wrapper">-</span>
              <span className="counter-text">{count}</span>
              <span onClick={plus} className="cart--icon--wrapper">+</span>
            </div>
          </div>

          <p>
            <span>Sold By:</span> &nbsp;Mobile Store
          </p>
        </div>
      </div>
      {/* ----------page bottom product details section------------------ */}
      <div className="product__bottom container">
        <div className="product__bottom__switch">
          <p
            className={activeContent === "description" && "active"}
            onClick={() => setActiveContent("description")}
          >
            Description
          </p>
          <p
            className={activeContent === "review" && "active"}
            onClick={() => setActiveContent("review")}
          >
            Review (3)
          </p>
        </div>
      </div>
    </section>
  );
};

export default Product;
