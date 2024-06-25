import styled from "styled-components";

const ColorBar = styled.div`
  width: 1rem;
  border-radius: 2rem;
  background-color: ${({ color }) => `${color}ff`};
`;

export default ColorBar;