import { createSlice } from "@reduxjs/toolkit";
import rauth from "./act/actrauth";
import lauth from "./act/actlauth";
import Tloading from "src/types/Tloading";
import Tuser from "src/types/Tuser";

type T = {
  lodding: Tloading;
  error: string | null;
  accessToken: string | null;
  user: Tuser;
  new_user: boolean;
};

const initialState: T = {
  lodding: "idle",
  error: null,
  user: {},
  accessToken: null,
  new_user: false,
};

const authslice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.accessToken = null;
      state.user = {};
    },
    reset_new_user: (state) => {
      state.new_user = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(rauth.fulfilled, (state) => {
      state.lodding = "success";
      state.new_user = true;
    });
    builder.addCase(rauth.pending, (state) => {
      state.lodding = "pending";
    });
    builder.addCase(rauth.rejected, (state) => {
      state.lodding = "failure";
    });

    builder.addCase(lauth.fulfilled, (state, action) => {
      state.lodding = "success";
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
      state.new_user = false;
      state.error = null;
    });
    builder.addCase(lauth.rejected, (state, action) => {
      state.lodding = "failure";
      state.error = action.payload as string;
    });
    builder.addCase(lauth.pending, (state) => {
      state.lodding = "pending";
    });
  },
});
export { lauth, rauth };
export const { logout, reset_new_user } = authslice.actions;
export default authslice.reducer;
