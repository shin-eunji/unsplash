import React from 'react';
import styled from 'styled-components';
import TopHeader from "./Header/TopHeader";
import Nav from "./Header/Nav";

function Header (props) {

    const {} = props;

    return (
        <Container>
            <TopHeader/>
            <Nav/>
        </Container>
    )
}

const Container = styled.div`
  position:fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  background: #fff;
  box-shadow: 0 5px 5px rgba(0,0,0,.15);
`
export default Header;