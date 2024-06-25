import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderNavLogoImg = styled.img`
    height: 120px;
    @media only screen and (max-width: 1000px) and (max-height: 800px){
        max-height: 70px;
    }

    @media only screen and (max-width: 1000px) and (min-height: 800px){
        max-height: 100px;
    }
`;

export const HeaderNavLogoLink =  styled(Link)`
    display: contents;
`;

export function HeaderNavLogo({ src }) {
    return <HeaderNavLogoLink to={'/'}><HeaderNavLogoImg src={src} alt={'logo'} /></HeaderNavLogoLink>
}