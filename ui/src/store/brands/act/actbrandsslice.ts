import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Await } from "react-router-dom";
import Tbrands from "src/types/Tbrands";

type T = {
  brands: Tbrands;
};

const brandsapi = createAsyncThunk("brand/brandsapi", async (_, thunk) => {
  const { rejectWithValue } = thunk;
  try {
    const response = await axios
      .get<T>("http://localhost:3000/Brands")
      .then((e) => e.data);
    return response;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export default brandsapi;
