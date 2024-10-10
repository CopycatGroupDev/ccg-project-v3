import { HeaderButton } from "../comps/Header/HeaderButton";
import Default from "../wrappers/Default";
import Header from '../comps/Header/Main';
import { Timeline } from "../comps/Timeline";
import { colors } from "../config/colors";
import Links from "../comps/Links/Main";
import timelines from "../config/timelines/main";

const data = {
    title: "Shop - Copycat Group",
    color: colors.shop,
    header : {
        bg: '/banners/Bannière CSh.png',
        logo: '/logo/ccs3.jpg',
        rows : [
            'Achetez vos fournitures bureautiques et informatiques, écrans, appareils multimédia et bénéficiez de nos services sur mesure !',
            <HeaderButton key={btoa(Math.random())} color={colors.shop} onClick={e => {
               e.preventDefault();
               window.scrollTo(0, document.querySelector('#links').getBoundingClientRect().top); 
            }}>Commandez en ligne</HeaderButton>
        ],
        appendixRow : <>Nous fournissons tout le nécessaire pour équiper votre espace de travail : fournitures de bureau classiques, produits spécialisés, installation de logiciels, réparation de matériel et domiciliation d'entreprise. Concentrez-vous sur votre activité professionnelle en toute sérénité grâce à nos services.</>
    }
}

export default function Shop() {
    return <Default value={data}>
        <Header />
        <Timeline color={colors.shop} list={timelines.shop} />
        <Links id="links" banner={true} color={colors.shop} title={"Achetez en ligne dès maintenant"} links={[
            { img: '/photos/Fournitures.png', text: 'Commandez vos fournitures de bureau', link: 'https://www.copycat.vous-livre.com/', color: colors.shop },
            { img: '/photos/IT-Multimédia.png', text: 'Choisissez vos écrans et bornes interactives', link: 'https://copycat-group.mydigitalcorner.fr/', color: colors.shop },
            { img: '/photos/Informatique.png', text: 'Commandez vos fournitures informatiques', link: 'https://copycat-shop.fr/', color: colors.shop }
        ]} />
    </Default>
}