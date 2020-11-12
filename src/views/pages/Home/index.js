import React from 'react';
import styled from 'styled-components';

import Visual from "../../components/Visual";
import Features from "../../containers/Home/Features";

function Home (props) {

    const {
    } = props;

    return (
        <Container>
            <Visual />
            <Features />
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