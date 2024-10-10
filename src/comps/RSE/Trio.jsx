import { Icons } from "../../config/icons";
import { Container } from "../Container";
import Flexbox from "./Flexbox";
import Grid from "./Grid";
import Paragraph from "./Paragraph";
import Title2 from "./Title2";

const columns = [
    { title: 'Environnemental', text: 'Nous mettons l\'accent sur la protection de l\'environnement en adoptant des pratiques durables et respectueuses.', icon: 'Environment', viewBox: '0 0 67.602 68' },
    { title: 'Social', text: 'Nous nous engageons à avoir un impact positif sur la société en maintenant des relations éthiques et en soutenant des initiatives sociales.', icon: 'Social', viewBox: '0 0 100.97 66.875' },
    { title: 'Sociétal', text: 'Nous valorisons l\'épanouissement de notre équipe en favorisant un environnement de travail inclusif et équitable.', icon: 'Society', viewBox: '0 0 97.561 68' }
]

export default function() {
    return <Container>
        <Grid>
        {columns.map(({ title, text, icon, viewBox = '0 0 63.229 88.556' }, i) => (
            <Flexbox key={i} direction="column" $align="center" $gap="1em">
                <Icons icon={icon} size={90} viewBox={viewBox} />
                <Title2 $modifier="uppercase" color="#0061ad">{title}</Title2>
                <Paragraph $align="center">{text}</Paragraph>
            </Flexbox>
        ))}
        </Grid>
    </Container>
}