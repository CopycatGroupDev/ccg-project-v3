import styled from "styled-components";
import { Link } from "react-router-dom";

const TagLink = styled(Link)`
  padding: 0rem 2rem;
  border-radius: 9999px;
  text-decoration: none;
  border: 2px solid;
  color: ${({ color }) => color};
  border-color: ${({ color }) => color};
`;

export default TagLink;