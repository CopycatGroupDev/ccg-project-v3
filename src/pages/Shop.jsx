import { HeaderButton } from "../comps/Header/HeaderButton";
import Default from "../wrappers/Default";
import Header from '../comps/Header/Header';
import { Timeline } from "../comps/Timeline";
import { colors } from "../config/colors";
import Links from "../comps/Shop/Links";

export default function Shop() {
    return <Default title={"Shop - Copycat Group"}>
        <Header
            textsRows={[
                'Achetez vos fournitures bureautique, écrans, appareils informatiques, multimédia et bien plus !',
                <HeaderButton key={btoa(Math.random())} to={'#links'} color={colors.shop}>Demander une expertise</HeaderButton>
            ]}
            plusTextRow={<>{`COPYCAT SHOP : Un guichet unique pour toutes vos envies.`}<br />{`Trouvez toutes les fournitures et appareils informatiques dont vous avez besoin en un seul et même endroit et simplifiez vos achats `}</>}
            bg={'/banners/shop.png'}
            logo={'/logo/ccs3.jpg'}
            color={colors.shop} />
        <Timeline color={colors.shop} list={[
            // {image: "", texte: "", button: "",},
            ['Informatique', 'https://copycatgroup.fr/images/pc1.png', 'inf', <>{'Ordinateur, clé USB, souris, clavier, câble HDMI...'}</>, 'Je suis intéressé'],
            ['IT/Multimédia', 'https://copycatgroup.fr/images/mu1.png', 'mul', <>{'Vidéo projecteur, écran interactif, visioconférence'}</>, 'Je suis intéressé'],
            ['Bureautique', 'https://copycatgroup.fr/images/bu1.png', 'bur', <>{'Imprimante domestique, toner, agenda, papier, stylo...'}</>, 'Je suis intéressé'],
            ['Divers', 'https://copycatgroup.fr/images/div1.png', 'div', <>{'Loisirs, gastronomie, restauration, hygiène..'}</>, 'Je suis intéressé']
        ]} />
        <Links id="links" links={[
            { img: '/photos/Fournitures.png', text: 'Commandez vos fournitures de bureau', link: 'https://www.copycat.vous-livre.com/' },
            { img: '/photos/IT-Multimédia.png', text: 'Choisissez vos écrans et bornes interactives', link: 'https://copycat-group.mydigitalcorner.fr/' },
            { img: '/photos/Informatique.png', text: 'Commandez vos fournitures informatiques', link: 'https://copycat-shop.fr/' }
        ]} />
    </Default>
}