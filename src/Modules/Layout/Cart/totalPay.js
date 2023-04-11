import React, { useEffect, useState } from "react";
import { TotalPayWrap } from "./style";

export default function TotalPay(props) {
  const [priceTotal, setPriceTotal] = useState(0);
  const value = props.total;

  useEffect(() => {
    // const priceData = value.map((items) => items.price);
    // const total = priceData.reduce((fval, lval) => fval + lval);
    // console.log(total);
    // setPriceTotal(total);
  }, []);
  return (
    <TotalPayWrap>
      <div className="total-pay-amount">
        <p>Sub Total </p>
        <p>$75</p>
      </div>
      <div className="total-pay-amount">
        <p>Shipping Cost </p>
        <p>{priceTotal}</p>
      </div>
      <div className="total-pay-amount total-btn">
        <p>Total </p>
        <p>{priceTotal}</p>
      </div>
    </TotalPayWrap>
  );
}
