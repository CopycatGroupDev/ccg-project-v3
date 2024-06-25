import styled from 'styled-components';
const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  text-transform: uppercase;
  font-size: 0.875rem;

  &>span{
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    text-transform: uppercase;
    font-size: 0.875rem;
  }
`;
export default TagsContainer;