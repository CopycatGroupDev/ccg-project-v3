import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderButton = styled(Link)`
    padding: 15px 30px;
    border-radius: 999em;
    border: 0;
    background-color: #fff;
    font-size: 1.5rem;
    line-height: 2rem;
    text-decoration: none;
    color: ${({ color }) => color || 'black'};
`;