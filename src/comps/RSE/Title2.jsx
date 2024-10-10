import styled from "styled-components";
import { Title2 } from "../Title";

export default styled(Title2)`
    font-size: 1.25rem;
    line-height: 1.75rem;
    margin: 0.83em 0;
  font-weight: bold;
  color: ${({ color }) => color || 'black'};
  text-align: center;
  text-transform: ${({ $modifier }) => ($modifier === 'uppercase' ? 'uppercase' : 'none')};
`;