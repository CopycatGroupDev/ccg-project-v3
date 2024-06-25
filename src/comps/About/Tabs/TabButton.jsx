import styled from "styled-components";

const TabButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border: 0;
  border-radius: 0.5rem;
  gap: 0.5rem;
  background: ${({ $active }) => ($active ? 'white' : 'transparent')};
  color: ${({ color }) => color};
  justify-content: center;
  white-space: nowrap;

  &:hover {
    background: #e0e0e0;
  }

  &#title{
	justify-content: flex-start;
  }

  @media (max-width: 768px) {
	justify-content: flex-start;
  }
`;

export default TabButton;