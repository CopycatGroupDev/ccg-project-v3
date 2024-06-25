import styled from "styled-components";
import { colors } from "../../config/colors";
import { Container as C } from "../Container";
import { Title } from "../Title";

const Container = styled(C)`
	gap: 1em;
	padding-top: 0;
	padding-bottom: 0;
	display: flex;
	flex-direction: column;
	p {
		margin: 0;
	}
`;

export default function Values() {
	return (
		<Container>
			<p>Nous abordons le travail d’équipe au sens large : Une collaboration avec une entreprise signifie une entente totale, transparente et proactive. Nos outils sont les vôtres et vice versa. Notre image est celle d’une entreprise dynamique, entreprenante et surtout, très fiable.</p>
			<p>L’humain étant au cœur de notre société et ayant pour objectif d’être les plus fiables pour nos clients, nos collaborateurs répondent à des critères stricts et pointus.</p>
			<p>Nous collaborons avec des personnes mais avant tout des personnalités : Amoureux du travail d’équipe, spontané, force de propositions, réactif, autonome et à l’esprit créatif. Chacun de nos échanges doit être agréable et productif.</p>
			<p>Notre « sphère » de travail doit adopter le même état d’esprit : agréable, optimale, sans barrières et où toute proposition est prise en compte et analysée. Nos collaborateurs ne viennent pas travailler pour remplir un seul objectif mais préparer les suivants, acquérir de nouvelles compétences et renforcer celles déjà présentes.</p>
			<p>Pour nous, chaque métier, chaque compétence sont importants. Le clivage et la préférence pour tel ou tel rôle n’a pas sa
			place dans nos projets. Nous valorisons au maximum chaque acteur de nos équipes. La productivité passe par la
			reconnaissance et l’encouragement.</p>
			<p>Évidemment, nos collaborateurs ne sont pas cantonnés dans un seul et même modèle, la liberté reste un outil de travail
			essentiel à ceux qui nous aident et vous aident à trouver vos solutions. Pour être sûrs d’assurer une collaboration sur le
			plus long terme possible, nous laissons nos collaborateurs agir tels des « électrons libres » si cela permet d’offrir une
			meilleure productivité.</p>
			<AboutSection />
		</Container>
	);
}

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  gap: 4rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const GridItem = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  justify-items: center;
  gap: 0.5rem;
`;

const Image = styled.img`
  /* mix-blend-mode: color; */
  object-fit: cover;
  min-width: 140px;
  min-height: 140px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  text-align: center;
`;

const ValueTitle = styled.div`
  font-weight: bold !important;
  text-transform: uppercase;
  font-size: 0.95rem;
  color: ${({ color }) => color};
`;

const Text = styled.div``;

// Main component
const AboutSection = () => {
  const items = [
    { img: '/icons/aboutIcon1.PNG', color: '#f39113', title: 'Bonne humeur', text: "Une équipe passionnée à l'écoute de vos besoins" },
    { img: '/icons/aboutIcon2.PNG', color: '#a87cb3', title: 'Bonne volonté', text: 'Nous avançons avec entrain vers la réalisation de vos projets' },
    { img: '/icons/aboutIcon3.PNG', color: '#5892C4', title: 'Bon sens', text: 'Nous oeuvrons méthodiquement au traitement de vos documents' },
    { img: '/icons/aboutIcon4.PNG', color: '#60C280', title: 'Bonne foi', text: 'Nous vous accompagnons avec intégrité et honnêteté' }
  ];

  return (
    <Container>
      <GridContainer>
        {items.map((value, i) => (
          <GridItem key={i}>
            <Image src={value.img} alt={value.title} />
            <TextContainer>
              <ValueTitle color={value.color}>{value.title}</ValueTitle>
              <Text>{value.text}</Text>
            </TextContainer>
          </GridItem>
        ))}
      </GridContainer>
    </Container>
  );
};