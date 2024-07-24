import styled from "styled-components";

const FormContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  label {
    display: grid;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  input, select, textarea {
    width: 100%;
    border: 1px solid #d1d5db; /* border-gray-300 */
    padding: 0.5rem 0.75rem;
    border-radius: 0;
  }
`;

export default FormContainer;