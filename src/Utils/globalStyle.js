import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

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
        font-family: "Red Hat Text", sans-serif;
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
        background-color: #FF6400 !important;
        border-radius: 150px;
        width: 200px;
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

    .divTexts div{
        border-radius: 150px;
    }

    .divTexts div div{
        border-radius: 150px;
    }

    .margin-left-input{
        margin-left: 7px !important;
    }

    .margin-right-input{
        margin-right: 7px !important;
    }

    .mini{
        width: 150px;
    }

    .MuiFormControl-root{
        border-radius: 20px;
    }

    .MuiFormControl-root div{
        border-radius: 20px;
    }

`;
