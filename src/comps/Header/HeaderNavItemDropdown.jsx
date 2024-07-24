import { motion } from "framer-motion";
import styled from "styled-components";

export const HeaderNavItemDropdown = styled(motion.div)`
    display: flex;
    background-color: white;
    border-radius: 0.5rem;
    flex-direction: column;
    box-shadow: 0 0 0.25rem 0.25rem rgba(0, 0, 0, 0.1);

    &>a{
        padding: 0.75rem 1.5rem;
        color: ${({ $color }) => $color};
        display: flex;
        align-items: center;
        height: 4rem;
        gap: 1rem;

        &>div{
            display: flex;
            flex-direction: column;
        }

        &:hover{
            background-color: ${({ $color }) => $color};
            color: white;
        }

        &:last-child{
            border-radius: 0 0 0.5rem 0.5rem;
        }

        &:first-child{
            border-radius: 0.5rem 0.5rem 0 0;
        }
    }
`;