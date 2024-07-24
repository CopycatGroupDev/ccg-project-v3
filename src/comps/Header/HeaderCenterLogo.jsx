import { motion } from "framer-motion";
import styled from "styled-components";

export const HeaderCenterLogo = styled(motion.img)`
    border-radius: 999em;
    aspect-ratio: 1;
    position: absolute;
    margin-top: 5%;
    
    @media only screen and (min-width: 1500px) {
       & { margin-top: calc(2.5% + var(--topGap)); }
    }

    @media only screen and (max-height: 800px) and (orientation: landscape) {
        height: 60vh;
        max-height: 350px;
        width: fit-content;
    }

    @media only screen and (min-height: 800px) and (orientation: landscape) {
        height: 350px;
        max-height: 350px;
        width: fit-content;
    }

    @media only screen and (orientation: portrait) {
        width: 25vh;
        max-width: 350px;
        height: fit-content;
    }
`;