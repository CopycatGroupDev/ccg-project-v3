import { Container } from "../Container";
import Divider from "./Divider";
import Paragraph from "./Paragraph";
import TitleBig from "./TitleBig";

export default function () {
    return <Container>
        <TitleBig> {'Notre Engagement RSE :'} <br /> {'Construire un Avenir Responsable'} </TitleBig> <Divider />
        <Paragraph>
        {'La RSE, où Responsabilité Sociale des entreprises, consiste pour les entreprises à prendre en compte les aspects sociaux, environnementaux et économiques dans leurs actions, au-delà de la recherche de profits. Cela implique d\'agir de manière responsable envers la société et l\'environnement, en favorisant des conditions de travail équitables, le respect des droits de l\'homme et des pratiques durables.'}
        </Paragraph>
        <Divider />
    </Container>
}