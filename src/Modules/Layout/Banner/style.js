import styled from "styled-components";

export const BannerWrap=styled ('div')`
    img{
        width:100%;
        height:90vh;
        transition:0.5s;
        filter: grayscale(100%);
    }
    .react-multi-carousel-track  img:hover{
        filter: grayscale(0%);

    }

`

export const TabsWrapper=styled('div')`
    .cart-tabs{

    }
    &&{
        width:100%;
        padding:20px;
    }

    .cart-tabs .MuiTabs-flexContainer {
        border-bottom:3px solid #ffdd2a
    }
    .MuiTabs-indicator{
        background:none
    }
    .MuiTab-root{
        text-transform:capitalize;
        color:#00
    }
    .MuiTab-root.Mui-selected {
            color: #000000;
            border-radius: 10px 10px 0px 0px;
            background: #ffdd2a;
            text-transform: capitalize;
            font-weight: bold;
    }
`