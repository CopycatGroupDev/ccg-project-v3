import { HeaderButton } from "../comps/Header/HeaderButton";
import Default from "../wrappers/Default";
import Header from '../comps/Header/Main';
import { Timeline } from "../comps/Timeline";
import { colors } from "../config/colors";
import List from "../comps/Solutions/List/Main";
import { AppContext } from "../wrappers/Provider";
import { useContext } from "react";
import solutionsList from "../config/solutionsList";
import timelines from "../config/timelines";
import Form from "../comps/ContactForm/Form";

const data = {
    title: "Solutions - Copycat Group",
    color: colors.solutions,
    header : {
        bg: '/banners/Bannière CS.png',
        logo: '/logo/sol1.png',
        rows : [
            <>Mettez en place les outils adaptés à votre environnement professionnel !</>,
        ],
        appendixRow : <>De la conception de votre infrastructure à la sécurité des données, nous proposons des solutions sur mesure pour accroître votre productivité et augmenter votre sécurité. La mise en place de vos projets est systématiquement accompagnée d’un contrat de maintenance ou de support pour votre sérénité</>
    }
}

export default function Solutions() {
    const { modal } = useContext(AppContext);

    const button = <HeaderButton
        key={btoa(Math.random())}
        color={colors.solutions}
        onClick={() => modal.open(
            <Form
            title="Contactez-nous"
            formType="Modal"
            motionCond={false}
            color={colors.solutions}
            options={{ category : timelines.solutions.map(([title]) => title), }}
            selected={{ category : 0, }} />
        )}>
            Demander une expertise
        </HeaderButton>

    return <Default value={{ ...data, header : { ...data.header, rows : [...data.header.rows, button] }}}>
        <Header />
        <Timeline color={colors.solutions} list={timelines.solutions} />
        <List solutions={solutionsList.solutions} />
    </Default>
}