import React from 'react';
import styled from 'styled-components';
import { Container as C } from '../../Container';
import { Title as T } from '../../Title';
import GridContainer from './GridContainer';
import FlexContainer from './FlexContainer';
import TitleContainer from './TitleContainer';
import SvgIcon from './SvgIcon';
import ParagraphContainer, { Paragraph } from './ParagraphContainer';
import HorizontalRule from './HorizontalRule';
import Image from './Image';

const Title = styled(T)`
  padding: 1rem 0;
  margin: 1.5rem 0;
  width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        height: fit-content;
        white-space: nowrap;
`;
const Container = styled(C)`white-space: break-spaces;`;

// Component
const Editos = () => (
  <Container>
    <GridContainer>
      <FlexContainer $lgStart={{ col: '1', row: '1' }}>
        <TitleContainer>
          <div></div>
          <Title $color="#0061ad">Edito CopycatGroup</Title>
          <div className="flex items-end">
            <SvgIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.909 17.523">
              <g id="Groupe_68" data-name="Groupe 68" transform="translate(0)">
                <path id="Tracé_73" data-name="Tracé 73" d="M3.552,8.928a4.926,4.926,0,0,1,5.071.9,4.447,4.447,0,0,1,.267,6.344,4.608,4.608,0,0,1-6.528.144C-.308,13.732-.451,10.57.637,7.306,1.807,3.857,4.394,1.619,7.781.1c.39.554.739,1.068,1.17,1.7C6.18,3.405,4.065,5.5,3.552,8.928Z" transform="translate(0 -0.079)" />
                <path id="Tracé_74" data-name="Tracé 74" d="M70.375,0,71.5,1.724c-2.833,1.6-4.865,3.736-5.42,7.062.554-.082,1.068-.205,1.6-.246a4.489,4.489,0,0,1,2.669,8.376,4.734,4.734,0,0,1-5.789-1.047c-2.238-2.443-2.607-6.487-.924-9.793A13.543,13.543,0,0,1,70.375,0Z" transform="translate(-49.743)" />
              </g>
            </SvgIcon>
          </div>
        </TitleContainer>
      </FlexContainer>

      <ParagraphContainer $lgStart={{ col: '1', row: '2' }}>
        {/* <Paragraph>La volonté de <span>COPYCAT GROUP</span> est de rassembler toute l'expertise documentaire. Nous avons à coeur de vous proposer une analyse et une solution documentaire complètes.</Paragraph>
        <Paragraph>Face à une offre de plus en plus importante, comment choisir son matériel et vers qui se tourner ? Quels noms doivent se trouver en premier dans votre carnet d'adresses?</Paragraph>
        <Paragraph><span>LE DOCUMENT</span> n'est pas qu'une question de matériel. C'est aussi un service et tout ce qui touche à son environnement : le digital, du matériel d'appoint, des fournitures, de l'équipement personnalisé.</Paragraph> */}
        <Paragraph>La volonté de <span>COPYCAT GROUP</span> est de rassembler toute l'expertise documentaire. Nous avons à coeur de vous proposer une analyse et une solution documentaire complètes.</Paragraph>
        <Paragraph>Face à une offre de plus en plus importante, comment choisir son matériel et vers qui se tourner ? Quels noms doivent se trouver en premier dans votre carnet d'adresses?</Paragraph>
        <Paragraph><span>LE DOCUMENT</span> n'est pas qu'une question de matériel. C'est aussi un service et tout ce qui touche à son environnement : le digital, du matériel d'appoint, des fournitures, de l'équipement personnalisé.</Paragraph>
        <div className="flex justify-end -mt-6">
          <SvgIcon id="Groupe_69" data-name="Groupe 69" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.909 17.523">
            <path id="Tracé_73" data-name="Tracé 73" d="M6.54,8.775a4.926,4.926,0,0,1-5.071-.9A4.447,4.447,0,0,1,1.2,1.528,4.608,4.608,0,0,1,7.73,1.385C10.4,3.971,10.543,7.133,9.455,10.4,8.285,13.846,5.7,16.084,2.311,17.6c-.39-.554-.739-1.068-1.17-1.7C3.912,14.3,6.026,12.2,6.54,8.775Z" transform="translate(12.818 -0.1)" />
            <path id="Tracé_74" data-name="Tracé 74" d="M64.87,17.484l-1.129-1.724c2.833-1.6,4.866-3.736,5.42-7.062-.554.082-1.068.205-1.6.246A4.489,4.489,0,0,1,64.891.568,4.734,4.734,0,0,1,70.68,1.615c2.238,2.443,2.607,6.487.924,9.793A13.543,13.543,0,0,1,64.87,17.484Z" transform="translate(-62.593 0.04)" />
          </SvgIcon>
        </div>
      </ParagraphContainer>

      <HorizontalRule />

      <FlexContainer $lgStart={{ col: '2', row: '1' }}>
        <Image src="/photos/pdg.svg" alt="pdg" />
        <TitleContainer>
          <div></div>
          <Title $color="#0061ad">Erwan HECAEN</Title>
          <div className="flex items-end">
            <SvgIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.909 17.523">
              <g id="Groupe_68" data-name="Groupe 68" transform="translate(0)">
                <path id="Tracé_73" data-name="Tracé 73" d="M3.552,8.928a4.926,4.926,0,0,1,5.071.9,4.447,4.447,0,0,1,.267,6.344,4.608,4.608,0,0,1-6.528.144C-.308,13.732-.451,10.57.637,7.306,1.807,3.857,4.394,1.619,7.781.1c.39.554.739,1.068,1.17,1.7C6.18,3.405,4.065,5.5,3.552,8.928Z" transform="translate(0 -0.079)" />
                <path id="Tracé_74" data-name="Tracé 74" d="M70.375,0,71.5,1.724c-2.833,1.6-4.865,3.736-5.42,7.062.554-.082,1.068-.205,1.6-.246a4.489,4.489,0,0,1,2.669,8.376,4.734,4.734,0,0,1-5.789-1.047c-2.238-2.443-2.607-6.487-.924-9.793A13.543,13.543,0,0,1,70.375,0Z" transform="translate(-49.743)" />
              </g>
            </SvgIcon>
          </div>
        </TitleContainer>
      </FlexContainer>

      <ParagraphContainer $lgStart={{ col: '2', row: '2' }}>
        <Paragraph>Chez <span>COPYCAT GROUP</span> nous avons à coeur de vous proposer les solutions les plus adaptées à votre fonctionnement.</Paragraph>
        <Paragraph>Pour chaque service, nous mettons à votre disposition un interlocuteur privilégié et spécialisé.</Paragraph>
        <Paragraph><span>NOS OUTILS PRINCIPAUX</span> : l'observation, l'écoute et l'attention à votre domaine et vos métiers.</Paragraph>
        <Paragraph>Tous les secteurs imposent contraintes et besoins, vous accompagner pour les déterminer est notre première mission.</Paragraph>
        <div className="flex justify-end -mt-6">
          <SvgIcon id="Groupe_69" data-name="Groupe 69" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.909 17.523">
            <path id="Tracé_73" data-name="Tracé 73" d="M6.54,8.775a4.926,4.926,0,0,1-5.071-.9A4.447,4.447,0,0,1,1.2,1.528,4.608,4.608,0,0,1,7.73,1.385C10.4,3.971,10.543,7.133,9.455,10.4,8.285,13.846,5.7,16.084,2.311,17.6c-.39-.554-.739-1.068-1.17-1.7C3.912,14.3,6.026,12.2,6.54,8.775Z" transform="translate(12.818 -0.1)" />
            <path id="Tracé_74" data-name="Tracé 74" d="M64.87,17.484l-1.129-1.724c2.833-1.6,4.866-3.736,5.42-7.062-.554.082-1.068.205-1.6.246A4.489,4.489,0,0,1,64.891.568,4.734,4.734,0,0,1,70.68,1.615c2.238,2.443,2.607,6.487.924,9.793A13.543,13.543,0,0,1,64.87,17.484Z" transform="translate(-62.593 0.04)" />
          </SvgIcon>
        </div>
      </ParagraphContainer>
    </GridContainer>
  </Container>
);

export default Editos;
