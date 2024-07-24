import styled from "styled-components";

export default styled.div`
    border: 2px solid ${({ $color }) => $color};
    border-radius: 1.2em;
    display: flex;
    flex-direction: column;
    max-width: 400px;

    img {border-radius: 1em 1em 0 0; width: 100%;}
    section {
        display: flex;
        flex-direction: column;
        padding: 1em;
        gap: 1em;
        height: 100%;
        justify-content: space-between;
    }

    a {
        background-color: ${({ $color }) => $color};
        color: white;
        border-radius: 0.5em;
        padding: 0.5em 0.75em;
        font-size: 1em;
        border: none;
        width: fit-content;
        display: flex;
        align-items: center;
        gap: 0.25em;
        text-decoration: none;
    }
`;