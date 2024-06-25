import { Link } from "react-router-dom";
import styled from "styled-components";
import zIndex from "../../config/zIndex";

export const BoutiqueCardLayout = styled(Link)`
    display: flex;
    flex-direction: ${({$vertical}) => $vertical ? 'column' : 'row'};
    width: 100%;
    padding: 2em;
    background-color: white;
    border-radius: 0.5em;
    box-shadow: 0 0 10px 0px #0008;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #0008;
    gap: 1em;
    z-index: ${zIndex('boutiqueMenu')};

    & hr{
        width: ${({$vertical}) => $vertical ? '100%' : '1px'};
        height: ${({$vertical}) => $vertical ? '1px' : '100%'};
        border: none;
        background-color: #0008;
        margin: 0;
    }

    & span {
        color: ${({$color}) => $color};
    }

    & img {
        height: 2.5em;
        aspect-ratio: 1.15;
        width: fit-content;
    }

    & div.title {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        align-items: center;
        justifyContent: center;
        white-space: nowrap;
    }

    & .title span, & span.title {
        font-size: 1.25em;
    }

    & .infos {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
`;