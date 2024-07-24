import styled from "styled-components";

export const FooterColumns = styled.div`
    display: flex;
    --gap: 1em;
    gap: var(--gap);
    font-size: 16px;
    line-height: 24px;
    height: 100%;
    justify-content: space-evenly;
    @media only screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

export const FooterColumn = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;

    h1{
        margin-bottom: 0.5em;
        font-size: 30px;
        line-height 36px;
        text-overflow: ellipsis !important;
        overflow: hidden !important;
    }

    &:has(section){
        gap: 1em;
    }

    section{
        display: flex;
        flex-direction: column;
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
    }
`;