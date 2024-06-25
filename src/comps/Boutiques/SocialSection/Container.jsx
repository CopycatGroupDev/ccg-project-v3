import styled from "styled-components";

const Container = styled.div`
  padding: 0;
  display: flex;
  width: 100%;
  background-color: ${props => props.$color || '#0061ad'};
  
  @media (max-width: 1300px) {
    flex-direction: column;
  }
  @media (min-width: 1300px) {
    height: 250px;
  }
`;

export default Container;