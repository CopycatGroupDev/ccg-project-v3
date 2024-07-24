import styled from "styled-components";

export default styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: -1em;
width: 100%;
white-space: nowrap;
gap: 1.5rem;
position: relative;

h1 {
    margin-bottom: 0;
}

hr {
    width: 100%;
    border-color: #0061ad;
}

span {
    position: absolute;
    right: 0;
    --size: 12px;
    width: var(--size);
    height: var(--size);
    border-radius: var(--size);
    background-color: #0061ad;
}
`;