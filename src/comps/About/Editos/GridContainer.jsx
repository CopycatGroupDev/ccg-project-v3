import styled from "styled-components";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: min-content;
  gap: 0.5rem 2rem;
  text-align: left;
  & span {
    color: #0061ad;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default GridContainer;