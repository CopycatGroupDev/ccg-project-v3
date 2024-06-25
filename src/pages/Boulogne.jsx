import { FaArrowDownLong } from "react-icons/fa6";
import Default from "../wrappers/Default";
import Header from '../comps/Header/Header';
import ContactMap from "../comps/Boutiques/ContactMap/Main";
import Desc from '../comps/Boutiques/DescSection/Main';
import { horaires } from "../config/horaires";
import { renseignements } from "../config/rensei";
import { colors } from "../config/colors";
import SocialSection from "../comps/Boutiques/SocialSection/Main";
import { Title } from "../comps/Title";
import { Container as C } from "../comps/Container";
import styled from "styled-components";
import ContactSection from "../comps/Boutiques/ContactSection/Main";
import Services from "../comps/Boutiques/ServicesSection/Main";
import { services } from "../config/services";
import Realisations from "../comps/Boutiques/RealisationsSection/Main";
import realisations from "../config/real";

const Container = styled(C)`
    display: flex;
    flex-direction: column;
    gap: 1em;
`;

export default function Boulogne() {
    const headerTextRows = [
        <>Retrouvez notre boutique COPYCAT DPS pour l'achat de vos fournitures informatique, un service de Photocopie - reprographie et impression numérique.</>,
        <FaArrowDownLong key={btoa(Math.random())} size={64} />
    ];

    return <Default title={"Copycat DPS Boulogne - Copycat Group"}>
        <Header
            textsRows={headerTextRows}
            bg={'/banners/boulogne.svg'}
            logo={'/logo/Boulogne.svg'}
            color={'#f39115'} />
        <Desc
            horaires={horaires?.Boulogne}
            renseignements={renseignements?.Boulogne}
            title={"La boutique à Boulogne"}
            desc={"Découvrez Copycat DPS Boulogne, votre choix idéal pour les fournitures de bureau et les services d'impression.De l'impression à la réparation d'ordinateurs, notre équipe dévouée vous offre des produits de qualité et des services personnalisés pour répondre à vos besoins professionnels. Faites-nous confiance pour une expérience d'achat agréable et des solutions documentaires adaptées"} />
        <Services
            services={services.Boulogne} />
        <Realisations
            realisations={realisations.Boulogne}
            color={colors.boulogne} />
        <SocialSection
            color={colors.boulogne} />
        <ContactSection
            page={"Boulogne"}
            mapUrl="https://maps.google.com/maps?q=DIGITAL%20PRINT%20SERVICES%20boulogne&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
            color={colors.boulogne} />
    </Default>
}