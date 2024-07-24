import { HeaderButton } from "../comps/Header/HeaderButton";
import Default from "../wrappers/Default";
import Header from '../comps/Header/Main';
import Services from "../comps/Home/HomeServices";
import PDG from "../comps/Home/PDG";
import Sponsors from "../comps/Home/Sponsors/Main";
import HomeContact from "../comps/Home/HomeContact";
import { colors } from "../config/colors";
import Intro from "../comps/Home/HomeIntro";

const button = <HeaderButton
    key={btoa(Math.random())}
    color={colors.default}
    to={'/contact'}>
    Demander une expertise
</HeaderButton>

const data = {
    title: "Copycat Group",
    color: colors.default,
    header : {
        bg: '/banners/Bannières NC.png',
        logo: '/logo/ccg.jpg',
        rows : [
            <>" Document as a Service "</>,
            button,
            <>Votre interlocuteur privilégié au service du document !</>
        ]
    }
}

export default function Home() {
    return <Default value={data}>
        <Header />
        <Intro />
        <Services />
        <PDG />
        <Sponsors />
        <HomeContact />
        <style>{'body { background-color: #fff; }'}</style>
    </Default>
}