import { createSlice } from "@reduxjs/toolkit";
import productapi from "./act/actproductsslice";

type Tinit ={
    product:{id:number,name:string,brand:string,instok:number,price:number  ,quantity:number,photo:string}[],
    loading:"idle" | "pending" | "succeeded" | "failed",
    error : string | null
}


const initialState:Tinit = {
    product:[],
    loading:"idle",
    error:null
}


const productslice = createSlice({
        name:"product",
        initialState,
        reducers:{},
        extraReducers:(builder)=>{
            builder.addCase(productapi.fulfilled,(state,action)=>{
                state.product = action.payload
                state.loading = "succeeded"
                state.error = null
            });
            builder.addCase(productapi.pending,(state)=>{
                state.product = []
                state.loading = "pending"
                state.error = null
            });
            builder.addCase(productapi.rejected,(state)=>{
                state.product = []
                state.loading = "failed"
                state.error = 'action.error.messag'
            });
        },
});


    export default productslice.reducer;