import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  color: ${({ color }) => color};
`;

const Title = ({ color, children }) => {
  return <StyledTitle color={color}>{children}</StyledTitle>;
};

export default Title;
