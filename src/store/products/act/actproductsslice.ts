import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Tproducts from "src/types/Tproduct_Slice";

const productapi = createAsyncThunk("peoductssslice/productapi", async () => {
  return await axios
    .get<Tproducts>("http://localhost:3000/products")
    .then((e) => e.data);
});

export default productapi;
