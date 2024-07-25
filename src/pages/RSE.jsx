import AltHeader from "../comps/Header/AltHeader";
import Default from "../wrappers/Default";
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
//import Icons from './Icons'; // Import your Icons component
import RSEActions from './../config/RSEActions'; // Import your RSEActions data
import { Container } from "../comps/Container";
import { Icons } from "../config/icons";
import { Title2 as T2 } from "../comps/Title";

const Title2 = styled(T2)`
    font-size: 1.25rem;
    line-height: 1.75rem;
    margin: 0.83em 0;
  font-weight: bold;
  color: ${({ color }) => color || 'black'};
  text-align: center;
  text-transform: ${({ modifier }) => (modifier === 'uppercase' ? 'uppercase' : 'none')};
`;

const TitleBig = styled(Title2)`
    font-size: 2.25rem;
    line-height: 2.5rem;
    font-weight: inherit;
`

const Divider = styled.hr`
  width: 100%;
  border: 1px solid #0061ad;
`;

const Paragraph = styled.p`
  font-size: 20px;
  line-height: 28px;
  color: ${({ color }) => color || '#9ca3af'};
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 2rem;
`;

const FlexBox = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  justify-content: center;
  align-items: ${({ $align = 'center' }) => $align};
  gap: ${({ $gap }) => $gap};
  background-color: ${({ bgColor }) => bgColor || 'transparent'};
  color: ${({ color }) => color || 'black'};
  padding: 2rem;

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  aspect-ratio: 931 / 581.88;
  height: 100%;
  display: flex;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Card = styled.div`
  background-color: #e0f2fe; /* bg-blue-200 */
  text-align: left;
  border-radius: 0.5rem;
  position: relative;
`;

const IconContainer = styled.div`
  background-color: white;
  padding: 1rem;
  border-radius: 0 0 0 2rem;
  margin: 0;
  float: right;
`;

const StyledLink = styled(Link)`
  background-color: #0061ad;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  width: fit-content;
  align-self: center;
`;

const ActionsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }

  & > :nth-last-child(-n+1) {
    grid-column: span 3;
  }
`;

export default function RSE() {
    return <Default title={"Contact - Copycat Group"}>
        <AltHeader
            bg={'/banners/Bannière RSE.png'}
            height={400}
            coverFull={true}
            bgCover={true}/>

        <Container>
            <TitleBig> {'Notre Engagement RSE :'} <br /> {'Construire un Avenir Responsable'} </TitleBig> <Divider />
            <Paragraph>
            {'La RSE, où Responsabilité Sociale des entreprises, consiste pour les entreprises à prendre en compte les aspects sociaux, environnementaux et économiques dans leurs actions, au-delà de la recherche de profits. Cela implique d\'agir de manière responsable envers la société et l\'environnement, en favorisant des conditions de travail équitables, le respect des droits de l\'homme et des pratiques durables.'}
            </Paragraph>
            <Divider />
        </Container>

        <Container>
            <Grid>
            {[
                { title: 'Environnemental', text: 'Nous mettons l\'accent sur la protection de l\'environnement en adoptant des pratiques durables et respectueuses.', icon: 'Environment', viewBox: '0 0 67.602 68' },
                { title: 'Social', text: 'Nous nous engageons à avoir un impact positif sur la société en maintenant des relations éthiques et en soutenant des initiatives sociales.', icon: 'Social', viewBox: '0 0 100.97 66.875' },
                { title: 'Sociétal', text: 'Nous valorisons l\'épanouissement de notre équipe en favorisant un environnement de travail inclusif et équitable.', icon: 'Society', viewBox: '0 0 97.561 68' }
            ].map(({ title, text, icon, viewBox = '0 0 63.229 88.556' }, i) => (
                <FlexBox key={i} direction="column" align="center" $gap="1em">
                    <Icons icon={icon} size={90} viewBox={viewBox} />
                    <Title2 modifier="uppercase" color="#0061ad">{title}</Title2>
                    <Paragraph align="center">{text}</Paragraph>
                </FlexBox>
            ))}
            </Grid>
        </Container>

        <Container>
            <FlexBox color="white" $align="stretch" style={{ padding: 0 }}>
                <FlexBox bgColor="#0061ad" direction="column" $gap="16px" style={{ minWidth: '44.66%' }}>
                    <TitleBig color="white">1% Pour Les Animaux</TitleBig>
                    <Paragraph color="white">CopyCat Group s’engage dans le cadre d’un partenariat avec 1% pour les animaux.</Paragraph>
                    <Paragraph color="white">Nous reversons 1% de notre chiffre d’affaires afin de protéger les animaux et la biodiversité.</Paragraph>
                </FlexBox>
                <ImageContainer>
                    <Image src={'/photos/panda-roux.jpg'} alt="" />
                </ImageContainer>
            </FlexBox>
        </Container>

        <Container>
            <TitleBig>{'Nos actions'}</TitleBig>
            <ActionsGrid>
            {RSEActions.map(({ title, text, icon, viewBox = '0 0 63.229 88.556' }, i) => (
                <Card key={i}>
                    <IconContainer>
                        <Icons icon={icon} size={90} viewBox={viewBox} />
                    </IconContainer>
                    <div style={{ padding: '1em' }}>
                        <Title2 style={{ textAlign: 'left' }} modifier="uppercase" color="#0061ad">{title}</Title2>
                        <Paragraph style={{ textAlign: 'left' }}>{text}</Paragraph>
                    </div>
                </Card>
            ))}
            </ActionsGrid>
        </Container>

        <StyledLink to="/contact?subject=rse">Demander la charte RSE Copycat Group</StyledLink>
    </Default>
};
