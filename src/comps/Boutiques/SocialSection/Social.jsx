import { Link as L } from "react-router-dom";
import styled from "styled-components";

export const Links = styled.div`
  display: flex;
  justify-content: center;
  gap: 4rem;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Link = styled(L)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  color: white;
`;

export const Image = styled.img`
  object-fit: cover;
  aspect-ratio: 1;
  width: fit-content;
  height: 55px;
  filter: ${props => props.inverted && 'invert(1)'};
`;

export const Span = styled.span`
  padding: 0.5rem 1rem;
  border: 2px solid white;
  border-radius: 1rem;
  white-space: nowrap;
`;

export default { Links, Link, Image, Span }