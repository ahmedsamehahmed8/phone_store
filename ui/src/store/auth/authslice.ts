import { createSlice } from "@reduxjs/toolkit";
import rauth from "./act/actrauth";
import lauth from "./act/actlauth";

type a = {
  lodding: string;
  error: string | null;
  accessToken: string | null;
  user: object;
  new_user: boolean;
};

const initialState: a = {
  lodding: "idel",
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
      state.lodding = "sucssed";
      state.new_user = true;
    });
    builder.addCase(rauth.pending, (state) => {
      state.lodding = "pending";
    });
    builder.addCase(rauth.rejected, (state) => {
      state.lodding = "failed";
    });

    builder.addCase(lauth.fulfilled, (state, action) => {
      state.lodding = "sucssed";
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
      state.new_user = false;
      state.error = null;
    });
    builder.addCase(lauth.rejected, (state, action) => {
      state.lodding = "failed";
      state.error = action.payload;
    });
    builder.addCase(lauth.pending, (state) => {
      state.lodding = "pending";
    });
  },
});
export { lauth, rauth };
export const { logout, reset_new_user } = authslice.actions;
export default authslice.reducer;
