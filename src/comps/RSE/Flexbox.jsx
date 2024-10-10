import styled from "styled-components";

export default styled.div`
    display: flex;
    flex-direction: ${({ direction }) => direction || 'row'};
    justify-content: center;
    align-items: ${({ $align = 'center' }) => $align};
    gap: ${({ $gap }) => $gap};
    background-color: ${({ $bgColor }) => $bgColor || 'transparent'};
    color: ${({ color }) => color || 'black'};
    padding: 2rem;

    h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    }

    @media (max-width: 1024px) {
    flex-direction: column;
    }
`;