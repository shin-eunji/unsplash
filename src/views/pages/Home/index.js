import React from 'react';
import styled from 'styled-components';

import Header from "../../components/Main/Header";
import Visual from "../../components/Main/Visual";
import Features from "../../components/Main/Features";
import Footer from "../../components/Main/Footer";

function Home (props) {

    const {
    } = props;

    return (
        <Container>
            <Header />
            <Visual />
            <Features/>
            <Footer/>
        </Container>
    )
}

const Container = styled.div`
    position:relative;
    top: 0;
    right: 0;
    height: 100%;
`
export default Home;