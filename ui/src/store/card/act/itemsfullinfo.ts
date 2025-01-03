import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../index";
import axios from "axios";
type tt= {product:{id:number,name:string,brand:string,instok:number,price:number  ,quantity:number,photo:string}[]}

const itemsfullinfo =   createAsyncThunk("cardsclice/itemsfullinfo",async(_,thunkAPI)=>{
    const {getState }= thunkAPI
    const { card } = getState() as RootState;
     const itemsId = Object.keys(card.item_id);
     const prepare_get =itemsId.map((e)=>`id=${e}`).join("&")
     console.log(prepare_get)

    return await axios.get<tt>(`http://localhost:3000/products?${prepare_get}`).then(e => e.data)
})

export default itemsfullinfo