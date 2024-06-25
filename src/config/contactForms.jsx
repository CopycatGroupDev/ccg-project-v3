import React from 'react';
import styled, { css } from 'styled-components';

const css_ = css`
  width: 100%;
  border: 1px solid #d1d5db; /* border-gray-300 */
  font-size: 16px;
  border-radius: 0.25rem;
`;
const Input = styled.input`${css_}`;
const Select = styled.select`${css_}`;
const Textarea = styled.textarea`${css_}`;

const contactForm = {
  Sèvres: [
    { Component: Input, $colSpan: false, placeholder: 'Nom', name: 'name' },
    { Component: Input, $colSpan: false, placeholder: 'Prénom', name: 'firstname' },
    { Component: Input, $colSpan: false, placeholder: 'Numéro de téléphone', name: 'number', type: 'tel' },
    { Component: Input, $colSpan: false, placeholder: 'Société', name: 'firm' },
    { Component: Input, $colSpan: true, placeholder: 'Votre email', name: 'mail', type: 'email' },
    { Component: Input, $colSpan: true, placeholder: 'Message', name: 'message' }
  ],
  Contact: [
    { Component: Input, $colSpan: false, placeholder: 'Nom', name: 'name' },
    { Component: Input, $colSpan: false, placeholder: 'Prénom', name: 'firstname' },
    { Component: Input, $colSpan: true, placeholder: 'Votre email', name: 'mail', type: 'email' },
    { Component: Input, $colSpan: true, placeholder: 'Numéro de téléphone', name: 'number', type: 'tel' },
    { Component: Input, $colSpan: true, placeholder: 'Société', name: 'firm' },
    { Component: Select, $colSpan: true, placeholder: 'Comment avez-vous connu les services Copycat Group ?', name: 'how',
      children: [
        'Par les réseaux sociaux',
        'Par internet',
        'Par une connaissance',
        'Par notre boutique Copycat Sèvres',
        'Par notre boutique Copycat DPS Boulogne',
        'Autres'
      ].map((option) => <option key={option}>{option}</option>) },
    { Component: Input, $colSpan: true, placeholder: 'Ville', name: 'city' },
    { Component: Input, $colSpan: true, placeholder: 'Code postal', name: 'zip' },
    { Component: Input, $colSpan: true, placeholder: 'Sujet', name: 'subject' },
    { Component: Textarea, $colSpan: true, placeholder: 'Votre message', name: 'message' }
  ],
  Home: [
    { Component: Input, $colSpan: false, placeholder: 'Nom', name: 'name' },
    { Component: Input, $colSpan: false, placeholder: 'Prénom', name: 'firstname' },
    { Component: Input, $colSpan: false, placeholder: 'Numéro de téléphone', name: 'number', type: 'tel', defaultValue: "01 23 45 67 89" },
    { Component: Input, $colSpan: false, placeholder: 'Société', name: 'firm' },
    { Component: Input, $colSpan: true, placeholder: 'Votre email', name: 'mail', type: 'email' },
    { Component: Input, $colSpan: true, placeholder: 'Message', name: 'message' }
  ],
  Boulogne: [
    { Component: Input, $colSpan: false, placeholder: 'Nom', name: 'name' },
    { Component: Input, $colSpan: false, placeholder: 'Prénom', name: 'firstname' },
    { Component: Input, $colSpan: false, placeholder: 'Numéro de téléphone', name: 'number' },
    { Component: Input, $colSpan: false, placeholder: 'Société', name: 'firm' },
    { Component: Input, $colSpan: true, placeholder: 'Votre email', name: 'mail' },
    { Component: Textarea, $colSpan: true, placeholder: 'Message', name: 'message' }
  ],
  Modal: [
    { Component: Input, $colSpan: false, placeholder: 'Nom', name: 'name' },
    { Component: Input, $colSpan: false, placeholder: 'Prénom', name: 'firstname' },
    { Component: Input, $colSpan: false, placeholder: 'Numéro de téléphone', name: 'number' },
    { Component: Input, $colSpan: false, placeholder: 'Société', name: 'firm' },
    { Component: Input, $colSpan: true, placeholder: 'Votre email', name: 'mail' },
    { Component: Select, $colSpan: true, placeholder: 'Votre demande concernant ?', name: 'category' },
    { Component: Textarea, $colSpan: true, placeholder: 'Message', name: 'message' }
  ]
};

export default contactForm;