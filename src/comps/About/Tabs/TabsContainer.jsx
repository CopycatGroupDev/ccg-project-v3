import styled from "styled-components";

const TabsContainer = styled.div`
  background-color: #F2F2F2;
  width: 100%;
  padding: calc(0.25rem + 0.125rem);
  gap: 0.5rem;
  display: flex;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 2;
  }
`;

export default TabsContainer;