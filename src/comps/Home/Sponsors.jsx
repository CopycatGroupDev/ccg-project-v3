import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Carousel from './HomeCarousel'; // Assuming you have a Carousel component
import { Title } from '../Title';
import { Container } from '../Container';

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

const TextBlock = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  scroll-snap-align: center;
  scroll-snap-stop: always;

  p{
    margin: 0;
  }
`;

const CarouselContainer = styled(motion.div)`
  display: flex;
  border: 1px solid #e5e7eb; /* tailwind border */
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06); /* tailwind shadow */
  border-radius: 0.75rem; /* tailwind rounded-xl */
  padding: 1rem; /* tailwind p-4 */
  background-color: #ffffff; /* tailwind bg-white */
  aspect-ratio: 1/1;

  @media (min-width: 1024px) {
    aspect-ratio: 16/9; /* tailwind lg:aspect-video */
  }
`;

export const imagesCarouselHome = [
    '/log2.jpg',
    '/log1.jpg',
    '/log7.jpg',
    '/log4.jpg',
    '/log5.jpg',
    '/log6.jpg',
    '/log3.jpg'
]  

const Sponsors = () => (
  <Container>
    <ContentWrapper>
      <TextBlock
        initial={{ opacity: 0, y: 200 }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Title $color={"#1e40af"}>Ils nous font confiance !</Title>
        <p>Faites comme nos clients, faites-nous confiance pour notre accompagnement et la réalisation de vos projets documentaires ! Adressez-vous à notre guichet unique pour traiter vos besoins d’IMPRESSIONS, de GRAPHISMES, de FOURNITURES, de BUREAUTIQUES et de SOLUTIONS DIGITALES.</p>
      </TextBlock>
      <CarouselContainer
        initial={{ opacity: 0, y: 200 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Carousel images={imagesCarouselHome} className="px-16 py-12" />
      </CarouselContainer>
    </ContentWrapper>
  </Container>
);

export default Sponsors;