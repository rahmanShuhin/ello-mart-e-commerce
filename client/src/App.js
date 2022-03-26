import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import SupportCard from "./components/MinorComponents/SupportCard.js";
import Navbar from "./components/navbar/Navbar";
import Product from "./components/Product/Product";
import Home from "./pages/Home";
import "./styles/App.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/product"} element={<Product></Product>}></Route>
        </Routes>
        <SupportCard />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
