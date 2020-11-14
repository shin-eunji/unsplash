import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {pxToRem} from "../../../common/Text/Text.Styled";
import {ContentContainer} from "../../../common/Layout/Components.Styled";
import {topicsActions} from "../../../redux/actionCreators";
import {useSelector} from "react-redux";
import ListItem from "./ListItem";
import TopicsDetails from "./TopicsDetails";

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
                <Header>
                    <Text>
                        <Title>{data?.title}</Title>
                        <Description>{data?.description}</Description>

                    </Text>
                    <TopicsDetails data={data}/>
                </Header>



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
    position:relative;
    top: ${pxToRem(112)};
`
const SContentContainer = styled(ContentContainer)`
`;
const Header = styled.div`
    display:flex;
    align-items:flex-start;
    justify-content: space-between;
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
    margin-bottom: ${pxToRem(16)};
`;
const Description = styled.div`
    max-width: ${pxToRem(620)};
    margin: 0 0 ${pxToRem(24)};
    line-height: 1.6;
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