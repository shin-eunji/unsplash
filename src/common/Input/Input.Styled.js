import styled from 'styled-components';
import {pxToRem} from "../Text/Text.Styled";
import {Color} from "../Color/Color.Styled";

export const Input = styled.input`
    position:relative;
    display:flex;
    width: ${pxToRem(320)};
    height: ${pxToRem(50)};
    padding: 0 ${pxToRem(18)};
    color: #fff;
    font-size: ${pxToRem(14)};
    font-weight:500;
    background-color: #1b2227;
    background-image: none;
    border: 1px solid #0f1112;
    border-radius: ${pxToRem(6)};
    white-space: nowrap;
    text-align:left;
    transition: all .3s cubic-bezier(.645, .045, .355, 1);
    opacity: 1;
    &::placeholder {
        opacity: .2;
        color: #fff;
        font-size: ${pxToRem(14)};
        font-weight: 500;
    }
    &:hover {
        box-shadow: 0px 0px 0px 3px rgba(20, 202,193, .2);
    }
    &:focus {
        outline: 0;
        border: 1px inset ${Color.TOPAZ};
        box-shadow: 0px 0px 0px 3px rgba(20, 202,193, .2); 
    }
`;
