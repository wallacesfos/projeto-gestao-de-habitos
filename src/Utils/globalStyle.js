import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
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
        --background-white:#ffffff;
        --black: #000000;
    }
    body{
        background-color: var(--background);
    }
    body,div,main,section,ul,li,a,h1,h2,h3,h4,h5,h6{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
    }

    body{
        background-color: var(--background)
    }

    .btn-primary{
        @import url('https://fonts.googleapis.com/css2?family=Red+Hat+Text:wght@300;400;600&display=swap');
        background-color: #FF6400 !important;
        border-radius: 15px;
        width: 100%;
        height: 33px;
        border: 1px solid transparent;
        -webkit-box-shadow: 7px 10px 12px -6px rgba(0,0,0,0.51); 
        box-shadow: 7px 10px 12px -6px rgba(0,0,0,0.51);
        color: white;
        font-size: 15px;
        font-weight: bold;
        cursor: pointer;
        font-family: "Red Hat Text";
        font-weight: 600;
    }
    
    .btn-primary:hover{
        background-color: rgb(255, 131, 45) !important;
    }

    .inputField{
        width: 100%;
    }

    .divTexts{
        width: 80%
    }

`;
