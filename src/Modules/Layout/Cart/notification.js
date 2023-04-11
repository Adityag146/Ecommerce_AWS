import React from 'react'
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from "react-router-dom";
import Cart from './cart';
import { useSelector } from 'react-redux';



export default function NotifyBadge() {
  const navigate = useNavigate();
  const badge=useSelector((state)=>state.cardReducer.count)

  return (
    <div>
      <Badge badgeContent={badge} color="primary" >
          <ShoppingCartIcon onClick={()=>navigate("/cart")}  style={{color:"#000"}} color="action" />
      </Badge>
    </div>
  )
}
