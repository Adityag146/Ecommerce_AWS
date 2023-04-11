import React from 'react'
import { PaymetWrapper } from './style'
import PaymentMode from '../Payment/PaymentMode'

export default function Payment() {
  return (
    <PaymetWrapper>
      <h2>Make the Payment</h2>
      <p>TO finalize your Products , Kindly Complete your Payment</p>

      <h3>Please Select the Payment Method</h3>
      <PaymentMode/>
    </PaymetWrapper>
  )
}
