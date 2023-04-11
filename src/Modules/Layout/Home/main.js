import React, { useEffect } from 'react' 
import Header from '../Header/header'
import { useDispatch,useSelector } from "react-redux";
import { FetchItem } from './reducer'; 
import CardContainer from '../Card/card';
import { Container, Grid } from '@mui/material';
import SliderHome from '../Carousal/index'
import Loader from '../../Loader/loader';
import Banner from '../Banner/banner';
export default function Main() { 
    const dispatch=useDispatch()
    const ResponseData=async ()=>{
        const response= await fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=15");
        dispatch(FetchItem(await response.json()))
    }
    const cardItems=useSelector((state)=>state.cardReducer.responseData)
    useEffect(()=>{
        ResponseData()
    },[])
  return (
  <>
    <Header/>
    <Banner/>
    <Container>
      
        <Grid container spacing={3}>
            {
               cardItems ? cardItems.map((items,index)=>{
                return(
                  <Grid item sm={4}>
                      <CardContainer value={items} index={index}/>
                  </Grid>
                  )
                }):
                <Loader/>
              }
        </Grid> 
      </Container>
  </>
  )
}
