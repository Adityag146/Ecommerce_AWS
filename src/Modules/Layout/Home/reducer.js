import React from "react";
import { createSlice } from "@reduxjs/toolkit";
// const TotalPrice=(state)=>{
//   return (
//     const totalPrice=state.cartItem.map((items)=>)
//   )
// }
const cardReducer = createSlice({
  name: "cardReducerData",
  initialState: {
    responseData: [],
    cartItem: [],
    count: 0,
    priceQuantity: 0,
    cartTotal: 0,
    // quantity: 1,
    buttonVisible: true,
  },
  reducers: {
    FetchItem: (state, action) => {
      state.responseData = action.payload;
    },
    handleAddToCart: (state, action) => {
      // console.log("action",action.payload)
      state.cartItem = [...state.cartItem, action.payload];
      state.count = state.count + 1;
      // console.log(state.priceQuantity, "priceQuantu");
      // state.buttonVisible=false
    },
    handleAddQuantity: (state, action) => {
      console.log(action, "action");
      console.log(action.payload, "action payload");
    },
    handleSubQuantity: (state, action) => {
      state.quantity = state.quantity - 1;
    },
  },
});

export const {
  FetchItem,
  handleAddToCart,
  handleAddQuantity,
  handleSubQuantity,
} = cardReducer.actions;
export default cardReducer.reducer;
