import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const rauth = createAsyncThunk("auth/rauth", async (data, thunk) => {
  const { rejectWithValue } = thunk;
  try {
    const response = await axios.post("http://localhost:3000/signup", data);
    return response;
  } catch (error) {
    console.log(error);
    return rejectWithValue(error);
  }
});

export default rauth;
