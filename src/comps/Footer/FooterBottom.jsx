import styled from "styled-components";

export const FooterBottom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > div { display: flex; gap: 0.5em; }
    .end { align-self: end; }
`;