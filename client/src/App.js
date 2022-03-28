import { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ModalContext } from './context/ModalContext';
import Footer from "./components/footer/Footer";
import Modal from './components/Modal/Modal';
import Registration from './components/Modal/RegistrationModal/RegistrationModal';
import Navbar from "./components/navbar/Navbar";
import Product from "./components/Product/Product";
import SideBarCart from "./components/SideCart/SideBarCart";

import Home from "./pages/Home";
import "./styles/App.scss";

function App() {

  const [openSideBarCart, setOpenSideBarCart] = useState(false);    //---- To open cart from right side 
  const [openModal, setOpenModal] = useState(false);     //---- To Open main Modal
  const [modalType, setModalType] = useState("");     //---- To open a specific modal from main modal comp.
  const handleOpenCart = () => setOpenSideBarCart(true);
  const handleOpenModal = () => setOpenModal(true);

  const modalData = {
    setOpenModal,
    modalType
  }

  return (
    
    <div className="App">
      <ModalContext.Provider value={{handleOpenModal,setModalType,handleOpenCart}}>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path={"/"} element={<Home/>} />
          <Route path={"/product"} element={<Product/>}></Route>
          <Route path={"/sign-up"} element={<Registration/>}></Route>
        </Routes>
        <Footer />

        <SideBarCart openSideBarCart={openSideBarCart} setOpenSideBarCart={setOpenSideBarCart}/>
       
       {/*----   All modal will this component ----*/}
        { openModal && <Modal modalData={{...modalData}}/> }
        
        </BrowserRouter>
      </ModalContext.Provider>
    </div>
  
  );
}

export default App;
