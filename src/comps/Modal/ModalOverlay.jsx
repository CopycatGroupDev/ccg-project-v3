import styled from "styled-components";
import zIndex from "../../config/zIndex";

export const ModalOverlay = styled.div`
    position: fixed;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0; left: 0; right: 0; bottom: 0;
    z-index: ${zIndex('modal')};
`;