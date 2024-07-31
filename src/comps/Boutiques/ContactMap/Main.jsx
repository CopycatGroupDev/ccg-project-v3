import Form from "../../ContactForm/Form";
import { Container } from "../../Container";
import ContentWrapper from "../../ContentWrapper";
import { colors } from "../../../config/colors";
import styled from "styled-components";
import { motion } from "framer-motion";

export default function ContactMap({ page, mapUrl, color }) {
    return <Container>
        <ContentWrapper>
            <Form formType={page} motionCond={false} color={color} />
            <MotionDiv
                //initial={{ opacity: 0, y: 200 }}
                //transition={{ duration: 0.5, delay: 0.75 }}
                //whileInView={{ opacity: 1, y: 0 }}
                //viewport={{ once: true }}
            >
                <Iframe
                src={mapUrl}
                id="gmap_canvas"
                frameBorder="0"
                ></Iframe>
            </MotionDiv>
        </ContentWrapper>
    </Container>
}

const MotionDiv = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  scroll-snap-align: center;
  scroll-snap-stop: always;
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 500px;
  border: none;
  scrolling: no;
  margin-height: 0;
  margin-width: 0;
`;