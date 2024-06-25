import styled from "styled-components";
import { motion } from "framer-motion";

const ImgContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  padding-top: 20px;

  img {
    height: 40px;
    width: auto;
    min-width: 40px;
    object-fit: contain;
  }
`;

const labsImgs = [
	['/extLogos/php.png', '/extLogos/js.png', '/extLogos/wp.png', '/extLogos/github.svg', '/extLogos/gan.png'],
	['/extLogos/Photoshop.png', '/extLogos/InDesign.png', '/extLogos/Illustrator.png', '/extLogos/Adobe XD.png'],
	['/extLogos/linkedin.png', '/extLogos/facebook.svg', '/extLogos/instagram.svg'],
];

const animImg = (img, key) => (
	<motion.img
	  key={key}
	  src={img}
	  initial={{ opacity: 0, x: 100 }}
	  transition={{ duration: 0.5, delay: key * 0.25 }}
	  whileInView={{ opacity: 100, x: 0 }}
	  viewport={{ once: true }}
	/>
);

export default {
	solutions: [
		['Bureautique', 'https://copycatgroup.fr/images/bur1.png', 'bur', <>{'Vente et location d\'imprimante'}<br />{'Petit et grand format, laser ou jet d\'encre...'}</>, 'Je suis intéressé'],
		['Téléphonie', 'https://copycatgroup.fr/images/tel1.png', 'tel', 'Téléphones fixes, mobiles, internet...', 'Je suis intéressé'],
		['Digital', 'https://copycatgroup.fr/images/dig1.png', 'dig', 'Archivage, dématérialisation des factures, note de frais...', 'Je suis intéressé'],
		['Informatique', 'https://copycatgroup.fr/images/inf1.png', 'inf', 'Vente, maintenance, infogérance', 'Je suis intéressé']
	],
	labs: [
		['Développement web', 'https://copycatgroup.fr/images/dev1.png', 'dev', <> {'Programmation, développement de site sur-mesure'} <ImgContainer>{labsImgs[0].map(animImg)}</ImgContainer> </>, 'Je suis intéressé'],
		['Graphisme', 'https://copycatgroup.fr/images/gra1.png', 'gra', <> {'Identité visuelle, communication visuelle, logo...'} <ImgContainer>{labsImgs[1].map(animImg)}</ImgContainer> </>, 'Je suis intéressé'],
		['Communication digitale', '/logo/comdig1.svg', 'com', <> {'LinkedIn, Facebook, Instagram...'} <ImgContainer>{labsImgs[2].map(animImg)}</ImgContainer> </>, 'Je suis intéressé']
	]
}