import { colors } from "./colors";
import logos from "./logos";

export const services = {
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
  }