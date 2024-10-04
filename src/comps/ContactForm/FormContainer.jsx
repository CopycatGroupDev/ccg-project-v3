import { useContext } from "react";
import styled from "styled-components";
import { FormContext } from "./Main";
import formMap from './formMap';
import FormWrapper from './FormWrapper';
import FormTitle from './FormTitle';
import Button from './Button';
import Submit from './submit';

export default styled.div.attrs(function() {
  //const { title, desc, formFields, color }
  const formCtxt = useContext(FormContext);
  const { submit } = Submit();

  return {
    children: <>
      {formCtxt?.title?.length > 0 && <FormTitle $color={formCtxt?.color}>{formCtxt?.title}</FormTitle>}
      {formCtxt?.desc && <p style={{ gridColumn: '1 / -1' }}>{formCtxt?.desc}</p>}
      <FormWrapper onSubmit={submit}>
        {formCtxt?.formFields?.map(formMap)}
        <Button type="submit">Me faire rappeler</Button>
      </FormWrapper>
    </>
  }
})`
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