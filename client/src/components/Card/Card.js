import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart, removeFromCart } from "../../redux/cart";
import { openModal } from "../../redux/Modal";
import EyeIcon from "../IconComponents/eye";
import FavouriteIcon from "../IconComponents/favourite";
import StarIcon from "../IconComponents/star";
import "./_card.scss";

const Card = (product) => {

  const { id, title, price, rating, images, cartTotalQuantity} = product
 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const goToProduct = () => navigate('/product')
  console.log(product)

  // const plus = () => setCount(prev => prev + 1);
  // const minus = () => (count > 0) && setCount(prev => prev - 1);


  
  return (
    <div key={id} className="card--wrapper">
      <div className="card--wrapper--inner">
        <div className="card--image--holder">
          <div className="discount--text">50% off</div>
          <div className="card--hover--view">
            <div onClick={()=>{dispatch(openModal("productDetail"))}}>
              <EyeIcon />
            </div>
            <div>
              <FavouriteIcon />
            </div>
          </div>
          <img
            onClick={goToProduct}
            src={images}
            alt=""
            width="100%"
          />
        </div>
        <div className="card--details--wrapper">
          <div onClick={goToProduct} className="card--details">
            <h3 className="card--title">{title}</h3>
            <div className="card--rating">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
            <div className="card--price">
              <span className="card--price--active">${price}</span>
              <span className="card--price--inactive">
                {" "}
                <del>250.00</del>{" "}
              </span>
            </div>
          </div>
          <div  className="add--to--cart">
            {(cartTotalQuantity > 0) && 
              <>
                <span onClick={()=>dispatch(removeFromCart(product))} className="cart--icon--wrapper">
                  -
                </span>
                <span className="counter-text">{cartTotalQuantity}</span>
              </>
            }
            <span onClick={()=>dispatch(addToCart(product))} className="cart--icon--wrapper">
              +
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
