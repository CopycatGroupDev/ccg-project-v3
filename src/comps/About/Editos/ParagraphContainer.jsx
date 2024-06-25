import styled from "styled-components";

const ParagraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0rem;
  grid-column: 1;

  @media (min-width: 1024px) {
    grid-column: ${({ $lgStart }) => $lgStart && $lgStart.col};
    grid-row: ${({ $lgStart }) => $lgStart && $lgStart.row};
  }
`;

export default ParagraphContainer;

export const Paragraph = styled.p`
  & span {
    color: #0061ad;
  }
`;