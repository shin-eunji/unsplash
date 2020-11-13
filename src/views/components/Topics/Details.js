import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {pxToRem} from "../../../common/Text/Text.Styled";
import {ContentContainer} from "../../../common/Layout/Components.Styled";
import {topicsActions} from "../../../redux/actionCreators";
import {useSelector} from "react-redux";
import ListItem from "./ListItem";

function Details (props) {

    const {
        match
    } = props;

    const slug = match.params.slug;
    const {detail} = useSelector(state => state.topics);
    console.log("detail", detail);
    const data = detail[slug]

    useEffect(() => {
        if(!data) {
            topicsActions.getTopicsBySlug(slug);
        }
    }, [slug])




    return (
        <Container>
            <SContentContainer>
                <Text>
                    <Title>{data?.title}</Title>
                    <Description>{data?.description}</Description>
                </Text>

                <List>
                    {
                        data?.preview_photos.map((item) => <ListItem {...item}/>)
                    }
                </List>
            </SContentContainer>
        </Container>
    )
}

const Container = styled.div`
`
const SContentContainer = styled(ContentContainer)`
`;
const Text = styled.div`
    display:flex;
    flex-direction:column;
    padding: ${pxToRem(72)} 0 ${pxToRem(60)};
`;
const Title = styled.div`
    color: #111;
    font-size: ${pxToRem(46)};
    font-weight: 700;
    line-height: 1.2;
`;
const Description = styled.div`
    
`;
const List = styled.div`
    line-height: 0;
    margin-top: 10px;
    -webkit-column-count: 4;
    -webkit-column-gap: 0px;
    -moz-column-count: 4;
    -moz-column-gap: 0px;
    column-count: 3;
    column-gap: ${pxToRem(20)};
`;
export default Details;