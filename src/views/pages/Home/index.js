import React from 'react';
import styled from 'styled-components';

import Visual from "../../components/Main/Visual";
import Features from "../../components/Main/Features";

function Home (props) {

    const {
    } = props;

    return (
        <Container>
            <Visual />
            <Features/>
        </Container>
    )
}

const Container = styled.div`
`
export default Home;