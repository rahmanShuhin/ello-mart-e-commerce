import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    wishlistItems: localStorage.getItem("wishlistItems")
    ? JSON.parse(localStorage.getItem("wishlistItems"))
    : [],
    wishlistTotalQuantity: 0,
    alreadyAdded : false
}

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers : {
        addToWishlist: (state,action) => {
            const itemIndex = state.wishlistItems.findIndex( item => item.id === action.payload.id)
            if(itemIndex >= 0){
                state.alreadyAdded = true
            }else{
                state.wishlistItems.unshift(action.payload);
            }
            localStorage.setItem("wishlistItems", JSON.stringify(state.wishlistItems));
        },
        deleteFromWishlist: (state, action) => {
            const itemIndex = state.wishlistItems.findIndex( item => item.id === action.payload.id);
            state.cartItems.splice(itemIndex, 1);

            localStorage.setItem("wishlistItems", JSON.stringify(state.wishlistItems));
        }

    }
})

export const { addToWishlist, deleteFromWishlist } = wishlistSlice.actions

export default wishlistSlice.reducer