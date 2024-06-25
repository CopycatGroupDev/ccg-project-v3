import styled from "styled-components";
import { Title } from '../../Title';
import Horaires from "../Horaires/Main";
import Container from "./Container";
import Container2 from "./Container2";

export default function Desc ({ horaires, renseignements, title, desc }) {
    return <>
        <Container>
            <Title>{title}</Title>
            <p>{desc}</p>
            <Container2>
                <img src="/photos/Sèvres.jpg" alt="" />
                <Horaires horaires={horaires} renseignements={renseignements} />
            </Container2>
        </Container>
    </>
}