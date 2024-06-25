import Editos from "../comps/About/Editos/Main";
import SocialSection from "../comps/About/SocialSection";
import { Tabs } from "../comps/About/Tabs/Main";
import Values from "../comps/About/Values";
import AltHeader from "../comps/Header/AltHeader";
import { Title } from "../comps/Title";
import { colors } from "../config/colors";
import Default from "../wrappers/Default";
import { createGlobalStyle } from "styled-components";

const BodyModifier = createGlobalStyle`
    body { background-color: #fff; }
`;

export default function About() {
    return <Default title={"A propos - Copycat Group"}>
        <BodyModifier />
        <AltHeader
            bg={'/banners/boutiques.png'}
            title={"A propos de Copycat Group"}
            coverFull={true}
            text={<>Avec des valeurs hautes en couleurs, Copycat Group se démarque sur le marché du document
                grace à un soin tout particulier apporté à notre relationnel ou encore au respect des valeurs
                importantes telles que la reforestation. Vous servir de la meilleure des façons reste notre
                objectif numéro un ! Nous développons constamment de nouveaux projets, suivons l'évolution
                des solutions digitales et de l'innovation du print.... Nous vous guidons pas à pas, toujours
                dans le respect de notre crédo : <br />
                " Document as a Service "</>} />
        <Editos />
        <Tabs tabs={[
            {value: 'solutions', text: 'De la conception de votre infrastructure à la sécurité des données, nous proposons des solutions sur mesure pour stimuler votre productivité. Avec des services de qualité supérieure tels que la téléphonie, la gestion électronique de documents et la maintenance informatique.', img: "/photos/A propos - solutions.jpg", icon: "/icons/Solutions.svg" },
            { value: 'shop', text: 'Nous offrons une vaste sélection de produits de qualité, allant de la papeterie, aux accessoires de bureau pratiques et aux solutions de rangement efficaces. Parcourez notre catalogue en ligne sur copycat.vous-livre.com et trouvez tout ce dont vous avez besoin pour un bureau bien organisé et fonctionnel.', img: "/photos/A propos - shop.jpg", icon: "/icons/Shop.svg" },
            { value: 'print', text: 'Que vous ayez besoin de cartes de visite, de flyers, de brochures ou de supports publicitaires personnalisés, COPYCAT PRINT est là pour vous fournir des impressions de qualité supérieure. Simplifiez le processus d\'impression en ligne en visitant copycatprint.fr.', img: "/photos/A propos - print.jpg", icon: "/icons/Print.svg" },
            { value: 'labs', text: 'Notre équipe de professionnels qualifiés est dédiée à transformer vos idées en réalité en concevant des sites web attrayants, conviviaux et parfaitement adaptés à vos besoins. En plus de cela, COPYCAT LABS propose également un service de graphisme pour créer des supports de communication percutants qui feront briller votre entreprise.', img: "/photos/A propos - labs.jpg", icon: "/icons/Labs.svg" }
        ]} />
        
		<Title $color={colors.default}>Nos valeurs</Title>
        <Values />
        <SocialSection />
    </Default>
}