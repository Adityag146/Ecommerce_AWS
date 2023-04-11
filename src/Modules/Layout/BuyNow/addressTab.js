import React from 'react'
import { AddressTabWrap} from './style'
import { Box, Button, Grid, TextField } from '@mui/material'
export default function AddressTab() {
  return (
    <AddressTabWrap sx={{padding:"0px"}}>
      <Box sx={{padding:"0px"}}>
      <form>
        <div className='input-form-div'>
          <label> Full Name</label>
          <input placeholder='Enter Full Name'/>
        </div>
        <div className='input-form-div'>
          <label> Address</label>
          <input placeholder='Enter Address'/>
        </div>
        <div className='input-form-div'>
          <label> City</label>
          <input placeholder='Enter City'/>
        </div>
        <div className='input-form-div'>
          <label> State</label>
          <input placeholder='State'/>
        </div>
        <div className='input-form-div'>
          <label> Contact</label>
          <input placeholder='Enter Contact'/>
        </div>
        <div className='input-form-div'>
          <label> Email</label>
          <input placeholder='Enter Email'/>
        </div>
      </form>
      <Button variant='contained' sx={{marginTop:"20px"}}>Submit</Button>
      </Box>
    </AddressTabWrap>
  )
}
