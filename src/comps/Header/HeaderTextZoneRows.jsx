import { motion } from "framer-motion";
import styled from "styled-components";

export const HeaderTextZoneRows = styled(motion.div)`
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 18px;
    color: white;
    padding: 0 2rem;

    & button{
        color: ${p => p.$color};
    }
`;
