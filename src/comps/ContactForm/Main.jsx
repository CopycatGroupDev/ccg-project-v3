import React, { createContext, useContext } from 'react';
import { motion } from 'framer-motion';
import contactForm from './config';
import { useSearchParams } from 'react-router-dom'
import motionProps from './motionProps';
import FormContainer from './FormContainer';

export const FormContext = createContext({ options: {}, selected: "", contactForm });

export default function({ formType, title, motionCond = true, color, options = {}, selected = "", desc }) {
  const [searchParams] = useSearchParams();
  const formFields = contactForm[formType];

  return (<FormContext.Provider value={{ options, title, color, desc, selected, formFields, formType, defaultValues : { rse: 'Demande du formulaire RSE' }, searchParams, subjectDefaultValue : searchParams.get('subject') }}>
    <motion.div {...(motionCond ? motionProps : {})}>
      <FormContainer />
    </motion.div>
  </FormContext.Provider>);
};
