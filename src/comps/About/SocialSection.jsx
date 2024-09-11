import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import BannerTitle from '../BannerTitle';
import { colors } from '../../config/colors';

// Styled components
const Container = styled.div`
  padding: 0;
  display: flex;
  width: 100%;
  
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
  color: black;
  font-size: 1.25rem;
`;

const SocialImage = styled.img`
  object-fit: cover;
  aspect-ratio: 1;
  width: fit-content;
  height: 80px;
`;

const SocialSpan = styled.span`
  white-space: nowrap;
`;

const BackgroundImage = styled.img`
  aspect-ratio: 1136 / 377.406;
  height: 100%;
`;

// Main component
/* const SocialSection = () => {
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
 */
const SocialSection = () => {
  return (
    <Container>
      <Content>
    		<BannerTitle $color={colors.default}>Rejoignez-nous sur les réseaux sociaux </BannerTitle>

        <SocialLinks>
          
          <SocialLink to={'https://www.instagram.com/copycat_group/'} target={'_blank'}>
            <SocialImage src="/extLogos/Groupe 690.png" inverted alt="Instagram" />
            <SocialSpan>CopyCat Group</SocialSpan>
          </SocialLink>
          <SocialLink to={'https://www.facebook.com/copycat.groupe/'} target={'_blank'}>
            <SocialImage src="/extLogos/Icon metro-facebook.png" alt="Facebook" />
            <SocialSpan>copycat_group</SocialSpan>
          </SocialLink>
          <SocialLink to={'https://fr.linkedin.com/company/copycat-group'} target={'_blank'}>
            <SocialImage src="/extLogos/Icon metro-linkedin.png" inverted alt="LinkedIn" />
            <SocialSpan>CopyCat Group</SocialSpan>
          </SocialLink>
        </SocialLinks>
      </Content>
    </Container>
  );
};
export default SocialSection;
