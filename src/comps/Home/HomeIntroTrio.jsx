import styled from "styled-components";

export default styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    margin-top: 1rem;
    max-width: 1200px;

    div {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: center;
        text-align: center;
    }
`;