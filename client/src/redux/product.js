import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import { axiosInstance } from "../services/axiosInstance/axiosInstance";


export const addProduct = createAsyncThunk(
    'addProduct',
    async (data) => {
        try {
            const result = await axiosInstance.post('/api/products',data) 
            return result 
          } catch (error) {
            return isRejectedWithValue(error.response.data);
          }
         
    }
)