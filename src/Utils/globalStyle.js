import { createGlobalStyle } from "styled-components";

export const globalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Red+Hat+Text:wght@300;400;600&display=swap');
    :root{
        --orange-main: #FF6400;
        --background: #F8EADA;
        --background-escuro: #f2cfa5;
        --color-placeHolder: #7f898d;
        --color-cinzaEscuro: #37474F;
        --danger : #b8293d;
        --success: #019733;
        --blue: #2d4b94;
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
