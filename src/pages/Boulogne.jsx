import Default from "../wrappers/Default";
import Header from '../comps/Header/Main';
import Desc from '../comps/Boutiques/DescSection/Main';
import { horaires } from "../config/horaires";
import { renseignements } from "../config/rensei";
import { colors } from "../config/colors";
import ContactSection from "../comps/Boutiques/ContactSection/Main";
import Services from "../comps/Boutiques/ServicesSection/Main";
import services from "../config/services";
import Links from "../comps/Links";
import { HeaderButton } from "../comps/Header/HeaderButton";

const button = <HeaderButton key={btoa(Math.random())} color={colors.boulogne} to={'/contact'}>
    Contactez-nous
</HeaderButton>
const data = {
    title: "Boulogne - Copycat Group",
    color: colors.boulogne,
    header : {
        bg: '/banners/boulogne.svg',
        logo: '/logo/Logo comptoir Boulogne.png',
        rows : [
            <>Retrouvez notre boutique COPYCAT Sèvres avec un service de Photocopie reprographie et impression numérique.</>,
            button
        ],
    }
}

export default function Boulogne() {

    return <Default value={data}>
        <Header />
        <Desc
            horaires={horaires?.Boulogne}
            renseignements={renseignements?.Boulogne}
            title={"Le comptoir de Boulogne"}
            desc={"Découvrez Copycat DPS Boulogne, votre choix idéal pour les fournitures de bureau et les services d'impression.De l'impression à la réparation d'ordinateurs, notre équipe dévouée vous offre des produits de qualité et des services personnalisés pour répondre à vos besoins professionnels. Faites-nous confiance pour une expérience d'achat agréable et des solutions documentaires adaptées"}
            photo={"/photos/Boulogne.jpg"} />
        <Services
            services={services.sevres} />
        <Links title={'Commandez en ligne'} links={[
            { img: '/photos/Fournitures.png', text: 'Commandez vos fournitures de bureau', link: 'https://www.copycat.vous-livre.com/', color: colors.shop },
            { img: '/photos/IT-Multimédia.png', text: 'Choisissez vos écrans et bornes interactives', link: 'https://copycat-group.mydigitalcorner.fr/', color: colors.shop },
            { img: '/photos/Informatique.png', text: 'Commandez vos fournitures informatiques', link: 'https://copycat-shop.fr/', color: colors.shop },
            { img: '/photos/Supports imprimés.png', text: 'Imprimez vos supports de communications', link: 'http://copycatprint.fr/', color: colors.print }
        ]} />
        {/* <Realisations
            realisations={realisations.Boulogne}
            color={colors.boulogne} />
        <SocialSection
            color={colors.boulogne} /> */}
        <ContactSection
            page={"Boulogne"}
            mapUrl="https://maps.google.com/maps?q=DIGITAL%20PRINT%20SERVICES%20boulogne&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
            color={colors.boulogne} />
    </Default>
}