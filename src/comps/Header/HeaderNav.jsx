import styled from "styled-components";
import { HeaderNavBurgerMenu as BurgerMenu } from "./HeaderNavBurgerMenu";
import { HeaderNavItems as Items } from "./HeaderNavItems";
import { Link } from "react-router-dom";

const NavLayout = styled.div`
    display: flex;
    gap: 2rem;
    justify-content: center;

    a {
        text-decoration: none;
        font-weight: 350;
        font-style: normal;
        font-size: 1.5rem;
        line-height: 2rem;
    }

    a:hover {
        box-shadow: 0 0 0 #0000 !important;
    }

    ul {
        display: flex;
        flex-wrap: wrap;
        padding: 0;
        column-gap: 2rem;
        align-content: flex-start;
        justify-content: center;
        width: 100%;


        li {
            list-style: none;
            height: fit-content;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
    }

    @media only screen and (max-width: 1400px) {
        ul{
            span.cc{
                --display: none;
            }
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
`;

const Col = styled.div`
    width: ${({$w}) => $w/12*100}%;
    display: flex;
    justify-content: center;
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

export function NavLogo({ src }) {
    return <NavLogoLink to={'/'}><NavLogoImg src={src} alt={'logo'} /></NavLogoLink>
}

export default function HeaderNav() {
    return <Row>
        <Col className="topcol" $w={2}>
            <NavLogo src={"logo/logo.png"} />
        </Col>
        <Col style={{"--overflow": "hidden"}} $w={10}>
            <Items />
        </Col>
        <Col className="topcol" $w={2}>
            <BurgerMenu />
        </Col>
    </Row>
}
