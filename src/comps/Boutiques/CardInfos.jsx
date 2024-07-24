import styled from "styled-components";

export default styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5em;

    p {
        margin: 0;
        display: flex;
        gap: 0.7em;
        justify-content: flex-start;
        align-items: center;

        svg {
            --size: 1.3em;
            height: var(--size);
            width: var(--size);
        }

        span {
            width: 100%;
        }
    }
`;