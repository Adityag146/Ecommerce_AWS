import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Spinner from '../../Loader/spinner';

export default function mageCarousal(props) {

    const items=props.items
    const cardSlider=props.cardImage.images
    console.log(cardSlider)
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
    <div>
       {cardSlider ?  <Carousel 
        arrows={false}
        showDots={true}
        infinite={true}
        autoPlay={true }
        responsive={responsive}>
            {
                cardSlider.map((items)=>{
                    return(
                        <div className='image-card'>
                        <img src={items} style={{width:"100%"}}/>
                        </div>
                        )
                })
                
            }
        
    </Carousel>
    :
    <Spinner />}
    </div>
  )
}
