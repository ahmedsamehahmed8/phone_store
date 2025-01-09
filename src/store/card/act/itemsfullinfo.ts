import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../index";
import axios from "axios";
import Tproducts from "src/types/Tproduct_Slice";
type T = { product: Tproducts };

const itemsfullinfo = createAsyncThunk(
  "cardsclice/itemsfullinfo",
  async (_, thunkAPI) => {
    const { getState } = thunkAPI;
    const { card } = getState() as RootState;
    const itemsId = Object.keys(card.item_id);
    const prepare_get = itemsId.map((e) => `id=${e}`).join("&");
    console.log(prepare_get);

    return await axios
      .get<T>(`http://localhost:3000/products?${prepare_get}`)
      .then((e) => e.data);
  }
);

export default itemsfullinfo;
