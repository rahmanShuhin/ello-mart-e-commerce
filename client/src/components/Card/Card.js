import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../redux/cart";
import { openModal } from "../../redux/Modal";
import { addToWishlist } from "../../redux/wishList";
import EyeIcon from "../IconComponents/eye";
import FavouriteIcon from "../IconComponents/favourite";
import StarIcon from "../IconComponents/star";

const Card = (product) => {
    const { id, title, price, rating, images } = product;

    // const [count, setCount] = useState(0);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const goToProduct = () => navigate("/product");

    // const plus = () => setCount((prev) => prev + 1);
    // const minus = () => setCount((prev) => prev > 0 && prev - 1);

    return (
        <div key={id} className="card--wrapper">
            <div className="card--wrapper--inner">
                <div className="card--image--holder">
                    <div className="discount--text">50% off</div>
                    <div className="card--hover--view">
                        <div
                            title="Quick view"
                            onClick={() => {
                                dispatch(openModal("productDetail"));
                            }}
                        >
                            <EyeIcon />
                        </div>
                        <div
                            title="Wishlist"
                            className="favourite"
                            onClick={() => {
                                dispatch(addToWishlist(product));
                            }}
                        >
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
                            <span className="card--price--active">
                                ${price}
                            </span>
                            <span className="card--price--inactive">
                                <del>250.00</del>
                            </span>
                        </div>
                    </div>
                    <div title="Add to cart" className="add--to--cart">
                        {/* {count > 0 && (
                            <>
                                <span
                                    onClick={() => {
                                        dispatch(removeFromCart(product));
                                        minus();
                                    }}
                                    className="cart--icon--wrapper"
                                >
                                    -
                                </span>
                                <span className="counter-text">{count}</span>
                            </>
                        )} */}
                        <span
                            onClick={() => {
                                dispatch(addToCart(product));
                            }}
                            className="cart--icon--wrapper"
                        >
                            +
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
