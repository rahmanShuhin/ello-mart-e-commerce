import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { axiosInstance } from '../services/axiosInstance/axiosInstance'


const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
    user : user ?? null,
    isLoading : false,
    error:'',
    token:'' 
}

export const register = createAsyncThunk(
    'register',
    async (data) => {
        const result = await axiosInstance.post('/api/user/register',data) 
        return result  
    }
)

export const login = createAsyncThunk(
    'login',
    async (data) => {
        try{
            const result = await axiosInstance.post('/api/user/login',data) 
            return result
        }catch{
            const message = "Email or password isn't matching";
            return message
        }  
    }
)

export const logout = createAsyncThunk(
    'logout',
    async () => {
            const result = await axiosInstance.post('/api/user/logout') 
            return result;   
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
      .addCase(login.fulfilled,(state,action)=>{
        state.loading = false;
        if(action.payload.error){
            state.error = action.payload.error;
            state.loading = false;
        }
        else{
            state.error = ''
        }
      })
      .addCase(login.pending,(state,action)=>{
      state.loading = true;
      })
      .addCase(login.rejected,(state,action)=>{
      state.loading = false;
      })
  }
})

// export const {} = authSlice.actions

export default authSlice.reducer