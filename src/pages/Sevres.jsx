import { FaArrowDownLong } from "react-icons/fa6";
import Default from "../wrappers/Default";
import Header from '../comps/Header/Header';
import ContactMap from "../comps/Boutiques/ContactMap/Main";
import Desc from "../comps/Boutiques/DescSection/Main";
import { horaires } from "../config/horaires";
import { renseignements } from "../config/rensei";
import { colors } from "../config/colors";
import { Container as C } from "../comps/Container";
import styled from "styled-components";
import SocialSection from "../comps/Boutiques/SocialSection/Main";
import { Title } from "../comps/Title";
import ContactSection from "../comps/Boutiques/ContactSection/Main";
import Services from "../comps/Boutiques/ServicesSection/Main";
import { services } from "../config/services";
import Realisations from "../comps/Boutiques/RealisationsSection/Main";
import realisations from "../config/real";

export default function Sevres() {
    return <Default title={"Copycat Sèvres - Copycat Group"}>
        <Header
            textsRows={[
                <>Retrouvez notre boutique COPYCAT Sèvres avec un service de Photocopie reprographie et impression numérique.</>,
                <FaArrowDownLong key={btoa(Math.random())} size={64} />
            ]}
            bg={'/banners/sevres.svg'}
            logo={'/logo/sevres.png'}
            color={'#ed00b5'} />
        <Desc
            horaires={horaires?.Sèvres}
            renseignements={renseignements?.Sèvres}
            desc={"Découvrez Copycat Sèvres, votre boutique de référence pour les fournitures de bureau et les services d'impression. Située au cœur de Sèvres, notre équipe dévouée vous propose une large sélection de produits de qualité et des services personnalisés pour répondre à tous vos besoins professionnels. Faites confiance à notre expertise et à notre engagement envers la satisfaction client pour une expérience d'achat agréable et des solutions documentaires sur mesure."}
            title={"Copycat Sèvres"} />
        <Services
            services={services.Sèvres} />
        <Realisations
            realisations={realisations.Sèvres}
            color={colors.sevres} />
        <SocialSection
            color={colors.sevres} />
        <ContactSection
            page={"Sèvres"}
            mapUrl="https://maps.google.com/maps?q=copycat%20sevre&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
            color={colors.sevres} />
    </Default>
}

// crée comp ContactSection