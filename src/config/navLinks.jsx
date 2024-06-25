import { colors } from "./colors";

export const navLinks = [
    {path: '/solutions', title: 'Copycat Solutions', color: colors.solution, dropdown: [
        {path: '/solutions#bur', title: 'Bureautique', desc: 'Analyse Financière, Vente et location, Rachat de contrat...'},
        {path: '/solutions#tel', title: 'Téléphonie', desc: 'Téléphone Fixes, Mobiles, Internet...'},
        {path: '/solutions#dig', title: 'Digital', desc: 'Vente maintenance, Infogérance...'},
        {path: '/solutions#inf', title: 'Informatique', desc: 'Archivage, Dématérialisation de factures, Note de frais...'},
    ]},
    {path: '/shop', title: 'Copycat Shop', color: colors.shop, dropdown: [
        {path: '/shop#inf', title: 'Informatique', desc: 'Ordinateur, Clé USB, Souris, Clavier, Câble HDMI...'},
        {path: '/shop#dig', title: 'Digital', desc: 'Vidéo projecteur, écran interactif, Visio conférence...'},
        {path: '/shop#mul', title: 'IT / Multimédia', desc: 'Imprimante domestique, Toner, Agenda, Papier, Stylo...'},
        {path: '/shop#bur', title: 'Bureautique', desc: 'Loisirs, Gastronomie et Restauration, Hygiène..'},
    ]},
    {path: '/print', title: 'Copycat Print', color: colors.print, dropdown: [
        { path: '/print#rep', title: 'Reprographie / Imprimerie', desc: 'Reliure, Plastification, Flyer...', icon: 'Imprimerie.png' },
        { path: '/print#mug', title: 'Objet Personnalisé', desc: 'Mug, Vêtement, Stylo, Clé usb...', icon: 'Objets personnalisés.png' },
        { path: '/print#sup', title: 'Support PLV', desc: "Roll'up, Drapeau, Vitrophanie..", icon: 'Signalétique-PLV.png' }
    ]},
    {path: '/labs', title: 'Copycat Labs', color: colors.labs, dropdown: [
        { path: '/labs#dev', title: 'Développement Web', desc: 'Développement de site sur-mesure, Programmation...', icon: 'Développement web.png' },
        { path: '/labs#gra', title: 'Graphisme', desc: 'Identité visuelle, Communication visuelle, Logo...', icon: 'Création graphique.png' },
        { path: '/labs#com', title: 'Communication digitale', desc: 'LinkedIn, Facebook, Instagram...', icon: 'Création graphique.png' }
    ]},
    {path: '/boutiques', title: 'Boutiques', color: colors.default, dropdown: [
        {path: '/sevres', title: 'Copycat Sèvres', desc: ''},
        {path: '/boulogne', title: 'Copycat DPS Boulogne', desc: ''},
    ]},
    {path: '/about', title: 'A propos', color: colors.default, dropdown: [
        { path: '/contact', title: 'Contact', icon: 'icone formulaire.png' /* disabled: true */ },
        { path: '/rse', title: 'Politique RSE', icon: 'icone RSE.png' }
    ]},
]