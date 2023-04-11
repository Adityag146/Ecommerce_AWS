import React from "react";
import { useSelector } from "react-redux";
import CardContainer from "../Card/card";
import { Checkbox, Container, Grid } from "@mui/material";
import Header from "../Header/header";
import CartItem from "./cartItem";
import Buynow from "../BuyNow/buynow";
import TotalPay from "./totalPay";

export default function Cart() {
  const cartPageItems = useSelector((state) => state.cardReducer.cartItem);
  return (
    <cartWrap>
      <Header />
      <Container>
        <Grid sx={{ marginTop: "30px" }} container spacing={3}>
          <Grid item sm={6}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <h2 className="proced-text">Proceed to Checkout</h2>
              <div style={{ display: "flex", alignItems: "center" }}>
                <p>Select All</p>
                <Checkbox />
              </div>
            </div>
            <div
              className="cart-div"
              style={{
                height: "50vh",
                paddingRight: "5px",
                marginBottom: "16px",
                overflowY: "auto",
              }}
            >
              {cartPageItems.length > 1 ? (
                cartPageItems.map((items, index) => {
                  return (
                    <div>
                      <CartItem value={items} index={index} />
                    </div>
                  );
                })
              ) : (
                <div
                  className="empty-Cart"
                  style={{
                    padding: "20px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <h2>Your Cart is Empty</h2>
                  <img src="./empty.gif" />
                </div>
              )}
            </div>
            <TotalPay total={cartPageItems} />
          </Grid>
          <Grid sm={6}>
            <Buynow />
          </Grid>
        </Grid>
      </Container>
    </cartWrap>
  );
}
