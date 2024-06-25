import styled from "styled-components";

export const FooterBottom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3em;
    & > div { display: flex; gap: 0.5em; }
    .end { align-self: end; }
`;