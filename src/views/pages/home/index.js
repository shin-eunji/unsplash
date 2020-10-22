import React from 'react';
import styled from 'styled-components';

import Visual from "../../components/main/Visual";
import Contents from "../../components/main/Features";

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