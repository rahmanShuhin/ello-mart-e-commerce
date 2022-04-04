import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '',
}

export const sideCartSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openCart: (state, action) => {
        state.value = action.payload
      } 
  }, 
})

// Action creators are generated for each case reducer function
export const { openCart } = sideCartSlice.actions

export default sideCartSlice.reducer;