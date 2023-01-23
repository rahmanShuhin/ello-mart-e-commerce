import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AlertBox from "./components/AlertBox/AlertBox";
import Footer from "./components/footer/Footer";
import Modal from "./components/Modal/Modal";
import Registration from "./components/Modal/RegistrationModal/RegistrationModal";
import Navbar from "./components/navbar/Navbar";
import Product from "./components/Product/Product";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import SideBarCart from "./components/SideCart/SideBarCart";
import Admin from "./pages/Admin/Admin";
import Cart from './pages/Checkout/Cart/Cart';
import Details from './pages/Checkout/Details/Details';
import Payment from './pages/Checkout/Payment/Payment';
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Search from "./pages/Search/Search";
import Wishlist from "./pages/WishList/Wishlist";
import { getTotal } from "./redux/cart";
import "./styles/App.scss";

function App() {
    const dispatch = useDispatch();
    const openModal = useSelector((state) => state.modal.value);
    const alertBoxType = useSelector((state) => state.alert.type);
    const {cartItems} = useSelector((state) => state.cart);

    useEffect(()=>{
        dispatch(getTotal(4.00));
    },[cartItems])

    return (
        <div className="App">
            {alertBoxType === "success" && <AlertBox />}
            {alertBoxType === "error" && <AlertBox />}
            <BrowserRouter>
                <ScrollToTop />
                <Navbar />
                <Routes>
                    <Route path={"/"} element={<Home />} />
                    <Route path={"/product"} element={<Product />} />
                    <Route path={"/sign-up"} element={<Registration />} />
                    <Route path={"/profile"} element={<Profile />} />
                    <Route path={"/search"} element={<Search />} />
                    <Route path={"/admin"} element={<Admin />} />
                    <Route path={"/wishlist"} element={<Wishlist />} />
                    <Route path={"/cart"} element={<Cart />} />
                    <Route path={"/details"} element={<Details />} />
                    <Route path={"/payment"} element={<Payment />} />

                </Routes>
                <Footer />

                <SideBarCart />

                {/*----   All modal will use this component ----*/}
                {openModal && <Modal />}
            </BrowserRouter>
        </div>
    );
}

export default App;
