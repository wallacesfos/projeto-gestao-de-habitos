import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --orange-main: #FF6400;
        --background: #F8EADA;
    }


    .btn-primary{
        background-color: #FF6400 !important;
        border-radius: 15px;
        width: 200px;
        height: 33px;
        border: 1px solid transparent;
        -webkit-box-shadow: 7px 10px 12px -6px rgba(0,0,0,0.51); 
        box-shadow: 7px 10px 12px -6px rgba(0,0,0,0.51);
        color: white;
        font-size: 15px;
        font-weight: bold;
        cursor: pointer;
    }
    
    .btn-primary:hover{
        background-color: rgb(255, 131, 45) !important;
    }

`;