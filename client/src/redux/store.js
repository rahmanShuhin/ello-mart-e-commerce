import { configureStore } from '@reduxjs/toolkit';
import alertSlice from './alertBox';
import authSlice from './Auth';
import cartSlice from './cart';
import counterReducer from './Counter';
import modalReducer from './Modal';
import sideCartSlice from './SidebarCart';
import wishlistSlice from './wishList';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    modal: modalReducer,
    sideCart : sideCartSlice,
    auth : authSlice,
    alert : alertSlice,
    cart : cartSlice,
    wishlist : wishlistSlice,
  },
})