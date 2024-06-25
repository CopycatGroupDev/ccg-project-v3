import { motion } from "framer-motion";
import styled from "styled-components";

const CLink = styled(motion.span)`
    a { color: ${({$color}) => $color}; text-decoration: none; }
    text-decoration: none;
    background-color: rgba(255, 255, 255, 0.9);
    padding: 0.25rem 0.5rem;
    display: flex;
    gap: 0.25rem;
    align-items: center;
    transition: all 0.25s ease-in-out;

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        border:0;
        background-color: transparent;
        color: ${({$color}) => $color};
        border-radius: 999em;
        aspect-ratio: 1;
        padding: 0.25em;
    }

    &:hover {
        background-color: ${({$color}) => $color};
        a, button { color: white; }
    }
`;

export default CLink;