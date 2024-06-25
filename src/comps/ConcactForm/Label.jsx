import styled from "styled-components";

const Label = styled.label`
  grid-column: ${({ $colSpan }) => ($colSpan ? 'span 2' : 'auto')};
`;

export default Label;