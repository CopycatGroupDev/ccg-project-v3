import Default from "../wrappers/Default";
import Header from '../comps/Header/Main';
import Desc from "../comps/Boutiques/DescSection/Main";
import { horaires } from "../config/horaires";
import { renseignements } from "../config/rensei";
import { colors } from "../config/colors";
import ContactSection from "../comps/Boutiques/ContactSection/Main";
import Services from "../comps/Boutiques/ServicesSection/Main";
import services from "../config/services";
import Links from "../comps/Links/Main";
import { HeaderButton } from "../comps/Header/HeaderButton";

const button = <HeaderButton key={btoa(Math.random())} color={colors.sevres} to={'/contact'}>
    Contactez-nous
</HeaderButton>
const data = {
    title: "Sèvres - Copycat Group",
    color: colors.sevres,
    header : {
        bg: '/banners/sevres.svg',
        logo: '/logo/Logo comptoir Sèvres.png',
        rows : [
            <>Retrouvez notre comptoir COPYCAT Sèvres pour l'achat de vos fournitures bureautiques, informatiques, vos impressions et ses experts pour un service de qualité !</>,
            button
        ],
    }
}

export default function Sevres() {

    return <Default value={data}>
        <Header longP={true} />
        <Desc
            horaires={horaires?.Sèvres}
            renseignements={renseignements?.Sèvres}
            desc={"Découvrez notre comptoir COPYCAT Sèvres, votre choix idéal pour les fournitures de bureau et les services d'impression. Nous vous proposons une large sélection de produits de qualité et des services personnalisés pour répondre à tous vos besoins en CREATION, IMPRIMERIE, INFORMATIQUE, FOURNITURES et SERVICES. Notre équipe vous offre des solutions documentaires adaptées et une expérience d'achat agréable. Faites confiance à notre expertise et à notre engagement envers la satisfaction client pour des services sur mesure qui vous simplifient la vie au quotidien."}
            title={"Copycat Sèvres"}
            photo={"/photos/Sèvres2.jpg"} />
        <Services
            services={services.sevres} />
        <Links title={'Commandez en ligne'} links={[
            { img: '/photos/Fournitures.png', text: 'Commandez vos fournitures de bureau', link: 'https://www.copycat.vous-livre.com/', color: colors.shop },
            { img: '/photos/IT-Multimédia.png', text: 'Choisissez vos écrans et bornes interactives', link: 'https://copycat-group.mydigitalcorner.fr/', color: colors.shop },
            { img: '/photos/Informatique.png', text: 'Commandez vos fournitures informatiques', link: 'https://copycat-shop.fr/', color: colors.shop },
            { img: '/photos/Supports imprimés.png', text: 'Imprimez vos supports de communications', link: 'http://www.copycatprint.fr/accueil/', color: colors.print }
        ]} />
        {/* <Realisations
            realisations={realisations.Sèvres}
            color={colors.sevres} />
        <SocialSection
            color={colors.sevres} /> */}
        <ContactSection
            page={"Sèvres"}
            mapUrl="https://maps.google.com/maps?q=copycat%20sevre&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
            color={colors.sevres} />
    </Default>
}

// crée comp ContactSection