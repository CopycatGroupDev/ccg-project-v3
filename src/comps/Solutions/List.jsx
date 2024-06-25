import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Container } from '../Container';
import { Title } from '../Title';

const Wrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 2em;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const GridItem = styled.div`
  display: flex;
  flex-direction: ${({ $reverse }) => $reverse ? 'row-reverse' : 'row'};
  align-items: center;
  justify-content: space-between;
  gap: 1em;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  img {
    max-width: 100%;
  }
`;

const StyledTitle = styled(Title)`
  color: #08A03A;
  font-size: 2xl;

  @media (min-width: 768px) {
    font-size: 3xl;
  }
`;

const StyledContent = styled.div`
  background-color: white;
  border-left: 4px solid #08A03A;
  padding: 4px;
  height: 100%;
  padding: 1em;
  display: flex;
  align-items: center;
`;

const Text = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  gap: 1em;
`;

const SolutionsList = ({ solutions }) => {
  return (
    <Wrapper>
      <Title $color="#000">Nos services</Title>
      <GridContainer>
        {solutions.map(({ title, content, img }, key) => (
          <GridItem key={key} $reverse={key % 2}>
            <Text
              initial={{ opacity: 0, x: key % 2 ? 200 : -200 }}
              transition={{ duration: 0.5 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}>
              <StyledTitle>{title}</StyledTitle>
              <StyledContent>{content}</StyledContent>
            </Text>
            <img src={img} alt="" />
          </GridItem>
        ))}
      </GridContainer>
    </Wrapper>
  );
};

export default SolutionsList;