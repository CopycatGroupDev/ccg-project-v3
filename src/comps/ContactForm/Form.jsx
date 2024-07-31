import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import contactForm from '../../config/contactForms';
import FormContainer from './FormContainer';
import FormTitle from './FormTitle';
import Label from './Label';
import Button from './Button';
import emailjs from '@emailjs/browser';

import { useSearchParams } from 'react-router-dom'

const FormWrapper = styled.form` display: contents; `;

const Form = ({ formType, title, motionCond = true, color, options = {}, selected = "", desc }) => {
  const [searchParams] = useSearchParams();
  const subjectDefaultValue = searchParams.get('subject')
  const defaultValues = {
      rse: 'Demande du formulaire RSE'
  }

  const formFields = contactForm[formType];
  const motionProps = motionCond ? {
    initial: { opacity: 0, y: 200 },
    transition: { duration: 0.5 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true }
  } : {};

  const submit = (e) => {
    e.preventDefault();
    const inputs = [["URL", window.location.href], ...formFields.map(({ placeholder, name }) => [placeholder, e.target[name].value])];
    const mailText = inputs.map(([placeholder, value]) => `${placeholder}: ${value}`).join('\n');
    emailjs.send('service_o6semg5', 'template_fngu4h2', { color, message: mailText, to_name: 'Erwan' }, '8Rs9RvEbWiGOIy4pj');
    alert('Message envoyé');
  }

  return (
    <motion.div {...motionProps}>
      <FormContainer>
        {title?.length > 0 && <FormTitle $color={color}>{title}</FormTitle>}
        {desc && <p style={{ gridColumn: '1 / -1' }}>{desc}</p>}
        <FormWrapper onSubmit={submit}>
          {formFields.map(({ Component, $colSpan, ...props }, id) => {
            const currentOp = options?.[props.name];
            const currentSel = selected?.[props.name];

            return <Label key={id} $colSpan={$colSpan}>
              {props.placeholder}
              <Component
              {...props}
              required
              defaultValue={defaultValues?.[searchParams.get(props.name)] ?? currentOp?.[currentSel] ?? ""}
              {...{
                [currentOp?.length > 0 && "children"] : currentOp?.map(
                  (opt) => <option key={opt} value={opt}>
                    {opt}
                  </option>
                )
              }} />
            </Label>
          })}
          <Button type="submit">Me faire rappeler</Button>
        </FormWrapper>
      </FormContainer>
    </motion.div>
  );
};

export default Form;
