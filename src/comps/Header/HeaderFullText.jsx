import { motion } from "framer-motion";
import styled from "styled-components";
import zIndex from "../../config/zIndex";

export const HeaderFullText = styled(motion.div)`
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 1em;
    z-index: ${zIndex('headerText')};
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    max-width: 75%;
    color: white;
    line-height: 1.7;
    font-size: 1.3em;
    overflow: hidden;
    max-height: 75%;

    &>*{
        margin: 0;
    }

    & p{
       max-width: 650px;
       height: 100%;
        overflow: auto;
        padding-right: 1em;
    }

    @media only screen and (max-width: 1000px) {
        scale: 0.75;
    }
`;