import styled from "styled-components";

const HorizontalRule = styled.hr`
  margin: 1rem 0;
  display: block;

  @media (min-width: 1024px) {
    display: none;
  }
`;

export default HorizontalRule;