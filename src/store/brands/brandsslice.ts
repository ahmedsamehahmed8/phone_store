import { createSlice } from "@reduxjs/toolkit";
import brandsapi from "./act/actbrandsslice";
import actgetonebrand from "./act/actgetonebrand";
import Tloading from "src/types/Tloading";
import Tproducts from "src/types/Tproduct_Slice";
import Tbrands from "src/types/Tbrands";

type tt = {
  brands: Tbrands;
  brand: Tproducts;
  loading: Tloading;
  error: string | null;
};
const initialState: tt = {
  brands: [],
  brand: [],
  loading: "idle",
  error: null,
};

const brandsslice = createSlice({
  name: "brand",
  initialState,
  reducers: {
    reset_brand: (state) => {
      state.brand = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(brandsapi.fulfilled, (state, action) => {
      state.brands = action.payload;
      state.loading = "success";
      state.error = null;
    });
    builder.addCase(brandsapi.rejected, (state, action) => {
      state.brands = [];
      state.loading = "failure";
      state.error = action.payload as string;
    });
    builder.addCase(brandsapi.pending, (state) => {
      state.brands = [];
      state.loading = "pending";
    });
    builder.addCase(actgetonebrand.fulfilled, (state, action) => {
      state.brand = action.payload;
      state.loading = "success";
      state.error = null;
    });
    builder.addCase(actgetonebrand.rejected, (state, action) => {
      state.brand = [];
      state.loading = "failure";
      state.error = action.payload as string;
    });
    builder.addCase(actgetonebrand.pending, (state) => {
      state.brand = [];
      state.loading = "pending";
    });
  },
});

export const { reset_brand } = brandsslice.actions;
export default brandsslice.reducer;
