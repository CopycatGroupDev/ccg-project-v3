import styled from "styled-components";
import { Container } from "../Container";
import ContactForm_ from '../ConcactForm/Form';
import { colors } from "../../config/colors";

const ContentWrapper = styled.div`
    padding: 0 3rem;
`;

const ContactForm = () => {
    return <Container>
        <ContentWrapper>
            <ContactForm_ formType="Contact" motionCond={false} color={colors.default} />
        </ContentWrapper>
    </Container>
};
  
  export default ContactForm;