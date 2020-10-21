import React from 'react';
import styled from 'styled-components';
import {navLinks} from "../../data/Navigation";
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
    align-items:center;
    justify-content: space-between;
    height: ${pxToRem(56)};
`
const Item = styled(TextLink)`
`;
const Menu = styled.div`
    flex: 1;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    height: 100%;
    overflow: hidden;
    overflow-x: scroll;
    > * &:last-child {
        padding-right: ${pxToRem(32)};
    }
`;
export default Nav;