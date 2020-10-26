import React from 'react';
import styled from 'styled-components';

import Visual from "../../components/Main/Visual";
import Contents from "../../components/Main/Features";

function Home (props) {

    const {
    } = props;

    return (
        <Container>
            <Visual />
            <Contents/>
        </Container>
    )
}

const Container = styled.div`
`
export default Home;