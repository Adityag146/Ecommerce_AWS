import styled from 'styled-components';

export const HeaderWrapper =styled('Box')`
    .MuiToolbar-root{
        background:#fff
    }
    .header-head{
        box-shadow:none;
        border-bottom:3px solid #ededed
    }
    .header{
        background:#ffdd2a
    }
    .login-btn{
        color:#ffdd2a;
        background:#000;
        border:1px solid #000;
        text-transform:capitalize
    }
    .login-btn:hover{
        color:#000;
        background:#ffdd2a;
        border:1px solid #000;
    }
    .Header-nav{
        color:#000;
        text-transform:capitalize
    }
`