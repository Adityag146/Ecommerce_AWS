import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BannerWrap } from './style';

export default function Banner() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
        };
  return (
    <BannerWrap> 
        <Carousel 
        infinite={true}
        autoPlay={true }
        responsive={responsive}>
            <div><img src="./banner1.jpg"/></div>
            <div><img src="./banner2.jpg"/></div>
            <div><img src="./banner3.jpg"/></div>
          
    </Carousel>
    </BannerWrap>
  )
}
