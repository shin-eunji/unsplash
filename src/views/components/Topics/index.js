import React, {useEffect} from 'react';
import styled from 'styled-components';
import {useSelector} from "react-redux";
import {topicsActions} from "../../../redux/actionCreators";
import Item from "./Item";
import {ContentContainer} from "../../../common/Layout/Components.Styled";
import {pxToRem} from "../../../common/Text/Text.Styled";

function TopicsAll (props) {

    const {} = props;

    const {list = []} = useSelector(state => state.topics);

    const all = list.map((item) => ({
        slug: item.slug,
        title: item.title,
        description: item.description,
        total_photos: item.total_photos,
        cover_photo: item.cover_photo,
        status: item.status,
        profile_image: item.owners.profile_image,
        featured: item.featured,
        owners: item.owners
    }))

    useEffect(() => {
        topicsActions.getTopics()
    }, [])

    return (
        <Container>
            <SContentContainer>
                <Text>
                    <Title>Topics</Title>
                    <Description>Explore the world through topics of beautiful photos free to use under the <p>Unsplash License.</p></Description>
                </Text>
                <List>
                {
                    all.map((item, index) => <Item key={index} {...item}/>)
                }
                </List>
            </SContentContainer>
        </Container>
    )
}

const Container = styled.div`
    position:relative;
`
const SContentContainer = styled(ContentContainer)`
    
`;
const Text = styled.div`
    padding: ${pxToRem(60)} 0 ${pxToRem(72)};
    color: #111;
`;
const Title = styled.h2`
    font-size: ${pxToRem(46)};
    line-height: 1.2;
    font-weight: 700;
    margin-bottom: ${pxToRem(16)};
`;
const Description = styled.div`
    font-size: ${pxToRem(18)};
    font-weight: 400;
    line-height: 1.6;
    p {
        text-decoration: underline;
        color: #767676;
        cursor: pointer;
        &:hover {
            color: #111;
        }
    }
`;
const List = styled.div`
    display:flex;
    flex-wrap:wrap;
    align-items:center;
`;
export default TopicsAll;