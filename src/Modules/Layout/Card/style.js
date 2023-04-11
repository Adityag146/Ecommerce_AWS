import styled from 'styled-components';

export const CardWrapper =styled('div')`
.description{
    overflow: hidden;
    white-space: nowrap;
    word-break: break-all;
    color:#000;
    text-overflow: ellipsis;
}
.title-card{
    font-size:22px;
    color:#000
    
}
.title-price{
    color:#000;
    font-size:18px;

}
.card-main{
    background-color: rgba(255, 255, 255, 0.074);
    border: 1px solid rgba(255, 255, 255, 0.222);
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
    border-radius: .7rem;
    transition: all ease .3s;
    cursor:pointer;
    transform: scale(1);
    border: 1px solid rgba(255, 255, 255, 0.125);
}
.card-main:hover{
    transform: scale(1.01);
        box-shadow: 0px 0px 20px 1px #ffbb763f;

}


`