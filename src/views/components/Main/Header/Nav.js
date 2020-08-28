import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

function Nav (props) {

    const {} = props;

    return (
        <Container>
            <Linked className={"active"}>Editorial</Linked>
            <List>
                <Linked>Sustainability</Linked>
                <Linked>Film</Linked>
                <Linked>Wallpapers</Linked>
                <Linked>COVID-19</Linked>
                <Linked>Travel</Linked>
                <Linked>Nature</Linked>
                <Linked>Textures &amp; Patterns</Linked>
                <Linked>Current Events</Linked>
                <Linked>People</Linked>
                <Linked>Business &amp; Work</Linked>
                <Linked>Technology</Linked>
                <Linked>Animals</Linked>
                <Linked>Interiors</Linked>
                <Linked>Architecture</Linked>
                <Linked>Texture &amp; Patterns</Linked>
                <Linked>Current Events</Linked>
                <Linked>People</Linked>
                <Linked>Business &amp; Work</Linked>

            </List>
            <Linked className={"all"}>View all</Linked>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    display:flex;
    justify-content: space-around;
    align-items:center;
    flex-direction:row;
    .all {
        position:relative;
        top: 0;
        right: 0;
        left: 0;
        padding: 0 30px;
      &:before {
      content: "";
      position:absolute;
      top: 0;
      left: -200px;
      background: linear-gradient(to right, rgba(255,255,255,.0), rgba(255,255,255,1));
      width: 200px;
      height: 100%;
      }
    }
    .active {
      width: 100px;
      height: 100%;
      position:relative;
      color: #111;
      &:after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0px;
        width: 100px;
        height: 3px;
        background: #000;
      }
    }
`;
const Linked = styled(Link)`
    width: auto;
    padding: 20px;
    color: #666;
    font-size: 15px;
    font-weight:600;
    cursor: pointer;
    &:hover {
      color: #111;
    }
`;
const List = styled.div`
    height: 100%;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content: space-between;
    flex: 1 1 0;
    box-sizing: initial;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
`;
export default Nav;