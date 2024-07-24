import Editos from "../comps/About/Editos/Main";
import SocialSection from "../comps/About/SocialSection";
import { Tabs } from "../comps/About/Tabs/Main";
import Values from "../comps/About/Values";
import BannerTitle from "../comps/BannerTitle";
import AltHeader from "../comps/Header/AltHeader";
import { Title } from "../comps/Title";
import aboutTabs from "../config/aboutTabs";
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
            bg={'/banners/Bannière Ap.png'}
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
        <Tabs tabs={aboutTabs} />
		{/* <Title $color={colors.default}>Ils nous font confiance</Title> */}
		<Title $color={colors.default}>Nos valeurs</Title>
        <Values />
        <SocialSection />
    </Default>
}