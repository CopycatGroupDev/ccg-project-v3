import React from 'react';
import Carousel from '../HomeCarousel';
import { Title } from '../../Title';
import { Container } from '../../Container';
import ContentWrapper from './ContentWrapper';
import TextBlock from './TextBlock';
import CarouselContainer from './CarouselContainer';
import imagesCarouselHome from './imagesCarousel';

const Sponsors = () => (
  <Container>
    <ContentWrapper>
      <TextBlock
        initial={{ opacity: 0, y: 200 }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Title $color={"#0061AD"}>Ils nous font confiance !</Title>
        <p>Faites comme nos clients, faites-nous confiance pour notre accompagnement et la réalisation de vos projets documentaires ! Adressez-vous à notre guichet unique pour traiter vos besoins de CREATION, d'INFORMATIQUE, d'IMPRIMERIE, de FOURNITURES et SERVICES</p>
      </TextBlock>
      <CarouselContainer
        initial={{ opacity: 0, y: 200 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Carousel images={imagesCarouselHome} />
      </CarouselContainer>
    </ContentWrapper>
  </Container>
);

export default Sponsors;