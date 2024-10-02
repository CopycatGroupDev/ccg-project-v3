import { css } from "styled-components";

export default css`
    display: flex;
    ${props => (props.$direction ?? 'row') && `flex-direction: ${props.$direction ?? 'row'}`};
    ${props => props.$align && `align-items: ${props.$align}`};
    ${props => props.$justify && `justify-content: ${props.$justify}`};
    ${props => props.$width && `width: ${props.$width}`};
    ${props => props.$maxWidth && `max-width: ${props.$maxWidth}`};
    ${props => props.$height && `height: ${props.$height}`};
    ${props => props.$gap && `gap: ${props.$gap}`};
    ${props => props.$padding && `padding: ${props.$padding}`};
    ${props => props.$paddingBottom && `padding-bottom: ${props.$paddingBottom}`};
    ${props => props.$paddingTop && `padding-top: ${props.$paddingTop}`};
    ${props => props.$paddingLeft && `padding-left: ${props.$paddingLeft}`};
    ${props => props.$paddingRight && `padding-right: ${props.$paddingRight}`};
    ${props => props.$margin && `margin: ${props.$margin}`};
    ${props => props.$marginBottom && `margin-bottom: ${props.$marginBottom}`};
    ${props => props.$marginTop && `margin-top: ${props.$marginTop}`};
    ${props => props.$marginLeft && `margin-left: ${props.$marginLeft}`};
    ${props => props.$marginRight && `margin-right: ${props.$marginRight}`};
    ${props => props.$aspect && `aspect-ratio: ${props.$aspect}`};
    ${props => props.$overflow && `overflow: ${props.$overflow}`};
    ${props => props.$radius && `border-radius: ${props.$radius}`};
`;