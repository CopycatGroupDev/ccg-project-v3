import styled from "styled-components";

const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem; /* 12 * 0.25rem = 3rem */
  align-items: center;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
  }
`;

export default GridContainer;