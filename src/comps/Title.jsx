import styled, { css } from "styled-components";

const css_ = css`margin: 0; font-weight: 700;overflow: visible;text-overflow: ellipsis;font-family: Roboto;color:${props => props.$color ?? "#000"}; text-align:{props => props.$align}; font-weight: 400; line-height: normal;`;
export const Title = styled.h1`${css_}`;
export const Title2 = styled.h2`${css_}`;
export const Title3 = styled.h3`${css_}`;
export const Title4 = styled.h4`${css_}`;
export const Title5 = styled.h5`${css_}`;
export const Title6 = styled.h6`${css_}`;