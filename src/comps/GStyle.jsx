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
`;

export default GStyle;