import styled from "styled-components";

export default styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
width: 100%;

@media (min-width: 1024px) {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

& > :nth-last-child(-n+1) {
  grid-column: span 3;
}
`;