import { motion } from "framer-motion";
import styled from "styled-components";

export const BoutiqueMenuLayout = styled(motion.div)`
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 1em;
    justify-content: center;
    align-items: center;
    max-width: 600px;

    &>div {
        display: flex;
        gap: 1em;
        justify-content: center;
    }

    @media only screen and (max-width: 768px) {
        scale: 0.75;
    }
`;