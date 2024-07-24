import styled from "styled-components";
import { Title } from "./Title";

export default styled(Title)`
  background-color: ${({ $color }) => $color};
  width: 100%;
  text-align: center;
  font-size: 2.5rem;
  color: white;
  padding: 0.25em;
`;