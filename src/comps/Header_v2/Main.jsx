/* eslint-disable react/display-name */
/* eslint-disable react-refresh/only-export-components */
//grid de 3 : logo, li, mob

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { HeaderNavItems as Items } from "../Header/HeaderNavItems";
import { HeaderCenterLogo as Logo } from "../Header/HeaderCenterLogo";
import TextZone from "../Header/HeaderTextZone";
import { animation } from "../../config/headerAnimation";


const Nav = styled.div`
    background-color: ${props => props.$color};
    background-image: url(${props => props.$bg});
    height: 100vh;
    width: 100%;
    background-size: cover;
    background-position: top center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media only screen and (max-height: 800px) and (orientation: landscape) {
        height: ${props => props.$height ?? '200vh'};
    }

    @media only screen and (min-width: 100px) and (max-height: 500px) and (orientation: landscape) {
        height: ${props => props.$height ?? '200vh'};
    }
`;

const NavLayout = styled.div`
    display: flex;
    gap: 2rem;
    justify-content: center;

    a {
        text-decoration: none;
        font-weight: 350;
        font-style: normal;
        font-size: 23px;
        line-height: 2rem;
    }

    ul {
        display: flex;
        padding: 0;
        gap: 1.75rem;
        flex-wrap: wrap;
        align-content: flex-start;
        justify-content: center;

        li {
            list-style: none;
            height: fit-content;
        }
    }

    @media only screen and (max-width: 1000px) {
        & { justify-content: space-between; max-width: 500px; }
        & ul{ display: none; }
    }

    @media only screen and (min-width: 1000px) {
        & button{ display: none; }
    }
`;

const Row = styled(NavLayout)`
    display: flex;
    width: 100%;
    padding: 15px;
`;

const Col = styled.div`
    width: ${({$w}) => $w/12*100}%;
    display: flex;
    justify-content: center;
`;

const Center = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 50px;
    padding-bottom: 50px;
    align-items: center;
    height: 100%;
    max-height: 70%;
    position: relative;

    @media only screen and (max-height: 850px) and (orientation: landscape) {
        --padding-top: 0;
    }
`;

const Text = styled.div`
    color: white;
    text-align: center;
    height: calc(50% - (350px / 2));
    padding: 25px;
    gap: 25px;
    display: flex;
    flex-direction: column;
    font-family: 'Arial';
    font-weight: 300;
    align-items: center;

    h1 {
        font-size: 27px;
        line-height: 1.5;
        font-weight: 500;
    }

    button, a {
        background-color: white;
        color: #0070f3;
        padding: 15px 30px;
        border-radius: 999em;
        border: none;
        cursor: pointer;
        font-size: 18px;
        font-weight: 500;
        width: fit-content;
        text-transform: uppercase;
    }

    * {
        margin: 0;
    }
`;

export const NavLogoImg = styled.img`
    height: 120px;
    @media only screen and (max-width: 1000px) and (max-height: 800px){
        max-height: 70px;
    }

    @media only screen and (max-width: 1000px) and (min-height: 800px){
        max-height: 100px;
    }
`;

export const NavLogoLink =  styled(Link)`
    display: contents;
`;

export const LogoContainer = styled.div`
    height: 350px;
    width: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export function NavLogo({ src }) {
    return <NavLogoLink to={'/'}><NavLogoImg src={src} alt={'logo'} /></NavLogoLink>
}

export default ({ rows, bg, logo, color }) => {
    return <Nav $color={color} $bg={bg} initial={{background: color}} animate={{backgroundImage: `linear-gradient(-175deg, #ededed 50%, ${color} 50%)`}} transition={{ duration: 0.5, ease: "circInOut" }}>
        <Row>
            <Col $w={1.5}>
                <NavLogo src={"logo/logo.png"} />
            </Col>
            <Col $w={9}>
                <Items />
            </Col>
            <Col $w={1.5}>Mob</Col>
        </Row>
        <Center {...animation}>
            <LogoContainer>
                <Logo src={logo} alt="logo" style={{ position: 'static', maxHeight: '100%', maxWidth: '100%' }} />
            </LogoContainer>
            <TextZone rows={rows} color={color} />
        </Center>
    </Nav>
}