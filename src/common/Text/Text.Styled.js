import styled from 'styled-components';
import {Color} from "../Color/Color.Styled";

export const pxToRem = (size) => {
    return size / 16 + 'rem'
}
export const message = styled.div`
    color: #fff;
    font-size: ${pxToRem(13)};
    font-weight: 300;
    ${props => props.sort === 'topaz' && `
        color: ${Color.TOPAZ};
    `}
    ${props => props.sort === 'gray' && `
        color: #fff;
    `}
    ${props => props.size === 'small' && `
        font-size: ${pxToRem(16)};
        line-height: 1.18;  
    `}
    ${props => props.size === 'medium' && `
        font-size: ${pxToRem(18)};
        line-height: 1.18;
    `}
`;
export const TextLink = styled.a`
    color: #767676;
    font-size: ${pxToRem(15)};
    font-weight: 400;
    cursor: pointer;
    &:hover {
        color: #111;
    }
`;