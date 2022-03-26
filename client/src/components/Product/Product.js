import React, { useState } from "react";
import StarIcon from "../IconComponents/star";

const Product = () => {
  const [activeImg, setActiveImg] = useState(0);
  const [activeContent, setActiveContent] = useState("description");
  const [size, setSize] = useState(0);
  const [color, setColor] = useState(0);

  return (
    //  product details page
    <section className="product">
      {/* ----------page top product details section------------------ */}
      <div className="product__top container">
        <div className="product__top__left">
          <div className="product__top__left__imgActive">
            <img src={fakeData.images[activeImg]} alt="" />
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
                <p
                  className={index === color && "active"}
                  style={{ backgroundColor: col }}
                  onClick={() => setColor(index)}
                ></p>
              ))}
            </div>
          </div>
          <div className="product__top__right__cartButton">
            <button className="btn-primary">Add to Cart</button>
            <p>Quantity : </p>
            <div className="add--to--cart">
              <span className="cart--icon--wrapper">-</span>
              <span className="counter-text">1</span>
              <span className="cart--icon--wrapper">+</span>
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

const fakeData = {
  id: 1,
  title: "Mi Note 11 Pro",
  description: "this is very nice show",
  price: 320,
  rating: "5",
  images: [
    "https://bonik-react.vercel.app/assets/images/products/hiclipart.com%20(16).png",
    "https://bonik-react.vercel.app/assets/images/products/headphone.png",
    "https://bonik-react.vercel.app/assets/images/products/hiclipart.com%20(18).png",
  ],
  category: "show",
  sizes: ["XS", "S", "M", "L", "XL"],
  colors: ["black", "red", "blue", "orange"],
  stock: "23",
  totalReviews: "4",
  reviews: "2",
};
