import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './Counter';
import modalReducer from './Modal';
import sideCartSlice from './SidebarCart';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    modal: modalReducer,
    sideCart : sideCartSlice
  },
})