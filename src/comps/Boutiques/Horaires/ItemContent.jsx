import styled from "styled-components";

const ItemContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  padding: 0.5rem 2rem;
  width: 100%;
  font-size: 1.25rem;
  font-weight: medium;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export default ItemContent;