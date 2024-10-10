import styled from "styled-components";
import { motion } from "framer-motion";
import animImg from "./animImg";
import labsImgs from "./labsImg";
import ImgContainer from "./ImgContainer";

export default {
	shop: [
		['Bureautique', '/logo/Groupe 810.png', 'bur', <>{'Fournitures, imprimantes domestiques, cartouches...'}</>, 'Je suis intéressé'],
            ['Informatique & Multimédia', '/logo/Groupe 811.png', 'inf', <>{'Ordinateur, Mac, tablette, écran interactif, accessoires...'}</>, 'Je suis intéressé'],
            ['Services', '/logo/Groupe 812.png', 'srv', <>{'Réparation informatique, installation de licences, transfert et recuperation de données...'}</>, 'Je suis intéressé'],
            ['Domiciliation', '/logo/Groupe 837.png', 'dom', <>{'Domiciliation d\'entreprise, transfert de courriers, archives...'}</>, 'Je suis intéressé']
	],
	solutions: [
		['Bureautique', '/logo/Groupe 806.png', 'bur', <>{'Vente et location d\'imprimante'}<br />{'petit et grand format, laser ou jet d\'encre...'}</>, 'Je suis intéressé'],
		['Digital', '/logo/Groupe 807.png', 'dig', 'Archivage, dématérialisation des factures, logiciel de gestion documentaire...', 'Je suis intéressé'],
		['Informatique et réseaux', '/logo/Groupe 808.png', 'inf', 'Infogérance, sécurité, Microsoft 365...', 'Je suis intéressé'],
		['Télephonie & Internet', '/logo/Groupe 809.png', 'tel', 'Mobile et fixe, réseau, Internet et fibre dédiée', 'Je suis intéressé']
	],
	print: [
		['Reprographie / Imprimerie', '/logo/Groupe 814.png', 'rep', 'Carte de visite, reliure, plastification, flyer, tirage photo et grands formats...', 'Je suis intéressé'],
		['Support PLV', '/logo/Groupe 815.png', 'plv', 'Roll\'up, drapeaux, vitrophanie, logo 3D...', 'Je suis intéressé'],
		['Objet personnalisé', '/logo/Groupe 816.png', 'obj', 'Mugs, stylos, clés USB, t-shirt, casquette...', 'Je suis intéressé'],
		['Routage', '/logo/Groupe 817.png', 'rtg', 'Courrier postale, emailing...', 'Je suis intéressé']
	],
	labs: [
		['Graphisme', '/logo/Groupe 818.png', 'gra', <> {'Identité visuelle, maquettes, publicités...'} <ImgContainer>{labsImgs[1].map(animImg)}</ImgContainer> </>, 'Je suis intéressé'],
		['Développement web', '/logo/Groupe 819.png', 'dev', <> {'Site vitrine, e-commerce, UX/UI'} <ImgContainer>{labsImgs[0].map(animImg)}</ImgContainer> </>, 'Je suis intéressé'],
		['Réseaux sociaux', '/logo/Groupe 825.png', 'com', <> {'LinkedIn, Facebook, Instagram, Google Business...'} <ImgContainer>{labsImgs[2].map(animImg)}</ImgContainer> </>, 'Je suis intéressé']
	]
}