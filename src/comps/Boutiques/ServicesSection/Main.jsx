import styled from "styled-components";
import appears from "../../../methods/appears";
import { Title } from "../../Title";
import Container from "./Container";
import GridContainer from "./GridContainer";
import LogoTitle from "./LogoTitle";
import ServiceImage from "./ServiceImage";
import ServiceImg from "./ServiceImg";
import ServiceImgsContainer from "./ServiceImgsContainer";
import ServiceItem from "./ServiceItem";
import ServiceText from "./ServiceText";
import ServiceTitle from "./ServiceTitle";

function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

const Services = ({ services }) => {
	return (
		<Container>
			<Title color={'black'}>Nos services dans nos comptoirs :</Title>
			<GridContainer>
				{/*services.map(({ mainImg, imgs, path, text, title, color, icon, trnsIcon = false }, key) => {  
					return (
						<ServiceItem key={key} {...appears(key)}>
							<LogoTitle>
								<ServiceImage src={icon} />
								<ServiceTitle color={color}>{title}</ServiceTitle>
							</LogoTitle>
							<ServiceImgsContainer>
								{imgs.map((img, key) => <ServiceImg $trnsIcon={trnsIcon} key={key} src={`/icons/${img}.png`} />)}
							</ServiceImgsContainer>
							<ServiceText>{text}</ServiceText>
						</ServiceItem>
					);
				})*/}
				<Items>
					{services?.map(({ color, icon, title }, key) => <Item key={key} color={color}>
						<img src={`/icons/comptoirs/${icon}.png`} alt="" />
						<span color={color}>{capitalizeFirstLetter(title)}</span>
					</Item>)}
				</Items>
			</GridContainer>
		</Container>
	);
};

const Items = styled(Container)`
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	gap: 1em;
    padding-top: 1em;
    padding-bottom: 1em;

	@media (max-width: 648px) {
		grid-template-columns: repeat(2, 1fr);
	}
`;
const Item = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 0.5em;
	font-size: 0.75em;
	border: 2px solid ${({ color }) => color};
	color: ${({ color }) => color};
	border-radius: 1.2em;
	padding: 0.5em 2em;
	img {
		--size: 2.5em;
		width: var(--size);
		height: var(--size);
		object-fit: contain;
	}
`;

export default Services;