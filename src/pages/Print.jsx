import { HeaderButton } from "../comps/Header/HeaderButton";
import Default from "../wrappers/Default";
import Header from '../comps/Header/Header';
import { colors } from "../config/colors";
import { Timeline } from "../comps/Timeline";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link as Link_ } from "react-router-dom";

export default function Print() {
    return <Default title={"Print - Copycat Group"}>
        <Header
            textsRows={['Imprimez vos photos, reliez et plastifiez vos documents…', <HeaderButton key={btoa(Math.random())} onClick={() => window.open('http://www.copycatprint.fr/accueil/')} color={colors.print}>Demander une expertise</HeaderButton>]}
            plusTextRow={`Spécialiste des techniques et supports d'impression, COPYCAT PRINT saura répondre aux besoins et attentes de vos projets. De la carte de visite à la vitrophanie, en passant par les objets et textiles personnalisés. Confiez-nous la production de vos supports imprimés`}
            bg={'/banners/print.png'}
            logo={'/logo/ccg.jpg'}
            color={colors.print} />
        <Timeline color={colors.print} list={[
            ['Reprographie / Imprimerie', 'https://copycatgroup.fr/images/rep1.png', 'rep', 'Carte de visite, Reliure, Plastification, Flyer...', 'Je suis intéressé'],
            ['Objet personnalisé', 'https://copycatgroup.fr/images/mug.png', 'mug', 'Mugs, Stylos, Clés USB, T-shirt, Casquette...', 'Je suis intéressé'],
            ['Support PLV', 'https://copycatgroup.fr/images/sup1.png', 'sup', 'Roll\'up, Drapeaux, Vitrophanie, Logo 3D...', 'Je suis intéressé']
        ]} />
        <StyledIframe
            src="https://e.issuu.com/embed.html?d=catalogue_produits_en_marque_blanche&u=e3m4"
            initial={{ scale: 0.75 }}
            transition={{ duration: 0.5 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
        />
        <Container>
            <span>Une partie de nos impressions en ligne sur :</span>
            <Link to="http://www.copycatprint.fr/accueil/" color={colors.print}>
                www.copycatprint.fr
            </Link>
        </Container>
    </Default>
}

const StyledIframe = styled(motion.iframe)`
  width: 100%;
  aspect-ratio: 4 / 3;
  max-width: 1024px;

  @media (max-width: 768px) {
    height: 100vh;
  }

  &.snap-center {
    scroll-snap-align: center;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  text-align: center;
  font-size: 2rem;
  gap: 1rem;
  margin-bottom: 48px;
  padding: 0 1.5rem;

  @media (min-width: 768px) {
    font-size: 2rem;
  }

  @media (min-width: 1024px) {
    font-size: 2.5rem;
  }
`;

const Link = styled(Link_)`
  color: ${({ color }) => color};
`;