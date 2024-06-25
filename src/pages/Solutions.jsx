import { HeaderButton } from "../comps/Header/HeaderButton";
import Default from "../wrappers/Default";
import Header from '../comps/Header/Header';
import { Timeline } from "../comps/Timeline";
import { colors } from "../config/colors";
import { Title } from "../comps/Title";
import List from "../comps/Solutions/List";
import { AppContext } from "../wrappers/Provider";
import { useContext } from "react";
import solutionsList from "../config/solutionsList";
import timelines from "../config/timelines";
import Form from "../comps/ConcactForm/Form";

export default function Solutions() {
    const { modal } = useContext(AppContext);

    return <Default title={"Solutions - Copycat Group"}>
        <Header
            textsRows={[
                'Mettez en place les outils adaptés à votre environnement professionnel !',
                <HeaderButton
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
            ]}
            plusTextRow={`Expert des services sur-mesure et solutions informatique, COPYCAT SOLUTIONS est la clé d'une organisation bien ficelée. De vos services d'impression aux logiciels GED laissez-nous trouver les outils qui vous conviendrons au mieux `}
            bg={'/banners/solutions.png'}
            logo={'/logo/ccg.jpg'}
            color={colors.solutions}
            />
        <Timeline color={colors.solutions} list={timelines.solutions} />
        <List solutions={solutionsList.solutions} />
    </Default>
}