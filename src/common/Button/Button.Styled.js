import styled from 'styled-components';
import {pxToRem} from "../Text/Text.Styled";
import {Color} from "../Color/Color.Styled";

export const ButtonGroup = styled.div`
    position:relative;
    display:flex;
    align-items:center;
    justify-content:center;
    > * {
          margin: 0 ${pxToRem(5)};
      &:first-child {
          margin-left: ${pxToRem(0)};
      }
      &:last-child {
          margin-right: ${pxToRem(0)};
      }
    }
    
    ${props => props.left && `
        justify-content: flex-start;    
    `}
    ${props => props.right && `
        justify-content: flex-end;    
    `}
    
`;

export const Button = styled.button`
    position:relative;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color: transparent;
    background-image: none;
    white-space: nowrap;
    text-align:center;
    cursor: pointer;
    transition: all .3s cubic-bezier(.645, .045, .355, 1);
    user-select: none;
    border: 1px solid transparent;
    border-radius: ${pxToRem(6)};
    &:hover {
        position:relative;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        color: rgba(0,0,0,.4);
        &::before {
          position: absolute;
          top: 0;
          right: 0;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          opacity: .4;
        }
    }
    &:focus {
        outline: 0;
    }
   
    ${props => props.sort === 'green' && `
        background: ${Color.GREEN};
        color: ${Color.WHITE};
    `}
    ${props => props.sort === 'line' && `
        color: #767676;
        background-color: #fff;
        border-color: #d1d1d1;
    `}
    ${props => props.sort === 'dark' && `
        background: ${Color.DARK};
        border-radius: 6px;
        color: #fff;
    `}
    ${props => props.sort === 'lineDark' && `
        border: 1px solid #444;
        border-radius: 6px;    
        color: #444;
        font-size:  ${pxToRem(16)};
        font-weight: 500;
        background: #fff;
    `}
    ${props => props.full && `
        width: 100%;
    `}
    ${props => props.size === 'small' && `
        width: 100%;
        height: ${pxToRem(32)};
        font-size: ${pxToRem(14)};
        font-weight: 400;
        line-height: 1.18;
        padding: 0 ${pxToRem(11)};
    `}
    ${props => props.size === 'medium' && `
        width: ${pxToRem(246)};   
        height: ${pxToRem(60)};
        font-size: ${pxToRem(18)};
        line-height: 1.18;
    `}
    ${props => props.size === 'large' && `
        width: ${pxToRem(320)};
        height: ${pxToRem(50)}      
    `}
`;

export const lineButton = styled.button`
    display:flex;
    align-items:center;
    justify-content:center;
    height: ${pxToRem(32)};
    border-radius: ${pxToRem(5)};
    line-height: 0;
    margin-right: ${pxToRem(10)};
    color: #767676;
    background-color: #fff;
    padding: 0 ${pxToRem(10)};
    border: 1px solid #d1d1d1;
    cursor: pointer;
    &:hover {
        color: #111;
        border-color: #767676;
    }
`;
