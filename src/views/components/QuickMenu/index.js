import React from 'react';
import styled from 'styled-components';
import {pxToRem} from "../../../common/Text/Text.Styled";

function QuickMenu (props) {

    const {} = props;

    const quickMenuLinks = [
        {
            to: '/about',
            name: 'About'
        },
        {
            to: '/wallpapers',
            name: 'Wallpapers'
        },
        {
            to: '/blog',
            name: 'Blog'
        },
        {
            to: '/topics',
            name: 'Topics'
        },
        {
            to: '/collections',
            name: 'Collections'
        },{
            to: '/community',
            name: 'Community'
        },{
            to: '/history',
            name: 'History'
        },
        {
            to: '/madewith',
            name: 'Made With Unsplash'
        },
        {
            to: '/api',
            name: 'API/Developers'
        },
        {
            to: '/official',
            name: 'Official Apps'
        },
    ]


    return (
        <Container>
            <Menu>
                {
                    quickMenuLinks.map((item, index) => <MenuItem key={index}>{item.name}</MenuItem>)
                }
            </Menu>
        </Container>
    )
}

const Container = styled.div`
    position: absolute;
    top: ${pxToRem(50)};
    right: ${pxToRem(120)};
    min-width: ${pxToRem(160)};
    width: ${pxToRem(285)};
    position: absolute;
    z-index: 1;
    white-space: nowrap;
    padding-top: 8px;
    padding-bottom: 8px;
    border-radius: 4px;
    box-shadow: 0 8px 16px rgba(0,0,0,.16);
    background: #000;
    z-index: 200;
    &:before {
        content: '';
        position: absolute;
        top: ${pxToRem(-7)};
        left: ${pxToRem(10)};
        width: 0;
        height: 0;
        border-width: ${pxToRem(7)};
        border-style: solid;
        border-bottom-color: rgb(17, 17, 17);
        border-left-color: transparent;
        border-right-color: transparent;
        border-top-width: 0;
        border-top-color: transparent;
}`
const Menu = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
`;
const MenuItem = styled.div`
    display:flex;
    align-items:center;
    justify-content: flex-start;
    height: ${pxToRem(38)};
    padding: ${pxToRem(8)} ${pxToRem(16)};
    color: #fff;
    font-size: ${pxToRem(14)};
    font-weight: 400;
    
`;
export default QuickMenu;