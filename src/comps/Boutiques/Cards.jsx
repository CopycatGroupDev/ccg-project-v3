import styled from "styled-components";

export default styled.div`
    display: flex;
    gap: 3em;
    justify-content: center;
    align-items: stretch;
    flex-wrap: wrap;
    width: 100%;

    @media screen and (max-width: 700px) { padding: 0 1.5em; }
`;