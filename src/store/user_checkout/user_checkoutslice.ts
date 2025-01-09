import { createSlice } from "@reduxjs/toolkit";
import post_user_checkoutslice from "./act/actuser_checkoutslice";
import Tloading from "src/types/Tloading";

type T = {
  loading: Tloading;
  error: string | null;
  complete: boolean;
};

const initialState: T = {
  loading: "idle",
  error: null,
  complete: false,
};

const user_checkoutslice = createSlice({
  name: "user_checkout",
  initialState,
  reducers: {
    order_complete_from_user_checkoutslice: (state) => {
      state.complete = true;
    },
    reset_complete_from_user_checkoutslice: (state) => {
      state.complete = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(post_user_checkoutslice.fulfilled, (state) => {
      state.loading = "success";
      state.error = null;
    });
    builder.addCase(post_user_checkoutslice.rejected, (state, action) => {
      state.loading = "pending";
      state.error = action.payload as string;
    });
    builder.addCase(post_user_checkoutslice.pending, (state) => {
      state.loading = "pending";
    });
  },
});

export const {
  order_complete_from_user_checkoutslice,
  reset_complete_from_user_checkoutslice,
} = user_checkoutslice.actions;
export default user_checkoutslice.reducer;
