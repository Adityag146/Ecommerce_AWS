import styled from "styled-components";

export const AddressTabWrap=styled('div')`
    &&{
        padding:0px
    }
    input{
        height: 35px;
        border-radius: 5px;
        margin:10px 0px;
        padding-left:15px;
        border: none;
    }
    button{
        color: #ffdd2a;
        background: #000;
    }
    label{
        font-size:14px;
        color:#595959
    }
    .MuiTextField-root{
        margin-top:10px;
        width:100%;
    }
    .MuiTextField-root:nth-child(3){
        width:100% !important;
    }
    .input-form-div{
         display:flex;
         flex-direction:column;
    }
    ` 
export const PaymetWrapper=styled('div')`
&&{
    backdrop-filter: blur(20px);
    border-radius: 0.7rem;
}

`