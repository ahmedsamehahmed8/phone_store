import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type tt = {
  brand: {
    id: number;
    name: string;
    brand: string;
    instok: number;
    price: number;
    quantity: number;
    photo: string;
  }[];
};

const actgetonebrand = createAsyncThunk(
  "brand/actgetonebrand",
  (brandname, thunk) => {
    const { rejectWithValue } = thunk;

    try {
      const respons = axios
        .get<tt>(`http://localhost:3000/products?brand=${brandname}`)
        .then((e) => e.data);
      return respons;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export default actgetonebrand;
