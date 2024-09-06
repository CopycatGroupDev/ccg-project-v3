/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/display-name */
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Title, Title2, Title3 } from '../Title';
import { Container as C } from '../Container';

const Container = styled(C)`
  background-color: #efefef;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  @media screen and (max-width: 640px) {
    flex-direction: column;
  }
  scroll-snap-align: center;
  scroll-snap-stop: always;
  margin: 0;
  max-width: 100%;
  padding: 2em;

  p { margin: 0 }
`;

const ContentWrapper = styled.div`
  max-width: 1340px;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 5px;
  gap: 1em;

  @media screen and (min-width: 640px) {
    &:nth-of-type(1) {
      border-right: 2px solid #0061ad;
    }
  }

  @media (min-width: 1024px) {
    flex-direction: column;
  }

  & > div {
    width: 100%;
  }
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  @media (min-width: 1024px) {
    height: 11em;
  }
`;

const StyledImg = styled(motion.img)`
  width: 65%;
      object-fit: contain;
`;

const TextContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.75em;
  text-align: center;
  color: #4b55638F;
  font-size: 1.25rem;
  padding: 0 2em;
`;

const Hr = styled.hr`
  border-color: #0061ad;
  border-width: 1px;
  width: 100%;
  margin: 0;
`;

export default () => (
  <Container>
    {[
      { name: 'Erwan HECAEN' , img: '/photos/pdg.svg', position: 'Fondateur et Expert Solutions Documentaires', email: "e.hecaen@copycatgroup.fr" },
      { name: 'Pierre DE LOISNE' , img: '/photos/Groupe de masques 81.png', position: 'Associé et Expert Solutions Informatiques', email: "p.deloisne@copycatgroup.fr" },
    ].map(({ name, img, position, email }, i) => (
      <ContentWrapper key={i}>
        <ImgContainer>
          <StyledImg 
            src={img}
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
          <Title2>{name}</Title2>
          <p>{position}</p>
          {/* <Hr />
          <p>+33 (0) 6 15 94 55 46</p>
          <p style={{ margin: '0.5em' }}>{email}</p>
          <Hr style={{ marginBottom: '2em' }} /> */}
        </TextContainer>
      </ContentWrapper>
    ))}
  </Container>
);