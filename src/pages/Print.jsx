import { HeaderButton } from "../comps/Header/HeaderButton";
import Default from "../wrappers/Default";
import Header from '../comps/Header/Main';
import { colors } from "../config/colors";
import { Timeline } from "../comps/Timeline";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link as Link_ } from "react-router-dom";
import timelines from "../comps/timelines/main";
import Links from "../comps/Links/Main";

const data = {
  title: "Print - Copycat Group",
  color: colors.print,
  header : {
      bg: '/banners/Bannière CP.png',
      logo: '/logo/pr1.png',
      rows : [
        <>Réalisez des impressions à votre image !</>,
        <HeaderButton key={btoa(Math.random())} onClick={() => window.open('http://www.copycatprint.fr/accueil/')} color={colors.print}> IMPRIMEZ VOS DOCUMENTS</HeaderButton>
      ],
      appendixRow : <>Nous offrons des solutions d'impression de haute qualité pour vos brochures, affiches et documents professionnels. Avec notre expertise, nous garantissons une présentation soignée et un rendu impeccable de vos supports imprimés. Personnalisez  aussi vos goodies afin d’y apporter une touche personnelle et renforcer votre image de marque !</>
  }
}

export default function Print() {
    return <Default value={data}>
        <Header />
        <Timeline color={colors.print} list={timelines.print} />
        <StyledIframe
            src="https://e.issuu.com/embed.html?d=catalogue_produits_en_marque_blanche&u=e3m4"
            initial={{ scale: 0.75 }}
            transition={{ duration: 0.5 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
        />
        <Links id="links" banner={true} color={colors.print} title={"Une partie de nos impressions en ligne sur :"} links={[
            { img: '/photos/Supports imprimés.png', text: 'Imprimez vos supports de communications', link: 'http://copycatprint.fr/', color: colors.print }
        ]} />
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