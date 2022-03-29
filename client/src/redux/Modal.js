import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
  type:""
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state,action) => {
      state.value = true 
      state.type = action.payload
    },
    closeModal: (state) => {
      state.value = false
    }, 
  }, 
})

// Action creators are generated for each case reducer function
export const { openModal, closeModal} = modalSlice.actions

export default modalSlice.reducer;