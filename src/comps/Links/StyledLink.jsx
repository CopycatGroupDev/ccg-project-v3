import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default styled(Link)`
background-color: ${({ $color }) => $color};
border-radius: 1rem;
width: 100%;
@media (min-width: 768px) {
  max-width: 33%; 
}
display: grid;
grid-template-rows: min-content;
align-items: center;
text-align: center;
scroll-snap-align: center;
font-size: 20px;
text-decoration: none;

& img {
  aspect-ratio: 2/1;
  background-color: #333;
  width: 100%;
  border-radius: 1rem 1rem 0 0;
}

& div {
  color: white;
  padding: 1rem;
}
`;