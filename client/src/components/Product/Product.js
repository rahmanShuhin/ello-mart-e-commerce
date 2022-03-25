import React, { useState } from "react";
import StarIcon from "../IconComponents/star";

const Product = () => {
  const [activeImg, setActiveImg] = useState(0);
  const [activeContent, setActiveContent] = useState("description");
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
          <button className="btn-primary">Add to Cart</button>
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
  stock: "23",
  totalReviews: "4",
  reviews: "2",
  sizes: "34",
  colors: "red",
};
