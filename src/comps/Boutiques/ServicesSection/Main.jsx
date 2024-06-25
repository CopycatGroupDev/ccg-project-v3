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
		<Title color={'black'}>Nos services au sein de la boutique</Title>
		<GridContainer>
		  {services.map(({ mainImg, imgs, path, text, title, color, icon, trnsIcon = false }, key) => {  
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
		  })}
		</GridContainer>
	  </Container>
	);
  };
  
  export default Services;