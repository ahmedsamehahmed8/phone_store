import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Await } from "react-router-dom";

type tt = {
  brands: {
    id: number;
    name: string;
    photo: string;
  }[];
};

const brandsapi = createAsyncThunk("brand/brandsapi", async (_, thunk) => {
  const { rejectWithValue } = thunk;
  try {
    const response = await axios
      .get<tt>("http://localhost:3000/Brands")
      .then((e) => e.data);
    return response;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export default brandsapi;
