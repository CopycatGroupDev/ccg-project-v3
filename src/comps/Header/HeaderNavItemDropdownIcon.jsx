import { motion } from "framer-motion";
import styled from "styled-components";

export const Icon = styled.img`
    height: 100%;
    aspect-ratio: 1/1;
    object-fit: contain;
    
    :has(&):hover>&{
        mix-blend-mode: color-dodge;
        filter: invert(1);
    }
`;