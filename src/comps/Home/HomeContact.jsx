import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Container } from './../Container';
import ContactForm from '../ConcactForm/Form';
import { colors } from '../../config/colors';

const ContentWrapper = styled.div`
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

const MotionDiv = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  scroll-snap-align: center;
  scroll-snap-stop: always;
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 500px;
  border: none;
  scrolling: no;
  margin-height: 0;
  margin-width: 0;
`;

const HomeContact = () => (
  <Container>
    <ContentWrapper>
      <ContactForm formType="Home" title={"Faites vous rappeler !"} color={colors.default} />
      <MotionDiv
        initial={{ opacity: 0, y: 200 }}
        transition={{ duration: 0.5, delay: 0.75 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Iframe
          src="https://maps.google.com/maps?q=copycat%20sevre&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
          id="gmap_canvas"
          frameBorder="0"
        ></Iframe>
      </MotionDiv>
    </ContentWrapper>
  </Container>
);

export default HomeContact;
