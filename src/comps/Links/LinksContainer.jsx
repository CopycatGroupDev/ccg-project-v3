import styled from 'styled-components';

export default styled.div`
display: flex;
justify-content: center;
gap: 1rem;
width: 100%;
max-width: 1024px;
padding: 0 1rem;
word-break: break-word;

@media (max-width: 768px) {
  flex-direction: column;
  font-size: 1.25rem;
}

@media (min-width: 768px) {
  font-size: 2rem;
}
`;