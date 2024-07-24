import { Title } from '../../Title';
import Horaires from "../Horaires/Main";
import Container from "./Container";
import Container2 from "./Container2";

export default function Desc ({ horaires, renseignements, title, desc, photo }) {
    return <>
        <Container>
            <Title>{title}</Title>
            <p>{desc}</p>
            <Container2>
                <img src={photo} alt="" />
                <Horaires horaires={horaires} renseignements={renseignements} />
            </Container2>
        </Container>
    </>
}