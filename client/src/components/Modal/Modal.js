import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import { closeModal } from '../../redux/Modal';
import LoginModal from './LoginModal/LoginModal';
import ProductDetailsModal from './ProductDetailsModal/ProductDetailsModal';
import './_modal.scss';


const Modal = () => {

    const modalRef = useRef(null);
    const dispatch = useDispatch();
    const modalType = useSelector( state => state.modal.type);
    useOnClickOutside(modalRef,()=>dispatch(closeModal()));

  return (
      <>
        <div className="modal--wrapper">
            <div ref={modalRef}>
                { modalType === 'login' && <LoginModal/> }
                { modalType === 'productDetail' && <ProductDetailsModal/> } 
            </div>       
        </div>
      </>
    
  )
}

export default Modal