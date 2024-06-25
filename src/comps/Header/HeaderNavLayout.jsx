import styled from "styled-components";

export const HeaderNavLayout = styled.div`
    display: flex;
    gap: 2rem;
    width: 75%;
    justify-content: center;

    a {
        text-decoration: none;
        font-weight: 350;
        font-style: normal;
        font-size: 1.5rem;
        line-height: 2rem;
    }

    ul {
        display: flex;
        padding: 0;
        gap: 1.5rem;
        flex-wrap: wrap;
        align-content: flex-start;

        li {
            list-style: none;
            height: fit-content;
        }
    }

    @media only screen and (max-width: 1000px) {
        & { justify-content: space-between; max-width: 500px; }
        & ul{ display: none; }
    }

    @media only screen and (min-width: 1000px) {
        & button{ display: none; }
    }
`;