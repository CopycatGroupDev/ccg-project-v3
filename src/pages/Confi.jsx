import React from 'react'
import AltHeader from "../comps/Header/AltHeader";
import Default from "../wrappers/Default";
import { Container } from '../comps/Container';
import { Title } from '../comps/Title';

export default function Confi() {
    return <Default title={"A propos - Copycat Group"}>
        <AltHeader
            bg={'/banners/boutiques.png'}
            title={"Politique de confidentialité"}
            coverFull={true} />
        <Container>
			<Title>Informations générales</Title>
			<p>Nous prenons la protection des données à caractère personnel très au sérieux et respectons les dispositions légales en la matière. La déclaration suivante vous informe sur le type de données à caractère personnel collectées sur ce site Internet, la finalité de leur utilisation et la mesure dans laquelle ces données sont mises à la disposition de tiers.</p>

			<Title>Déclaration de protection des données</Title>
			<p>L'utilisation de notre site est possible sans fournir de données personnelles. L'utilisation de certains services de notre site peut faire l'objet de réglementations différentes, qui dans ce cas sont expliquées séparément ci-dessous. Vos données personnelles (par ex. nom, adresse, e-mail, numéro de téléphone, etc.) ne seront traitées par nous conformément aux dispositions de la loi française sur la protection des données qu'après adaptation de l'ordonnance de base sur la protection des données. Les données sont personnelles si elles peuvent être clairement attribuées à une personne physique spécifique. La base juridique de la protection des données se trouve dans la loi sur la protection des données (RGPD). Les règlements suivants vous informent à cet égard sur le type, l'étendue et la finalité de la collecte, de l'utilisation et du traitement des données personnelles par le fournisseur.</p>

			<Title>Cookies</Title>
			<p>Nous utilisons des cookies sur notre site pour la reconnaissance de l'utilisation multiple de notre offre par le même utilisateur/propriétaire de la connexion Internet. Les cookies sont de petits fichiers texte que votre navigateur Internet stocke sur votre ordinateur. Ils servent à optimiser notre site web et nos offres. Il s'agit généralement de "cookies de session", qui sont effacés après la fin de votre visite. Dans certains cas, cependant, ces cookies fournissent des informations afin de vous reconnaître automatiquement. Cette reconnaissance est basée sur l'adresse IP stockée dans les cookies. Les informations ainsi obtenues servent à optimiser nos offres et à vous faciliter l'accès à notre site. Vous pouvez refuser l'utilisation de cookies en sélectionnant les paramètres appropriés sur votre navigateur, mais veuillez noter que si vous le faites, il se peut que vous ne puissiez pas utiliser toutes les fonctionnalités de notre site Web.</p>

			<Title>Responsable du traitement des données</Title>
			<p>La présente politique de protection des données s’applique au traitement des données réalisé par Copycat Group, une société sise 14 boulevard Georges Clémenceau 92400 Courbevoie, tél. : 01 45 07 98 00, que vous pouvez contacter à l’adresse sevres@copycatgroup.fr.</p>

			<Title>Délégué à la protection des données</Title>
			<p>Vous pouvez nous faire part de vos préoccupations en matière de protection des données en écrivant à notre délégué à la protection des données à l’adresse sevres@copycatgroup.fr ou par courrier postal à Copycat Group, à l’attention du délégué à la protection des données, 14 boulevard Georges Clémenceau 92400 Courbevoie.</p>

			<Title>Durée de stockage de vos données</Title>
			<p>Quand vous remplissez un formulaire de contact sur notre site, les données inscrites dans le formulaire de contact sont collectées et conservées indéfiniment. Cela nous permet de répondre à votre demande.</p>

			<Title>Droits sur vos données</Title>
			<p>Si vous avez rempli un formulaire de contact sur le site, vous pouvez demander à recevoir un fichier contenant toutes les données personnelles que nous possédons à votre sujet, incluant celles que vous nous avez fournies. Vous pouvez également demander la suppression des données personnelles vous concernant. Cela ne prend pas en compte les données stockées à des fins administratives, légales ou pour des raisons de sécurité</p>

			<Title>Newsletter</Title>
			<p>Sur notre site web, nous vous offrons la possibilité de vous abonner à notre newsletter. Avec cette lettre d'information, nous vous informons régulièrement de nos offres. Pour recevoir notre newsletter, nous avons besoin de votre adresse e-mail valide, qui peut être une donnée personnelle. Lorsque vous vous inscrivez à notre newsletter, nous enregistrons votre adresse IP ainsi que la date et l'heure de votre inscription. Dans l'éventualité où un tiers utiliserait votre adresse e-mail et s'abonnerait à notre newsletter à votre insu, ceci sert de protection de notre part. Nous ne collectons pas d'autres données. Les données ainsi collectées ne seront utilisées que pour s'abonner à notre newsletter. Les données ne seront pas transmises à des tiers. Il n'y a pas non plus de comparaison des données ainsi recueillies avec les données qui peuvent être recueillies par d'autres composantes de notre site. Vous pouvez vous désabonner à tout moment. Les détails peuvent être trouvés dans l'e-mail de confirmation et dans chaque bulletin individuel.</p>
        </Container>
	</Default>
}