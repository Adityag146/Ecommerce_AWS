import React, { useState } from "react";
import { CartItemWrap } from "./style";
import { Box, Button, Checkbox, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { handleAddQuantity, handleSubQuantity } from "../Home/reducer";
import TotalPay from "./totalPay";

export default function CartItem(props) {
  const dispatch = useDispatch();
  const [quant, setQuant] = useState(1);
  const count = useSelector((state) => state.cardReducer.quantity);
  const value = props.value;
  const [incrementPrice, setIncrementPrice] = useState(null);
  const PriceIncremetn = value.price * quant;
  const price = value.price;

  const handleRemove = (value) => {
    let res = value.filter((item) =>
      item.price == value.price ? true : false
    );
    console.log(res, "Checkout");
  };
  const handleSubQuantity = (value) => {
    console.log(setQuant(quant - 1));
  };

  const handleAddQuantity = (value) => {
    console.log(setQuant(quant + 1));
  };
  return (
    <CartItemWrap>
      <Box className="cart-content">
        <Checkbox />
        <Box sx={{ padding: "13px 0 5px 0px" }}>
          <img src={value.images} />
        </Box>
        <Box className="cartContent-div">
          <Typography className="title" variant="h5">
            {value.title}
          </Typography>
          <Box
            className="despription-price"
            sx={{ display: "flex", alignItems: "flex-start" }}
          >
            <Typography variant="h5">{value.description}</Typography>
            <Typography variant="p">${PriceIncremetn}</Typography>
          </Box>
          <Box className="buy-now-quant">
            <Box className="quantity">
              <Button
                onClick={() => handleSubQuantity(value)}
                disabled={quant <= 1}
                variant="outlined"
              >
                -
              </Button>
              <Typography variant="p">{quant}</Typography>
              <Button
                onClick={() => handleAddQuantity(value)}
                variant="outlined"
              >
                +
              </Button>
            </Box>
            <Button onClick={() => handleRemove(value)}>Remove </Button>
          </Box>
        </Box>
      </Box>
    </CartItemWrap>
  );
}
