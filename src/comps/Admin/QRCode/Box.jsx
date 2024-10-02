import styled from "styled-components";
import Flex from "./Flex";

export default styled(Flex)`
    body:has(&) {
        background: #111;
        color: #eee
    }

    & h1, & h2, & h3{
        margin: 0;
    }

    & input:not([type="checkbox"]), & select, & button{
        padding: 0.75rem;
        border: 0;
        border-radius: 999em;
        background: rgba(255,255,255,0.1);
        color: #eee;
        width: 100%;
        outline: none;
    }

    & *{
        white-space: nowrap;
    }
`;