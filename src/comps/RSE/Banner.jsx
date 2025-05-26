import { Container } from "../Container";
import Flexbox from "./Flexbox";
import Image from "./Image";
import ImageContainer from "./ImageContainer";
import Paragraph from "./Paragraph";
import TitleBig from "./TitleBig";

export default function() {
    return <Container>
        <Flexbox color="white" $align="stretch" style={{ padding: 0 }}>
            <Flexbox $bgColor="#0061ad" direction="column" $gap="16px" style={{ minWidth: '44.66%' }}>
                <TitleBig color="white">1% Pour Les Animaux</TitleBig>
                <Paragraph color="white">CopyCat Group s’engage dans le cadre d’un partenariat</Paragraph>
                <Paragraph color="white">Nous reversons 1% de notre chiffre d’affaires afin de protéger les animaux et la biodiversité.</Paragraph>
            </Flexbox>
            <ImageContainer>
                <Image src={'/photos/panda-roux.jpg'} alt="" />
            </ImageContainer>
        </Flexbox>
    </Container>
}