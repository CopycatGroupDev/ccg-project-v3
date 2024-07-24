import styled from "styled-components";

export default styled.div`
  display: flex;
  flex-direction: ${({ $reverse }) => $reverse ? 'row-reverse' : 'row'};
  align-items: center;
  justify-content: space-between;
  gap: 1em;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  img {
    max-width: 100%;
  }
`;