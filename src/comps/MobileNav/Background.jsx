import styled from "styled-components";

const Background = styled.div`
    background-color: rgba(255, 255, 255, 0.375);
    backdrop-filter: blur(1rem);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
`;

export default Background;