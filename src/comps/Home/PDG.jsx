/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/display-name */
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Title2 } from '../Title';
import { Container as C } from '../Container';

// Container for the whole section
const Container = styled(C)`
  background-color: #efefef;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  @media screen and (max-width: 640px) {
    flex-direction: column;  // Stack vertically on small screens
  }
  scroll-snap-align: center;
  scroll-snap-stop: always;
  margin: 0;
  max-width: 100%;
  padding: 2em;

  p { margin: 0 }
`;

// Content wrapper for image and text
const ContentWrapper = styled.div`
  max-width: 1340px;
  display: flex;
  align-items: center; /* Align items horizontally */
  gap: 2em; /* Space between image and text */
  padding: 10px 5px;
  width: 100%;

  @media screen and (max-width: 640px) {
    flex-direction: column; /* Stack vertically on small screens */
  }
`;

// Container for the image
const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 1024px) {
    height: 11em;
  }
`;

// Styled image
const StyledImg = styled(motion.img)`
  width: 200px;
  height: 200px;
  border-radius: 50%; /* Make the image circular */
  object-fit: cover;
`;

// Text container with horizontal lines
const TextContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
  text-align: center;
  color: #4b55638F;
  font-size: 1.25rem;
  padding: 0 2em;
  flex: 1; /* Takes up the remaining space */
`;

// Horizontal line (styled <hr>)
const Hr = styled.hr`
  border: none;
  height: 2px;
  background-color: #0061ad; /* Blue color */
  width: 80%; /* Adjust the length of the line */
  margin: 0.5em 0;
`;

export default () => (
  <Container>
    {[
      { name: 'Erwan HECAEN', img: '/photos/pdg.svg', position: 'Fondateur et Expert Solutions Documentaires', email: "e.hecaen@copycatgroup.fr" },
    ].map(({ name, img, position }, i) => (
      <ContentWrapper key={i}>
        <ImgContainer>
          <StyledImg
            src={img}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          />
        </ImgContainer>

        <TextContainer
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Hr /> {/* Top line */}
          <Title2>{name}</Title2>
          <p>{position}</p>
          <Hr /> {/* Bottom line */}
        </TextContainer>
      </ContentWrapper>
    ))}
  </Container>
);
