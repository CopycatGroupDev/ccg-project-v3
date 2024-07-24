import { Title } from "../Title";
import { HomeServicesCards } from "./HomeServicesCards";
import { HomeServicesContainer } from './HomeServicesContainer';
import cards from "./HomeServicesCardsList";

export default function Services() {
    return <HomeServicesContainer id="services">
        <Title className="title">Nos services</Title>
        <HomeServicesCards cards={cards} />
    </HomeServicesContainer>
}