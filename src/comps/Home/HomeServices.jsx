import styled from "styled-components";
import { Container } from "../Container";
import { Title } from "../Title";
import { colors } from "../../config/colors";
import { motion } from "framer-motion";

const HomeServicesCards = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5em;
    width: 100%;

    @media (min-width: 1024px) {
        gap: 1em;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }
`;

const HomeServicesCardLayout = styled(motion.div)`
    display: flex;
    flex-direction: column;
    gap: 1em;
    width: 100%;
    align-items: center;
    justify-content: space-between;

    & p {
        margin: 0;
    }

    & img {
        height: 12.5rem;
    }

    & button {
        border: none;
        background-color: ${({ $color }) => $color};
        color: white;
        padding: 0.5em 1em;
        border-radius: 999em;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;

const HomeServicesCardHead = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5em;
`;

const HomeServicesContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    gap: 1.5em;
    align-items: center;
    text-align: center;
    & p {
        margin: 0;
    }
`;

export default function Services() {
    function HomeServicesCard({ img, title, desc, btnText, btnOnClick, color, ...props }) {
        return <HomeServicesCardLayout $color={color} {...props}>
            <HomeServicesCardHead>
                <img src={img} alt={title} />
                <span>COPYCAT <span style={{ color: color }}>{title}</span></span>
            </HomeServicesCardHead>
            <p>{desc}</p>
            <button onClick={btnOnClick}>{btnText}</button>
        </HomeServicesCardLayout>
    }

    return <HomeServicesContainer>
        <Title className="title">Nos services</Title>
        <p>Avec des valeurs hautes en couleurs, COPYCAT GROUP est une entreprise française née de l’ambition de remettre le service et la simplicité au coeur des solutions documentaires, digitales et bureautiques.</p>
        <p>La simplicité par un contact unique pour traiter et vous accompagner sur tous vos besoins d’IMPRESSIONS, de GRAPHISMES, de FOURNITURES, de BUREAUTIQUES et de SOLUTIONS DIGITALES.</p>
        <p>Le service, car nous croyons au fond qu’il n’y a pas de solutions pertinentes sans accompagnement, conseils et approche humaine tout au long de la vie de votre projet.</p>
        <p>C’est ce que nous appelons « Document as a Service »</p>
        <HomeServicesCards>
            {[
                {img:"/icons/Solutions.svg", title: "SOLUTIONS", desc: "Vous souhaitez acheter ou louer des solutions bureautiques ?", btnText: "Prendre rendez-vous", btnOnClick: () => null, color: colors.solution},
                {img:"/icons/Shop.svg", title: "SHOP", desc: "Vous souhaitez acheter vos fournitures à des prix intéressants ?", btnText: "Commandez vos fournitures", btnOnClick: () => null, color: colors.shop},
                {img:"/icons/Print.svg", title: "PRINT", desc: "Vous souhaitez acheter des solutions de graphisme ?", btnText: "Imprimez vos documents", btnOnClick: () => null, color: colors.print},
                {img:"/icons/Labs.svg", title: "LABS", desc: "Vous souhaitez acheter des solutions de graphisme ?", btnText: "Demander un devis", btnOnClick: () => null, color: colors.labs},
            ].map((data, i) => <HomeServicesCard key={i} {...data} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 100, scale: 1 }} transition={{ duration: 0.5, delay: 0.25 * i }} viewport={{ once: true }} />)}
        </HomeServicesCards>
    </HomeServicesContainer>
}