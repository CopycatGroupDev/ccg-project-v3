import styled from "styled-components";
import { colors } from "../../config/colors";

export const FooterStyle = styled.footer`
    background-color: ${colors.default};
    color: ${colors.defaultText};
    width: 100%;

    h1 { margin-left: 0; margin-right: 0; }
    & a { color: inherit; text-decoration: none; }
    @media only screen and (max-width: 800px) and (max-height: 800px) and (orientation: landscape) {
        height: 200vh;
    }
`;