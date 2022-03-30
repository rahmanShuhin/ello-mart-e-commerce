import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Modal from "./components/Modal/Modal";
import Registration from "./components/Modal/RegistrationModal/RegistrationModal";
import Navbar from "./components/navbar/Navbar";
import Product from "./components/Product/Product";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import SideBarCart from "./components/SideCart/SideBarCart";
import Home from "./pages/Home";
import "./styles/App.scss";

function App() {
  const openModal = useSelector((state) => state.modal.value);

  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/product"} element={<Product />}></Route>
          <Route path={"/sign-up"} element={<Registration />}></Route>
        </Routes>
        <Footer />

        <SideBarCart />

        {/*----   All modal will this component ----*/}
        {openModal && <Modal />}
      </BrowserRouter>
    </div>
  );
}

export default App;
