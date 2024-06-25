import { motion } from "framer-motion";
import styled from "styled-components";

export const HeaderLayout = styled(motion.div)`
    display: flex;
    flex-direction: column;
    background-size: cover;
    height: ${props => props.$height ? `${props.$height}px` : '100vh'};
    width: 100%;
    align-items: center;
    justify-content: center;
    position: relative;

    @media only screen and (max-height: 800px) and (orientation: landscape) {
        height: ${props => props.$height ?? '200vh'};
    }

    @media only screen and (min-width: 100px) and (max-height: 500px) and (orientation: landscape) {
        height: ${props => props.$height ?? '200vh'};
    }
`;