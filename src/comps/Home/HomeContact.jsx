import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { Container } from './../Container';
import ContactForm from '../ContactForm/Form';
import { colors } from '../../config/colors';

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

const MotionDiv = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  scroll-snap-align: center;
  scroll-snap-stop: always;
  height: 650px;
`;

const ifr = css`
  
`;

const Iframe = styled.iframe` ${ifr} `;
const Img = styled.img`
  width: 100%;
  height: 100%;
  border: none;
  scrolling: no;
  margin: 0;
  object-fit: contain;
  aspect-ratio: 604/710;`;

const HomeContact = () => (
  <Container>
    <ContentWrapper>
      <ContactForm formType="Home" title={"Un interlocuteur pour tous vos besoins d'entreprise"} desc={"Trouvez tout ce dont votre entreprise a besoin chez nous, de la création de l'identité visuelle à la mise en place de solutions informatiques sur mesure, en passant par des fournitures de bureau de qualité. Concentrez-vous sur l'essentiel avec notre service personnalisé et notre expertise inégalée."} color={colors.default} />
      <MotionDiv
        initial={{ opacity: 0, y: 200 }}
        transition={{ duration: 0.5, delay: 0.75 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {/* <Iframe
          src="https://maps.google.com/maps?q=copycat%20sevre&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
          id="gmap_canvas"
          frameBorder="0"
        ></Iframe> */}
        <Img src="/photos/Groupe de masques 62.png" alt="" />
      </MotionDiv>
    </ContentWrapper>
  </Container>
);

export default HomeContact;
