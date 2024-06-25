import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Title } from '../Title';
import { Container as C } from '../Container';

const Container = styled(C)`
  background-color: #efefef;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  @media (max-width: 640px) {
    height: 100vh;
  }
  scroll-snap-align: center;
  scroll-snap-stop: always;
  margin: 0;
  max-width: 100%;

  p { margin: 0 }
`;

const ContentWrapper = styled.div`
  max-width: 1340px;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 5px;
  gap: 8px;
  @media (min-width: 1024px) {
    flex-direction: row;
  }

  & > div {
    width: 100%;
  }
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledImg = styled(motion.img)`
  width: 65%;
`;

const TextContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
  text-align: center;
  color: #4b5563;
  font-size: 1.25rem;
  padding: 0 2em;
`;

const Hr = styled.hr`
  border-color: #0061ad;
  border-width: 1px;
  width: 100%;
  margin: 0;
`;

const PDG = () => (
  <Container>
    <ContentWrapper>
      <ImgContainer>
        <StyledImg 
          src="/photos/pdg.svg" 
          initial={{ opacity: 0, x: 100 }} 
          transition={{ duration: 0.5 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }} 
        />
      </ImgContainer>
      <TextContainer 
        initial={{ opacity: 0, x: -100 }} 
        transition={{ duration: 0.5 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        viewport={{ once: true }}
      >
        <Title>Erwan HECAEN</Title>
        <p>Fondateur et Expert Solutions Documentaires</p>
        <Hr />
        <p>+33 (0) 6 15 94 55 46</p>
        <p>e.hecaen@copycatgroup.fr</p>
      </TextContainer>
    </ContentWrapper>
  </Container>
);

export default PDG;