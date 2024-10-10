import styled from "styled-components";

export default styled.div`
    padding: 2rem;
    border-radius: 0.5rem;
    margin-bottom: 0.5rem;
    background-color: ${({ $bgColor }) => $bgColor ?? '#0061ad'};
    box-shadow: 0 0 0.25rem 0.25rem rgba(0, 0, 0, 0.1);
    aspect-ratio: 1;
    height: fit-content;
    overflow: auto;
    a {
        color: white;
    }
`;