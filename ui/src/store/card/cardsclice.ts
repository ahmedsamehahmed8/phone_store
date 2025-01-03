import { createSlice } from "@reduxjs/toolkit";
import { build } from "vite";
import itemsfullinfo from "./act/itemsfullinfo";
import { useAppSelector } from "../hook/hook";

type TT = {
  item_id: { [key: string]: number };
  item_info: {
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

const initialState: TT = {
  item_id: {},
  item_info: [],
  loading: "idle",
  error: null,
};

const cartslice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtocart: (state, action) => {
      const id = action.payload;
      if (state.item_id[id]) {
        state.item_id[id] = state.item_id[id] + 1;
      } else {
        state.item_id[id] = 1;
      }
    },
    add: (state, action) => {
      const id = action.payload;
      // const sstate =  state.item_info
      const quantityy = state.item_id;
      state.item_info.map((e) => {
        if (e.id === id) {
          e.quantity = quantityy[e.id];
        }
      });
    },
    order_complete_from_card_sclice: (state) => {
      state.item_id = {};
      state.item_info = [];
    },
    increase: (state, action) => {
      const id = action.payload;
      state.item_id[id] = state.item_id[id] + 1;
    },
    decrease: (state, action) => {
      const id = action.payload;
      state.item_id[id] = state.item_id[id] - 1;
    },
    delete_item: (state, action) => {
      const id = action.payload;
      console.log(state.item_id[id]);
      delete state.item_id[id];
      const newarry = state.item_info.filter((e) => id !== e.id);
      state.item_info = newarry;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(itemsfullinfo.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(itemsfullinfo.fulfilled, (state, action) => {
      state.item_info = action.payload;
      state.loading = "succeeded";
      state.error = null;
    });
    builder.addCase(itemsfullinfo.rejected, (state) => {
      state.loading = "failed";
      state.error = "action.error.message";
      state.item_info = [];
    });
  },
});

export const {
  addtocart,
  add,
  delete_item,
  increase,
  decrease,
  order_complete_from_card_sclice,
} = cartslice.actions;
export default cartslice.reducer;
