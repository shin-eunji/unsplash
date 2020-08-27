import React from 'react';
import styled from 'styled-components';
import Header from "../components/Main/Header";
import Visual from "../components/Main/Visual";
import Content from "../components/Main/Content";

function Main (props) {

    const {} = props;

    return (
        <Container>
            <Header/>
            <Visual/>
            <Content/>
        </Container>
    )
}

const Container = styled.div`
`
export default Main;