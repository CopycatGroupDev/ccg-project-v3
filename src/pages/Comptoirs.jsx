/* import { Cover } from "../comps/Header/Cover";
import { HeaderLayout as Layout } from "../comps/Header/HeaderLayout";
import Nav from "../comps/Header/HeaderNav";
import BoutiquesMenu from "../comps/Header/BoutiquesMenu"; */
import Default from "../wrappers/Default";
import Header from "../comps/Header/Main";
import Intro from "../comps/Boutiques/Intro";
import Title from "../comps/Boutiques/Title";
import Text from "../comps/Boutiques/Text";
import TitleWithBar from "../comps/Boutiques/TitleWithBar";
import { renseignements } from "../config/rensei";
import { colors } from './../config/colors';
import { LuPlus } from "react-icons/lu";
import { Link } from 'react-router-dom';
import Cards from "../comps/Boutiques/Cards";
import Card from "../comps/Boutiques/Card";
import CardInfos from "../comps/Boutiques/CardInfos";

const data = {
    title: "Solutions - Copycat Group",
    color: colors.default,
    header : {
        bg: '/banners/Bannières NC.png',
        logo: '/logo/Groupe 805.png',
        rows : [ <>Un comptoir unique, un expert dans chaque métier.</> ],
    },
    cards : [
        { title: 'Copycat Sèvres', color: colors.print, img : '/photos/Sèvres2.jpg', infos : renseignements.Sèvres, link : '/sevres' },
        { title: 'Copycat Boulogne', color: colors.shop, img : '/photos/Boulogne2.jpg', infos : renseignements.Boulogne, link : '/boulogne' },
    ]
}

export default function Comptoirs() {
    return <Default value={data}>
        <Header />
        <Intro />
        <img src="/banners/Groupe 685.png" alt="" style={{
            maxWidth: "100%",
            minHeight: '100px',
            objectFit: "cover"
        }} />
        <Text>
            <TitleWithBar>
                <Title>Nos Comptoirs</Title>
                <hr />
                <span />
            </TitleWithBar>
        </Text>
        <Cards>
            {data.cards.map((card, i) => <Card key={i} $color={card.color}>
                <img src={card.img} alt="" />
                <section>
                    <Title>{card.title}</Title>
                    <CardInfos>
                        {card.infos.map(({ Icon, text }, i) => <p key={i}>
                            <Icon fill={"#9ca3af"} />
                            <span>{text}</span>
                        </p>)}
                    </CardInfos>
                    <Link reloadDocument to={card.link}><LuPlus size={26} /> En savoir plus</Link>
                </section>
            </Card>)}
        </Cards>
    </Default>
}