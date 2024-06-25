import styled from 'styled-components';

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  justify-content: center;
  padding: 2rem;
  color: white;

  & > p {
    text-align: left;
  }
`;

export default Content;