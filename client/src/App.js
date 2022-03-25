import { BrowserRouter, Route, Routes } from "react-router-dom";
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
      </BrowserRouter>
    </div>
  );
}

export default App;
