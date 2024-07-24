/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/display-name */
import { Title3 } from "../Title";
import Paragraphs from "./HomeIntroParagraphs";
import Trio from "./HomeIntroTrio";

export default function () {
    return <Paragraphs>
        <p> Avec des valeurs hautes en couleurs, COPYCAT GROUP est une entreprise française déterminée à replacer le service et la simplicité au cœur des solutions documentaires, digitales et bureautiques. </p>
        <p>Nous offrons la simplicité d'un contact unique pour répondre à tous vos besoins en création, informatique, imprimerie, fournitures et services. </p>
        <p>Nous privilégions le service, car nous croyons qu'il n'existe pas de solutions pertinentes sans accompagnement, conseils et approche humaine tout au long de la 
        vie de votre projet.</p>
        <Title3 style={{ fontWeight: "bold", color: "inherit" }}>C’est ce que nous appelons « Document as a Service »</Title3>
        <Trio>
            <div>
                <img src="/icons/Accompagnement.png" alt="" />
                Accompagnement de A à Z
            </div>
            <div>
                <img src="/icons/Expert en solutions.png" alt="" />
                Expert en solutions <br />
                Documentaire et Digital
            </div>
            <div>
                <img src="/icons/Livraison en france.png" alt="" />
                Livraison partout en France
            </div>
        </Trio>
    </Paragraphs>
}