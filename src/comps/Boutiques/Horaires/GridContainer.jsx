import styled from "styled-components";

const GridContainer = styled.div`
  display: grid;
  gap: 1rem;
  padding: 1rem;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-flow: row;
  grid-auto-rows: min-content;
`;
export default GridContainer;