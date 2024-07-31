import styled from "styled-components";
import { Container as C } from "../../../comps/Container";

const Container2 = styled(C)`
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 4rem; /* 16 * 0.25rem = 4rem */
    text-align: center;
    max-width: 1340px;

    &>* {
        --width: 50%;
    }

    img{
        object-fit: cover;
    }
    
    @media (min-width: 1024px) {
        flex-direction: row;
    }
`;

export default Container2;