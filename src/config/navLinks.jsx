import { colors } from "./colors";

export const navLinks = [
    {path: '/solutions', title: <><span className="cc">Copycat</span> Solutions</>, color: colors.solution, dropdown: [
        {path: '/solutions#bur', title: 'Bureautique', icon: 'Bureatique solutions'},
        {path: '/solutions#dig', title: 'Digital', icon: 'Digital'},
        {path: '/solutions#inf', title: 'Informatique & réseaux', icon: 'Informatique et réseaux'},
        {path: '/solutions#tel', title: 'Téléphonie & internet', icon: 'Téléphonie et internet'},
    ]},
    {path: '/shop', title: <><span className="cc">Copycat</span> Shop</>, color: colors.shop, dropdown: [
        {path: '/shop#bur', title: 'Bureautique', icon: 'Bureautique shop'},
        {path: '/shop#inf', title: 'Informatique & multimédia', icon: 'Informatique et multimédia'},
        {path: '/shop#srv', title: 'Services', icon: 'Services'},
        {path: '/shop#dom', title: 'Domiciliation', icon: 'Domiciliation'},
    ]},
    {path: '/print', title: <><span className="cc">Copycat</span> Print</>, color: colors.print, dropdown: [
        { path: '/print#rep', title: 'Reprographie & Imprimerie', icon: 'Imprimerie reprographie' },
        { path: '/print#plv', title: 'PLV & Signalétique', icon: 'PLV et signalétique' },
        { path: '/print#obj', title: 'Objets & textiles personnalisé', icon: 'Objets et textiles perso' },
        { path: '/print#rtg', title: 'Routage', icon: 'Routage' },
    ]},
    {path: '/labs', title: <><span className="cc">Copycat</span> Labs</>, color: colors.labs, dropdown: [
        { path: '/labs#gra', title: 'Graphisme', icon: 'Graphisme' },
        { path: '/labs#dev', title: 'Développement Web', icon: 'Dev web' },
        { path: '/labs#com', title: 'Réseaux sociaux', icon: 'Com digitale' }
    ]},
    {path: '/comptoirs', title: 'Nos comptoirs', color: colors.default, dropdown: [
        {path: '/sevres', title: 'CopyCat Sèvres', icon: 'boutique'},
        {path: '/boulogne', title: 'CopyCat Boulogne', icon: 'boutique'},
    ]},
    {path: '/about', title: 'En savoir plus', color: colors.default, dropdown: [
        { path: '/about', title: 'A propos', icon: 'icone a propos' },
        { path: '/contact', title: 'Formulaire de contact', icon: 'icone formulaire' /* disabled: true */ },
        { path: '/rse', title: 'Politique RSE', icon: 'icone RSE' }
    ]},
]