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

    @media screen and (max-width: 400px) {
        .topcol{
            width: 100%;
        }
    }

    @media screen and (max-width: 400px) {
        .textZone {
            zoom: ${({ longP }) => longP ? 0.6 : 0.75};
            line-height: 1.5rem;
        }
        @media screen and (max-height: 500px) {
            .textZone {
                gap: 9px;
            }
        }
        a {
            white-space: nowrap;
        }
    }

    @media only screen and (max-height: 800px) and (orientation: landscape) {
        height: ${props => props.$height ?? '200vh'};
    }

    @media only screen and (min-width: 100px) and (max-height: 500px) and (orientation: landscape) {
        height: ${props => props.$height ?? '200vh'};
    }
`;