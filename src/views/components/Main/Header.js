import React, { useState } from 'react';
import styled from 'styled-components';
import PopupMenu from './PopupMenu'

import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineEllipsis } from "react-icons/ai";
import {Link} from "react-router-dom";

function Header (props) {

    const {} = props;

    const [ popupmenu, handleMenu ] = useState(false)

    return (
        <Container>
            <HeaderTop>
                <Logo to={"/"}>
                    <svg width="32" height="32" className="_1Jlgk" version="1.1" viewBox="0 0 32 32"
                         aria-labelledby="unsplash-home" aria-hidden="false"><title id="unsplash-home">Unsplash Home</title>
                        <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
                    </svg>
                    <Text>
                        <p className={"logo"}>Unsplash</p>
                        <p className={"text"}>Photos for everyone</p>
                    </Text>
                </Logo>
                <Input>
                    <AiOutlineSearch color={"#666"} size={"26"} />
                    <input className={"search"} type="text" placeholder={"Search free high-resolution photos"}/>
                </Input>

                <Menu>
                    <Linked>Topics</Linked>
                    <Linked>Explore</Linked>
                    <Linked onClick={() => {
                        handleMenu(true)
                    }}><AiOutlineEllipsis size={"30"}/></Linked>
                    {
                        popupmenu &&
                        <PopupMenu handleMenu={handleMenu}/>
                    }
                    <Button>
                        <Linked className={"btnSubmit"}>Submit a photo</Linked>
                        <Linked className={"btnLogin"} to={"login"}>Login</Linked>
                        <Linked className={"btnJoin"} to={"Join"}>Join free</Linked>
                    </Button>
                </Menu>
            </HeaderTop>
            <Nav>
                <Linked className={"active"}>Editorial</Linked>
                <List>
                    <Linked>Sustainability</Linked>
                    <Linked>Film</Linked>
                    <Linked>Wallpapers</Linked>
                    <Link>COVID-19</Link>
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
            </Nav>
        </Container>
    )
}

const Container = styled.div`
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
`
const HeaderTop = styled.div`
  display:flex;
  align-items:center;
  justify-content: space-between;
  flex-wrap:wrap;
  margin: 0 10px;
  padding: 10px 0;
`;
const Logo = styled.div`
  position:relative;
  top: 0;
  bottom: 0;
  left: 0;
  display:flex;
  align-items:center;
  justify-content:flex-start;
  flex-wrap: wrap;
  flex-direction:row;
  flex: 1 1 0;
  cursor:pointer;
`;
const Text = styled.div`
  margin-left: 10px;
  color: #111;
  
  .logo {
      font-weight:bold;
      color: #111;
      font-size: 16px;
      padding: 0;
      margin: 0;  
  }
  .text {
      font-weight:600;
      color: #111;
      font-size: 14px;
      padding: 0;
      margin: 0;
  }
`;
const Input = styled.div`
  height: 36px;
  background: #eee;
  border-radius: 50px;
  display:flex;
  align-items:center;
  flex: 4 1 0;  
  padding: 5px 10px;
  .search {
    width: 100%;
    height: 100%;
    background: none;
    margin-left: 10px;
    border: 0;
    font-size: 16px;
  }
`;
const Menu = styled.div`
  display:flex;
  align-items:center;
  justify-content: flex-end;
  flex: 3 1 0;
    
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
const Button = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content: center;
  .btnSubmit {
    background-color: #fff;
    border: 1px solid #aaa;
    padding: 6px 12px;
    border-radius: 5px;
    font-weight: bold;
    margin-right: 60px;
    cursor: pointer;
    &:hover {
      color: #111;
      border: 1px solid #666;
    }
  }
    
  .btnLogin {
    position:relative;
    top: 0;
    left: 0;
    cursor: pointer;
    padding: 10px 20px;
    margin-right: 10px;
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: -18px;
      width: 1px;
      height: 100%;
      background: #aaa;
    }
  }
  .btnJoin {
    background-color: #3cb46e;
    border: 1px solid #aaa;
    padding: 6px 12px;
    border-radius: 5px;
    font-weight: bold;
    border: none;
    color: #fff;
    cursor: pointer;
    &:hover {
      background-color: #37a866;
    }
  }
`;
const Nav = styled.div`
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

export default Header;