import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Product from "./components/Product/Product";
import Home from "./pages/Home";
import "./styles/App.scss";

function App() {
  //-------- To open right side cart ----------
  const [openSideBarCart, setOpenSideBarCart] = useState(false);
  const handleOpenCart = () => setOpenSideBarCart(true);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar handleOpenCart={handleOpenCart} />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/product"} element={<Product></Product>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
