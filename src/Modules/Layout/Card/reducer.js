import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const CardDetailReducer=createSlice({
    name:"cardDetail",
    initialState:{
        count:0
    },
    reducers:{
       
    }
})

export const {handleAddToCart}=CardDetailReducer.actions 
export default CardDetailReducer.reducer