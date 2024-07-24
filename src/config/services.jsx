import { colors } from "./colors";
import logos from "./logos";

/* export const services = {
	Sèvres: [
		{ color: colors.print, icon: logos.print, title: 'PRINT', mainImg: 'print', imgs: ['Objets personnalisés', 'Signalétique-PLV', 'Imprimerie'], text: 'Reprographie, Photocopie, Impression numérique, Support PLV, Objets personnalisés' },
		{ color: colors.shop, icon: logos.shop, title: 'SHOP', mainImg: 'shop', imgs: ['Informatique', 'Divers', 'Bureautique', 'IT-Multimédia'], text: 'Informatique, IT / Multimédia, Bureautique, Divers' },
		{ color: colors.labs, icon: logos.labs, title: 'LABS', mainImg: 'labs', imgs: ['Création graphique', 'Développement web'], text: 'Développement web, Graphisme' }
	],
	Boulogne: [
		{ color: colors.solutions, icon: logos.solutions, title: 'SOLUTIONS', path: '/solutions', mainImg: 'solutions', trnsIcon: true, imgs: ['icone bur1', 'icone tel1', 'icone inf1', 'icone dig1'], text: 'Bureautique, Téléphonie Digital, Informatique' },
		{ color: colors.print, icon: logos.print, title: 'PRINT', path: '/print', mainImg: 'print', imgs: ['Objets personnalisés', 'Signalétique-PLV', 'Imprimerie'], text: 'Reprographie, Photocopie, Impression numérique, Support PLV, Objets personnalisés' },
		{ color: colors.shop, icon: logos.shop, title: 'SHOP', path: '/shop', mainImg: 'shop', imgs: ['Informatique', 'Divers', 'Bureautique', 'IT-Multimédia'], text: 'Informatique, IT / Multimédia, Bureautique, Divers' },
		{ color: colors.labs, icon: logos.labs, title: 'LABS', path: '/labs', mainImg: 'labs', imgs: ['Création graphique', 'Développement web'], text: 'Développement web, Graphisme' }
	]
} */

export default {
	sevres: [
		{color: colors.print, icon:"print", title:"Impressions & Photocopies"},
		{color: colors.print, icon:"photos", title:"Impression photo"},
		{color: colors.print, icon:"reliure", title:"Reliure"},
		{color: colors.print, icon: "grands formats", title: "Impression grands formats"},
		{color: colors.print, icon:"carte de visite", title:"Cartes de visite"},
		{color: colors.print, icon:"personnalisation", title:"Personnalisation"},
		{color: colors.print, icon:"tampons", title:"Tampons"},
		{color: colors.print, icon:"cartouches", title:"Cartouches et toners"},
		{color: colors.print, icon:"devis", title:"Devis sur mesure"},
		{color: colors.shop, icon:"fournitures", title:"Fournitures"},
		{color: colors.shop, icon:"ordi", title:"Ordinateur en libre service"},
		{color: colors.shop, icon:"imprimante", title:"Imprimante en libre service"},
		{color: colors.shop, icon:"réparation", title:"Réparations et installation"},
		{color: colors.shop, icon:"transfert", title:"Transfert de données (super & K7)"},
		{color: colors.shop, icon:"transfert", title:"Récupération de données"},
		{color: colors.shop, icon:"badges", title:"Duplicata de badge"},
		{color: colors.labs, icon:"graphisme", title:"Graphisme"},
		{color: colors.labs, icon:"dev", title:"Création de site web"},
	]
}

// `/icons/comptoirs/${icon}.png`