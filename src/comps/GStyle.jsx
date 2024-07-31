import { createGlobalStyle } from "styled-components";

const GStyle = createGlobalStyle`
    body {
        margin: 0;
        color: rgb(156 163 175);
        background: whitesmoke;
    }

    html, body, #root {
        overflow-x: hidden;
    }
    
    p, span, button, input, select, textarea {
        --font-size: 20px;
        --line-height: 28px;
    }

    * {
        font-family: Roboto;
        box-sizing: border-box;
        outline: none;
        /*font-weight: 350 !important;*/
    }

    #root {
        display: flex;
        flex-direction: column;
        gap: 3rem;
        justify-content: center;
        align-items: center;
    }

    button, a, input[type=submit], input[type=button] {
        cursor: pointer;
        transition: box-shadow 0.2s ease-in-out;
    }
    button:hover, a:not(.footer a):hover, input[type=submit]:hover, input[type=button]:hover {
        box-shadow: inset 0 0 0 999px #0002;
    }  
`;

export default GStyle;