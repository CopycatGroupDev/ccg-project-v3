import styled from "styled-components";

const Button = styled.button`
  padding: 1rem;
  background-color: #0061ad;
  border-radius: 9999px;
  border: 0;
  color: white;
  margin-top: 0.5rem;
  grid-column: span 2;
  width: 50%;
  justify-self: left;

  @media (max-width: 640px) {
    width: 100%;
  }
`;

export default Button;