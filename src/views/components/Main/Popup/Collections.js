import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {pxToRem} from "../../../../common/Text/Text.Styled";
import Features from "../Features";

function Collections (props) {

    const {} = props;



    return (
        <Container>
            <Title>Related photos</Title>
            <ContentContainer>
                <Features/>
            </ContentContainer>
        </Container>
    )
}

const Container = styled.div`
    position:relative;
    top: ${pxToRem(100)};
`

const Title = styled.div`
    color: #111;
    font-size: ${pxToRem(15)};
    font-weight: 400;
`;
const ContentContainer = styled.div`
    position: relative;
    top: ${pxToRem(60)};
    line-height: 0;
    margin-top: ${pxToRem(20)};
    column-count: 3;
    column-gap: ${pxToRem(20)};
    row-gap: ${pxToRem(20)};
    
    img {
        position:relative;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        display: block;
        width: 100%;
        height: auto;
        list-style: none;
        object-fit: cover;
    }
`;
export default Collections;