import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { axiosInstance } from '../services/axiosInstance/axiosInstance'

const initialState = {
    loading : false,
    error:'',
    token:'' 
}

export const signupUser = createAsyncThunk(
    'signupuser',
    async (data) => {
       const result = await axiosInstance.post('/api/user/register',data)
       return result;
    }

)

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers:(builder)=>{
      builder.addCase(signupUser.fulfilled,(state,action)=>{
        state.loading = false;
        if(action.payload.error){
            state.error = action.payload.error;
        }
        else{
            state.error = ''
        }
      });
      builder.addCase(signupUser.pending,(state,action)=>{
          state.loading = true;
    })
  }
})

// Action creators are generated for each case reducer function
// export const {} = authSlice.actions

export default authSlice.reducer