import React from 'react';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import LoginModal from './LoginModal/LoginModal';
import ProductDetailsModal from './ProductDetailsModal/ProductDetailsModal';
import './_modal.scss';

const Modal = ({modalData}) => {

    const {setOpenModal, modalType} = modalData; // // destructing the data from app.js

    const modalRef = React.useRef(null)
    useOnClickOutside(modalRef,()=>setOpenModal(false))

  return (
      <>
        <div className="modal--wrapper">
            <div ref={modalRef}>
                {modalType === 'login' && <LoginModal setOpenModal={setOpenModal}/>}
                {modalType === 'productDetail' && <ProductDetailsModal/>}
                
            </div>  
               
        </div>
      </>
    
  )
}

export default Modal