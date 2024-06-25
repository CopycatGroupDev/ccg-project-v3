import styled from "styled-components";
import zIndex from "../../config/zIndex";

export const HeaderNavItemLi = styled.li`
    position: relative;

    & a:hover, & a:has(+ div:hover){
        color: ${({ $color }) => $color};
    }

    & .dropdownContainer{
        display: none;
        padding: 0.5rem 0;
        position: absolute;
        z-index: ${zIndex('navdropdown')};
    }

    &.right .dropdownContainer{
        right: 0;
    }

    & a:hover + .dropdownContainer, & .dropdownContainer:hover{
        display: flex;
        white-space: nowrap;
        z-index: 999;
    }
`;