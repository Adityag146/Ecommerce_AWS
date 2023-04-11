import React from "react";
import { CardpayemntWrap } from "./style";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
export default function CardPayment() {
  const date = new Date().toLocaleString().slice(0, 8);

  return (
    <CardpayemntWrap>
      <div className="card-parent">
        <div className="card-detail">
          <input placeholder="**** **** **** ****" />
          <img src="./card.png" />
        </div>
        <div className="card-main">
          <div className="cardholder-name">
            <p>Aditya Gupta</p>
          </div>
          <div className="expiry-cvv">
            <div className="expiry-date">
              <p>{date}</p>
              <p>CVV</p>
            </div>
          </div>
        </div>
      </div>
    </CardpayemntWrap>
  );
}
