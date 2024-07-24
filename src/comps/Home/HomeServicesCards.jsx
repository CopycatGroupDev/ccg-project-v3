import styled from "styled-components";
import { HomeServicesCard } from "./HomeServicesCard";

export const HomeServicesCardsStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5em;
    width: 100%;

    @media screen and (min-width: 1024px) {
        gap: 1em;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }
`;

export const HomeServicesCards = ({ cards }) => {
    return <HomeServicesCardsStyle>
        {cards.map((data, i) => <HomeServicesCard
            key={i}
            {...data}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 100, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.25 * i }}
            viewport={{ once: true }} />)}
    </HomeServicesCardsStyle>
}