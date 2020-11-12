import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {pxToRem} from "../../../common/Text/Text.Styled";
import {ContentContainer} from "../../../common/Layout/Components.Styled";
import {topicsActions} from "../../../redux/actionCreators";
import {useSelector} from "react-redux";

function Details (props) {

    const {
        match
    } = props;

    const slug = match.params.slug;
    const {detail} = useSelector(state => state.topics);
    const data = detail[slug]

    useEffect(() => {
        if(!data) {
            topicsActions.getTopicsBySlug(slug);
        }
    }, [slug])

    return (
        <Container>
            {data?.title}
        </Container>
    )
}

const Container = styled.div`
    position:relative;
    top: ${pxToRem(112)};
`
const SContentContainer = styled(ContentContainer)`
    
`;
const List = styled.div`
    display:flex;
    align-items:center;
    flex-wrap: wrap;
    justify-content: space-between;
    flex: 1 0 30%;
`;
export default Details;