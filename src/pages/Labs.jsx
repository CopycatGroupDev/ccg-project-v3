import { HeaderButton } from "../comps/Header/HeaderButton";
import Default from "../wrappers/Default";
import Header from '../comps/Header/Header';
import { Timeline } from "../comps/Timeline";
import { colors } from "../config/colors";
import styled from "styled-components";
import timelines from "../config/timelines";
import { useContext } from "react";
import { AppContext } from "../wrappers/Provider";
import Form from "../comps/ConcactForm/Form";

export default function Solutions() {
    const { modal } = useContext(AppContext);

    return <Default title={"Labs - Copycat Group"}>
        <Header
            textsRows={[
                <>Créer, modifier, refondre.<br />Faites appel a des professionnels du développement et du graphisme pour vos projets.</>,
                <HeaderButton
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
                    Demander une expertise
                </HeaderButton>
            ]}
            plusTextRow={`COPYCAT LABS : Votre partenaire complet en maquettage, programmation et conception graphique pour vos sites web. De la vitrine en ligne à l'e-commerce, nous vous accompagnons de A à Z. Professionnels des outils de conception graphiques, nous vous accompagnerons dans vos projets de création`}
            bg={'/banners/labs.png'}
            logo={'/logo/ccg.jpg'}
            color={colors.labs} />
        <Timeline color={colors.labs} list={timelines.labs} />
    </Default>
}