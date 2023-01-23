import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
    cartTotalAmountWithTax: 0,
    tax: 0,
    shipping: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            );
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartTotalQuantity += 1;
            } else {
                const tempCart = { ...action.payload, cartTotalQuantity: 1 };
                state.cartItems.unshift(tempCart);
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        removeFromCart: (state, action) => {
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            );
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartTotalQuantity -= 1;
            }
            if (state.cartItems[itemIndex].cartTotalQuantity === 0) {
                state.cartItems.splice(itemIndex, 1);
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        deleteFromCart: (state, action) => {
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            );
            state.cartItems.splice(itemIndex, 1);

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        getTotal: (state, action) => {
            let total = 0;
            let totalWithTax = 0;
            state.tax = action.payload;

            state.cartItems.forEach((item) => {
                total += item.cartTotalQuantity * item.price;
            });
            totalWithTax = total + state.tax;
            state.cartTotalAmount = total.toFixed(2);
            state.cartTotalAmountWithTax = totalWithTax.toFixed(2)
        },
    },
});

export const { addToCart, removeFromCart, deleteFromCart, getTotal } =
    cartSlice.actions;

export default cartSlice.reducer;
