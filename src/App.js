import React from 'react';
import styled from 'styled-components';
import Routes from "./Routes";
import {useSelector} from "react-redux";

function App (props) {

    const {
    } = props;


    return (
        <Container>
            <Routes />
        </Container>
    )
}

const Container = styled.div`
`
export default App;