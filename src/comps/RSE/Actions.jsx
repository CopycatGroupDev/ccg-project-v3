import { Container } from "../Container";
import { ActionsGrid, Card, IconContainer, Paragraph, Title2, TitleBig } from ".";
import RSEActions from "../../config/RSEActions";
import { Icons } from "../../config/icons";

export default function() {
    return <Container>
        <TitleBig>Nos actions</TitleBig>
        <ActionsGrid>
        {RSEActions.map(({ title, text, icon, viewBox = '0 0 63.229 88.556' }, i) => (
            <Card key={i}>
                <IconContainer>
                    <Icons icon={icon} size={90} viewBox={viewBox} />
                </IconContainer>
                <div style={{ padding: '1em' }}>
                    <Title2 style={{ textAlign: 'left' }} $modifier="uppercase" color="#0061ad">{title}</Title2>
                    <Paragraph style={{ textAlign: 'left' }}>{text}</Paragraph>
                </div>
            </Card>
        ))}
        </ActionsGrid>
    </Container>
}