import styled from "styled-components";
import { Container } from "../Container";
import ContactForm_ from '../ContactForm/Form';
import { colors } from "../../config/colors";

const ContentWrapper = styled.div`
    padding: 0 3rem;

    @media (max-width: 640px) {
        padding: 0;
    }
`;

const ContactForm = () => {
    return <Container>
        <ContentWrapper>
            <ContactForm_ formType="Contact" motionCond={false} color={colors.default} />
        </ContentWrapper>
    </Container>
};
  
  export default ContactForm;