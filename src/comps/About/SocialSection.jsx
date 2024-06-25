import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// Styled components
const Container = styled.div`
  padding: 0;
  display: flex;
  width: 100%;
  background-color: #0061ad;
  
  @media (max-width: 1300px) {
    flex-direction: column;
  }
  @media (min-width: 1300px) {
    height: 250px;
  }
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  justify-content: center;
  padding: 2rem;
  color: white;

  & > p {
    text-align: left;
  }
`;

const Title = styled.div`
  font-size: 2rem;
  color: ${props => props.color || 'white'};
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 4rem;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const SocialLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  color: white;
`;

const SocialImage = styled.img`
  object-fit: cover;
  aspect-ratio: 1;
  width: fit-content;
  height: 55px;
  filter: ${props => props.inverted && 'invert(1)'};
`;

const SocialSpan = styled.span`
  padding: 0.5rem 1rem;
  border: 2px solid white;
  border-radius: 1rem;
  white-space: nowrap;
`;

const BackgroundImage = styled.img`
  aspect-ratio: 1136 / 377.406;
  height: 100%;
`;

// Main component
const SocialSection = () => {
  return (
    <Container>
      <Content>
        <Title color="#fff">Retrouvez nous sur les réseaux sociaux</Title>
        <SocialLinks>
          <SocialLink to={'https://www.facebook.com/copycat.groupe/'}>
            <SocialImage src="/extLogos/socialLogo1.PNG" alt="Facebook" />
            <SocialSpan>copycat_group</SocialSpan>
          </SocialLink>
          <SocialLink to={'https://www.instagram.com/copycat_group/'}>
            <SocialImage src="/extLogos/socialLogo2.PNG" inverted alt="Instagram" />
            <SocialSpan>CopyCat Group</SocialSpan>
          </SocialLink>
          <SocialLink to={'https://fr.linkedin.com/company/copycat-group'}>
            <SocialImage src="/extLogos/socialLogo3.PNG" inverted alt="LinkedIn" />
            <SocialSpan>CopyCat Group</SocialSpan>
          </SocialLink>
        </SocialLinks>
      </Content>
      <BackgroundImage src="/photos/Capture.PNG" alt="Background" />
    </Container>
  );
};

export default SocialSection;
