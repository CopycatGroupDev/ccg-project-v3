import styled from "styled-components";
const TabContent = styled.div`
  display: ${({ $active }) => ($active ? 'grid' : 'none')};
  grid-template-columns: 1fr;
  gap: 2rem;
  width: 100%;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default TabContent;