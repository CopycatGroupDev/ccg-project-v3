import styled from "styled-components";

export default styled.div`
  max-width: 1340px;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 3rem;
  gap: 2rem;
  align-items: center;

  @media (min-width: 1024px) {
    flex-direction: row;
  }

  & > div {
    width: 100%;
  }
`;