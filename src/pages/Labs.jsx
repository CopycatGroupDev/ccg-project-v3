import { HeaderButton } from "../comps/Header/HeaderButton";
import Default from "../wrappers/Default";
import Header from '../comps/Header/Main';
import { Timeline } from "../comps/Timeline";
import { colors } from "../config/colors";
import timelines from "../comps/timelines/main";
import { useContext } from "react";
import { AppContext } from "../wrappers/Provider";
import Form from "../comps/ContactForm/Main";

const data = {
    title: "Labs - Copycat Group",
    color: colors.labs,
    header : {
        bg: '/banners/Bannière CL.png',
        logo: '/logo/lab1.png',
        rows : [
            <>Créer, modifier, refondre.<br />Faites appel a des professionnels du développement et du graphisme pour vos projets.</>,
        ],
        appendixRow : <>Notre équipe de professionnels est dédiée à transformer vos idées en réalité en créant ou reprenant vos visuels graphiques, en concevant des sites web attrayant et conviviaux ou encore en développant votre image sur vos réseaux sociaux.</>
    }
}

export default function Solutions() {
    const { modal } = useContext(AppContext);
    const button = <HeaderButton
    key={btoa(Math.random())}
    color={colors.labs}
    onClick={() => modal.open(
        <Form
        title="Contactez-nous"
        formType="Modal"
        motionCond={false}
        color={colors.default}
        options={{ category : timelines.labs.map(([title]) => title), }}
        selected={{ category : 0, }} />
    )}>
        CONTACTEZ NOUS
    </HeaderButton>

    return <Default value={{ ...data, header : { ...data.header, rows : [...data.header.rows, button] }}}>
        <Header />
        <Timeline color={colors.labs} list={timelines.labs} />
    </Default>
}