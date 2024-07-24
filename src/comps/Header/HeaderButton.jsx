import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderButton = styled(Link)`
    padding: 15px 30px;
    border-radius: 999em;
    border: 0;
    background-color: #fff;
    font-size: 1.25rem;
    line-height: 2rem;
    text-decoration: none;
    text-transform: uppercase;
    color: ${({ color }) => color || 'black'};
`;