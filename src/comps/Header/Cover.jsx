import { motion } from "framer-motion";
import styled from "styled-components";

export const Cover = styled(motion.img)`
    width: 100%;
    height: ${props => props.$full && "100%" };
    position: absolute;
    object-fit: ${props => props.$cover && "cover" };

    @media only screen and (max-width: 1700px) {
        & { object-fit: cover; height: 100%;}
    }
    @media only screen and (min-width: 1700px) {
        & {
            object-position: center var(--topGap);
            height: 100%;
            object-fit: cover;
        }
    }
`;