import React from 'react';
import styled from 'styled-components';
import {navLinks} from "./Contents/Navigation";
import NavItem from "./Contents/NavItem";
import {pxToRem, TextLink} from "../../../../common/Text/Text.Styled";

function Nav (props) {

    const {} = props;

    return (
        <Container>
            <Item>Editorial</Item>
            <Menu>
                
                {
                    navLinks.map((item, index) => <NavItem key={index} {...item}/>)
                }
            </Menu>
            <Item>View all</Item>
        </Container>
    )
}

const Container = styled.div`
    display:flex;
    position:relative;
    align-items:center;
    justify-content: flex-start;
    height: ${pxToRem(56)};
`
const Item = styled(TextLink)`
    position:relative;
    left: 0;
    display:flex;
    align-items:center;
    justify-content:center;
    height: 100%;
`;
const Menu = styled.div`
    flex: 1;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    width: calc(100% + 7.5rem);
    height: 100%;
    overflow: hidden;
    overflow-x: scroll;
    padding-right: ${pxToRem(120)};
    > * &:last-child {
        padding-right: ${pxToRem(32)};
    }
    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: ${pxToRem(70)};
        width: 1px;
        height: ${pxToRem(32)};
        background: #aaa;
        margin: ${pxToRem(12)} 0;
    }
    &::after {
        content: "";
        position: absolute;
        top: 0;
        right: ${pxToRem(52)};
        width: ${pxToRem(100)};
        height: 100%;
        background: linear-gradient(to right, rgba(255,255,255,.2), rgba(255,255,255,.7), rgba(255,255,255,1));
    }
`;
export default Nav;