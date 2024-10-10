import styled from "styled-components";

export default styled.p`
    font-size: 20px;
    line-height: 28px;
    color: ${({ color }) => color || '#9ca3af'};
    text-align: center;
`;