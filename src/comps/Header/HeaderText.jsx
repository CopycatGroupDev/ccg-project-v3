import styled from "styled-components";

export const HeaderText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: 1rem 0;
    font-size: 20px;
    margin-bottom: 3.5rem;
    position: relative;
    z-index: revert-layer;
    font-size: 1.875rem;
    line-height: 2.25rem;

    @media only screen and (max-width: 1000px) {
        margin-bottom: 2rem;
    }

    @media only screen and (max-width: 1000px) and (max-height: 800px) and (orientation: portrait) {
        font-size: 1.25rem;
    }

    @media only screen and (max-width: 1000px) and (min-height: 800px) and (orientation: portrait) {
        font-size: 1.5rem;
    }
`;