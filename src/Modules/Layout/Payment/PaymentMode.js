import React, { useState } from 'react'
import CardPayment from './cardPayment'
import UpiPayment from './upiPayment'
import CashOnDelivery from './cashOnDelivery'
import { SelectWrapper } from './style'

export default function PaymentMode() {
  const [selected,setSelected]=useState("Card")
  const handleChange=(e)=>{
    console.log(e.target.value)
    setSelected(e.target.value)
  }
  return (
    <SelectWrapper>
      <select value={selected} onChange={(e)=>handleChange(e)}>
        <option>Card</option>
        <option>Upi</option>
        <option>Cash on Delivery</option>
      </select>
      {selected =="Card"?<CardPayment/>:""}
      {selected =="Upi"?<UpiPayment/>:""}
      {selected =="Cash on Delivery"?<CashOnDelivery/>:""}


    </SelectWrapper>
  )
}
