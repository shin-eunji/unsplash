import React from 'react';
import styled from 'styled-components';
import {withRouter} from "react-router-dom";

import Gnb from "./Gnb";

function Header ({children}) {

    return (
        <Container>
            <Gnb/>
            {children}
        </Container>
    )
}

const Container = styled.div`
    position:fixed;
    top: 0;
    left: 0;
    display:flex;
    flex-direction:column;
    width: 100%;
    background: #fff;
    box-shadow: 0 5px 5px rgba(0,0,0,.15);
    z-index: 100;
`
export default withRouter(Header);