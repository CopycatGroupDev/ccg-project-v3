import styled from "styled-components";
import Overlay from "../Overlay";

const NavOverlay = styled(Overlay)`
    gap: 1rem;
    align-items: flex-start;
    padding: 0 2rem;
    background-color: rgba(0, 0, 0, 0);
    
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 0.25rem;
    }

    h1, h2, h3, h4, h5, h6 {
        margin: 0;
    }
`;

export default NavOverlay;