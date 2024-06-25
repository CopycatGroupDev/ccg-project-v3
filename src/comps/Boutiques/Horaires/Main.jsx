import React from 'react';
import styled from 'styled-components';
import { Title } from '../../Title'; 
import Grid from './Grid';
import GridContainer from './GridContainer';
import Item from './Item';
import ColorBar from './ColorBar';
import Times from './Times';
import Closed from './Closed';
import InfoContainer from './InfoContainer';
import InfoItem from './InfoItem';
import InfoText from './InfoText';
import ItemContent from './ItemContent';
import { motion } from 'framer-motion';
import appears from '../../../methods/appears';

const Horaires = ({ horaires, renseignements }) => {
  return (
    <Grid>
      <Title color={'black'}>Horaires d'ouverture</Title>
      <GridContainer>
        {horaires?.map((value, key) => {
          const row = horaires.filter(jour => jour.col === value.col).indexOf(value) + 1;
          const closed = !(value.debut && value.fin);

          return (
            <Item key={key} col={value.col} row={row} color={value.color}  {...appears(key)}>
              <ColorBar color={value.color} />
              <ItemContent>
                <div>{value.jour}</div>
                <Times>
                  {closed ? (
                    <Closed>Fermé</Closed>
                  ) : (
                    value.debut.map((debut, key) => (
                      <motion.div key={key}>{`${debut} - ${value.fin[key]}`}</motion.div>
                    ))
                  )}
                </Times>
              </ItemContent>
            </Item>
          );
        })}
      </GridContainer>
      <InfoContainer>
        {renseignements.map((value, key) => (
          <InfoItem key={key}>
            <value.Icon size={43} />
            <InfoText>{value.text}</InfoText>
          </InfoItem>
        ))}
      </InfoContainer>
    </Grid>
  );
};

export default Horaires;