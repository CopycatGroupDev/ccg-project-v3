import styled from "styled-components";
import { Title } from "../Title";

const FormTitle = styled(Title)`
  grid-column: span 2;
  color: ${({ $color }) => $color}; /* text-blue-800 */
  text-align: left;
`;

export default FormTitle;