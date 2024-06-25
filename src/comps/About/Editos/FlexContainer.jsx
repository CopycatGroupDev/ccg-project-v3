import styled from "styled-components";

const FlexContainer = styled.div`
  display: flex;
  gap: 2rem;
  height: 100px;
  color: #0061ad;

  ${({ $lgStart }) => $lgStart && `
    @media (min-width: 1024px) {
      grid-column: ${$lgStart.col};
      grid-row: ${$lgStart.row};
    }
  `}
`;

export default FlexContainer;