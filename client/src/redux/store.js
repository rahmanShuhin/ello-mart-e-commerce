import { configureStore } from '@reduxjs/toolkit';
import alertSlice from './alertBox';
import authSlice from './Auth';
import counterReducer from './Counter';
import modalReducer from './Modal';
import sideCartSlice from './SidebarCart';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    modal: modalReducer,
    sideCart : sideCartSlice,
    auth : authSlice,
    alert : alertSlice,
  },
})