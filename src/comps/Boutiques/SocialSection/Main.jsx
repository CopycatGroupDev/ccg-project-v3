import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Container from './Container';
import Social from './Social';
import Content from './Content';
import Title from './Title';

const BackgroundImage = styled.img`
  aspect-ratio: 750 / 250;
  height: 100%;
`;

// Main component
const SocialSection = ({ color = '#fff' }) => {
  return (
    <Container $color={color}>
      <Content>
        <Title color="#fff">Pour en découvrir plus : <br /> Rejoignez-nous sur Instagram !</Title>
        <Social.Links>
          <Social.Link to={'https://www.instagram.com/copycat_group/'}>
			      {/* <Social.Image src="/extLogos/socialLogo2.PNG" inverted alt="Instagram" /> */}
            <Social.Span>@copycatsevres</Social.Span>
          </Social.Link>
        </Social.Links>
      </Content>
      <BackgroundImage src="/photos/Boutiques - Bannièreinsta.png" alt="Background" />
    </Container>
  );
};

export default SocialSection;
