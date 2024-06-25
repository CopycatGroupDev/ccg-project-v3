import styled from "styled-components";

const Title = styled.div`
  font-size: 2rem;
  color: ${props => props.color || 'white'};
`;

export default Title;