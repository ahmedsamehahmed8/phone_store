import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Tproducts from "src/types/Tproduct_Slice";

type T = {
  brand: Tproducts;
};

const actgetonebrand = createAsyncThunk(
  "brand/actgetonebrand",
  (brandname, thunk) => {
    const { rejectWithValue } = thunk;

    try {
      const respons = axios
        .get<T>(`http://localhost:3000/products?brand=${brandname}`)
        .then((e) => e.data);
      return respons;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export default actgetonebrand;
