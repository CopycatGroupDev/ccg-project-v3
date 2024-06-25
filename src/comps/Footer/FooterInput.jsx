import styled from "styled-components";

export const FooterInput = styled.input`
    padding: 0.75em;
    
    &:not([type="button"]){
        border-radius: 0.5em;
        border: 0
    }
    
    &[type="button"] {
        background-color: #0000;
        color: white;
        border: 2px solid white;
        border-radius: 1em;
    }`;