import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  font-size: 1.25rem; /* text-xl */
  padding: 1rem 2rem; /* py-4 px-8 */
  background-color: #e5e7eb; /* bg-gray-200 */
  border-radius: 9999px; /* rounded-full */
  border: 0;
  &:hover {
    background-color: #d1d5db; /* hover:bg-gray-300 */
  }
  &.active {
    background-color: ${({ color }) => color};
    color: white;
  }
`;

const RealisationButton = ({ isActive, color, onClick, children }) => {
  return (
    <Button className={isActive ? 'active' : ''} color={color} onClick={onClick}>
      {children}
    </Button>
  );
};

export default RealisationButton;
