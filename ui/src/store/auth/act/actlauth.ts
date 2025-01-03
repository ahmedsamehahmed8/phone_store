import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const lauth = createAsyncThunk("lauth/auth", async (data, thunk) => {
  const { rejectWithValue } = thunk;

  try {
    const response = await axios.post("http://localhost:3000/signin", data);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error?.response?.data);
    return rejectWithValue(error?.response?.data);
  }
});

export default lauth;
