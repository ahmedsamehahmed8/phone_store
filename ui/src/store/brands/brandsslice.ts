import { buildCreateSlice, createSlice } from "@reduxjs/toolkit";
import brandsapi from "./act/actbrandsslice";
import actgetonebrand from "./act/actgetonebrand";

type tt = {
  brands: {
    id: number;
    name: string;
    photo: string;
  }[];
  brand: {
    id: number;
    name: string;
    brand: string;
    instok: number;
    price: number;
    quantity: number;
    photo: string;
  }[];
  loading: "idle" | "pending" | "succeeded" | "failed";
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
      state.loading = "succeeded";
      state.error = null;
    });
    builder.addCase(brandsapi.rejected, (state, action) => {
      state.brands = [];
      state.loading = "failed";
      state.error = action.payload;
    });
    builder.addCase(brandsapi.pending, (state) => {
      state.brands = [];
      state.loading = "pending";
    });
    builder.addCase(actgetonebrand.fulfilled, (state, action) => {
      state.brand = action.payload;
      state.loading = "succeeded";
      state.error = null;
    });
    builder.addCase(actgetonebrand.rejected, (state, action) => {
      state.brand = [];
      state.loading = "failed";
      state.error = action.payload;
    });
    builder.addCase(actgetonebrand.pending, (state) => {
      state.brand = [];
      state.loading = "pending";
    });
  },
});

export const { reset_brand } = brandsslice.actions;
export default brandsslice.reducer;
