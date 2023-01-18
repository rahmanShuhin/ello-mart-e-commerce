import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0

}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers : {
        addToCart: (state,action) => {
            const itemIndex = state.cartItems.findIndex( item => item.id === action.payload.id)
            if(itemIndex >= 0){
                state.cartItems[itemIndex].cartTotalQuantity += 1
            }else{
                const tempCart = { ...action.payload, cartTotalQuantity : 1}
                state.cartItems.unshift(tempCart);
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        removeFromCart: (state,action) => {
            const itemIndex = state.cartItems.findIndex( item => item.id === action.payload.id)
            if(itemIndex >= 0){
                state.cartItems[itemIndex].cartTotalQuantity -= 1
            }
            if( state.cartItems[itemIndex].cartTotalQuantity === 0 ){
                state.cartItems.splice(itemIndex, 1);
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        deleteFromCart: (state, action) => {
            const itemIndex = state.cartItems.findIndex( item => item.id === action.payload.id);
            state.cartItems.splice(itemIndex, 1);

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        }

    }
})

export const { addToCart, removeFromCart, deleteFromCart } = cartSlice.actions

export default cartSlice.reducer