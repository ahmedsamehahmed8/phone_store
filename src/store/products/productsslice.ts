import { createSlice } from "@reduxjs/toolkit";
import productapi from "./act/actproductsslice";
import Tloading from "src/types/Tloading";
import Tproducts from "src/types/Tproduct_Slice";

type T = {
  product: Tproducts;
  loading: Tloading;
  error: string | null;
};

const initialState: T = {
  product: [],
  loading: "idle",
  error: null,
};

const productslice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(productapi.fulfilled, (state, action) => {
      state.product = action.payload;
      state.loading = "success";
      state.error = null;
    });
    builder.addCase(productapi.pending, (state) => {
      state.product = [];
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(productapi.rejected, (state) => {
      state.product = [];
      state.loading = "failure";
      state.error = "action.error.messag";
    });
  },
});

export default productslice.reducer;
