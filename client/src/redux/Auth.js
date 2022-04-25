import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { axiosInstance } from '../services/axiosInstance/axiosInstance'

const initialState = {
    loading : false,
    error:'',
    token:'' 
}

export const register = createAsyncThunk(
    'register',
    async (data, thunkApi) => {
      try{
        const result = await axiosInstance.post('/api/user/register',data) 
        return result
      }
      catch(error){
        return thunkApi.rejectWithValue(error.toString())
      }
    }
)

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers:(builder)=>{
      builder.addCase(register.fulfilled,(state,action)=>{
        state.loading = false;
        if(action.payload.error){
            state.error = action.payload.error;
            state.loading = false;
        }
        else{
            state.error = ''
        }
      })
      .addCase(register.pending,(state,action)=>{
          state.loading = true;
      })
      .addCase(register.rejected,(state,action)=>{
        state.loading = false;
      })
  }
})

// export const {} = authSlice.actions

export default authSlice.reducer