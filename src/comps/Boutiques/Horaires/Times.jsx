import styled from "styled-components";

const Times = styled.div`
  font-size: 0.75rem;
  display: flex;
  gap: 0.5rem;
  line-height: 1;

  @media (min-width: 1024px) {
    flex-direction: column;
    gap: 0;
  }
`;
export default Times;