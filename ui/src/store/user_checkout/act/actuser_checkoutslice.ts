import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "src/store";

const post_user_checkoutslice = createAsyncThunk(
  "user_checkoutslice/post_user_checkoutslice",
  async (total: number, thunk) => {
    const { getState, rejectWithValue } = thunk;

    // const { item_info } = getState() as RootState;
    const { card, authslice } = getState() as RootState;
    const userid = authslice.user;
    const items = card.item_info.map((e) => ({
      id: e.id,
      name: e.name,
      brand: e.brand,
      price: e.price,
      quantity: e.quantity,
      photo: e.photo,
    }));

    try {
      axios.post("http://localhost:3000/user_checkout", {
        user_id: userid.id,
        checkout: items,
        total: total,
      });
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export default post_user_checkoutslice;

// id: number;
// name: string;
// brand: string;
// instok: number;
// price: number;
// quantity: number;
// photo: string;
