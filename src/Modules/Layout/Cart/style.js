import styled from "styled-components";

export const TotalPayWrap = styled("div")`
  .total-pay-amount {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    margin: 8px 10px;
  }
  .total-pay-amount p:first-child {
    color: #fff;
    font-size: 16px;
  }
  .total-pay-amount p:last-child {
    font-size: 16px;
    color: #fff;
    font-weight: bold;
  }
  .total-pay-amount:nth-child(2) {
    border-bottom: 3px dashed #ffdd2a;
    padding: 10px 0;
  }
  && {
    padding: 10px;
    background: #000;
  }
  .total-btn p {
    font-size: 22px !important;
  }
`;
export const CartItemWrap = styled("div")`
  .cart-content {
    display: flex;
    border-radius: 10px;
    background: #ffffff;
    box-shadow: 2px 4px 14px #e6e6e6, -7px -7px 14px #ffffff;
    margin-bottom: 16px;
    align-items: flex-start;
  }

  .cartContent-div {
    padding: 15px;
  }

  .cart-content img {
    border-radius: 10px;
    height: 150px;
    width: 150px;
  }

  cartContent-div {
    padding: 10px;
  }
  .despription-price {
    justify-content: space-between;
  }
  .quantity button {
    min-width: 20px;
    margin: 0 8px;
  }

  .cartContent-div {
    width: 100%;
  }
  .buy-now-quant {
    display: flex;
    justify-content: space-between;
  }
  .despription-price h5 {
    font-size: 12px;
    margin: 10px 0px;
    width: 75%;
  }
  .title {
  }
`;
export const cartWrap = styled("div")`
  .proced-text {
    margin-bottom: 20px;
  }
  .cart-div {
    height: 50vh;
    overflow-y: auto;
  }
`;
