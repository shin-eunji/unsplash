import React from 'react';
import styled from 'styled-components';
import Tags from "../../components/Search/Tags";
import {pxToRem} from "../../../common/Text/Text.Styled";

function Details (props) {

    const {
        tags
    } = props;

    return (
        <Container>
            <Title>Hello</Title>
            <Tags tags={tags}/>
        </Container>
    )
}

const Container = styled.div`
`
const Title = styled.h2`
    font-size: ${pxToRem(46)};
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: ${pxToRem(16)};
`;
export default Details;