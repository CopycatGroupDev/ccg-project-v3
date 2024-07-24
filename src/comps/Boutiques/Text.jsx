import styled from "styled-components";
import { Container } from "../Container";

export default styled(Container)`
    display: flex;
    flex-direction: column;
    gap: 1em;
    font-size: 1.25em;
    line-height: 1.75em;

    article {
        height: min-content;
        display: flex;
        flex-direction: column;
        gap: 0.5em;
    }

    p {
        margin: 0;
    }

    section {
        display: flex;
        gap: 2em;
        align-items: stretch;

        @media (max-width: 1000px) {
            flex-direction: column;
        }

        img {
            width: 100%;
            @media (min-width: 1000px) {
                max-width: 68%;
            }
            --height: 100%;
            --aspect-ratio: 1002/563.5;
            object-fit: cover;

            @media (max-width: 768px) {
                width: 100%;
                max-width: 100%;
            }
        }
    }
`;