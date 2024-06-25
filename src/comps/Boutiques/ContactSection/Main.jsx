import styled from "styled-components";
import { Container as C } from "../../Container";
const Container = styled(C)`
    display: flex;
    flex-direction: column;
    gap: 1em;
`;
import { Title } from "../../Title";
import ContactMap from "../ContactMap/Main";

export default function ContactSection({ page, mapUrl, color }) {
	return <Container>
		<Title style={{ textAlign: 'center' }}>Contactez nous </Title>
		<ContactMap
			page={page}
			mapUrl={mapUrl}
			color={color} />
	</Container>;
}