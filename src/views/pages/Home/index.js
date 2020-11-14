import React from 'react';
import styled from 'styled-components';

import Visual from "../../components/Visual";
import Photos from "../../containers/Photos";
import {pxToRem} from "../../../common/Text/Text.Styled";

function Home (props) {

    const {
    } = props;

    return (
        <Container>
            <Visual />
            <Photos />
        </Container>
    )
}

const Container = styled.div`
    position:relative;
    top: ${pxToRem(112)};
    right: 0;
    height: 100%;
`
export default Home;