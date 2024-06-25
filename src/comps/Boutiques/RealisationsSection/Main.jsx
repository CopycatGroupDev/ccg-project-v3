import React, { useState } from 'react';
import RealisationButton from './RealisationButton';
import RealisationImages from './RealisationImages';
import { Title } from '../../Title';
import Container from './Container';
import FlexContainer from './FlexContainer';

const Realisations = ({ realisations, color }) => {
  const [currentTabRealisation, setCurrentTabRealisation] = useState(realisations[0]?.name);

  return (
    <Container>
      <Title color={'black'}>Nos réalisations</Title>
      <FlexContainer>
        {realisations.map((value, key) => (
          <RealisationButton
            key={key}
            isActive={value.name === currentTabRealisation}
            color={color}
            onClick={() => setCurrentTabRealisation(value.name)}
          >
            {value.text}
          </RealisationButton>
        ))}
      </FlexContainer>
      <RealisationImages
        images={realisations.find(({ name }) => name === currentTabRealisation)?.imgs}
        root={realisations.find(({ name }) => name === currentTabRealisation)?.root}
      />
    </Container>
  );
};

export default Realisations;