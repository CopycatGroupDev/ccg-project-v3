import { Container } from '../../Container';
import ContactForm from '../../ContactForm/Main';
import { colors } from '../../../config/colors';
import ContentWrapper from './ContentWrapper';
import MotionDiv from './MotionDiv';
import Img from './Img';

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
