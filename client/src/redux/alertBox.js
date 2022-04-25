import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  type:"",
  message:""
}

export const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    alertType: (state,action) => {
      state.type = action.payload
    },
    alertMessage: (state,action) => {
      state.message = action.payload
    }
  }, 
})

// Action creators are generated for each case reducer function
export const { alertType, alertMessage } = alertSlice.actions

export default alertSlice.reducer;