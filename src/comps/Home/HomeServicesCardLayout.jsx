import { motion } from "framer-motion";
import styled from "styled-components";

export const HomeServicesCardLayout = styled(motion.div)`
    display: flex;
    flex-direction: column;
    gap: 1em;
    width: 100%;
    align-items: center;
    justify-content: space-between;

    & p {
        margin: 0;
        line-height: 2;
        max-width: 230px;
        height: 6em;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: wrap;
        font-size: smaller;
        display: flex;
        align-items: center;
    }

    & img {
        height: 12.5rem;
    }

    & a {
        border: none;
        background-color: ${({ $color }) => $color};
        color: white;
        padding: 0.5em 1em;
        border-radius: 999em;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        text-decoration: none;
        font-size: smaller;
    }
`;