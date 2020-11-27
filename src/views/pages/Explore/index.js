import React from 'react';
import styled from 'styled-components';

import {pxToRem} from "../../../common/Text/Text.Styled";
import {ContentContainer} from "../../../common/Layout/Components.Styled";
import {category} from "../../components/Category/CategoryList";

import Category from "../../components/Category/Category";
import Photos from "../../containers/Photos";

function Explore(props) {

    const {} = props;

    return (
        <Container>
            <SContentContainer>
                <Text>
                    <Thumbnail>Explore</Thumbnail>
                    <Title>Explore</Title>
                    <Description>Unsplash has over a million free high-resolution photos. Explore these popular photo categories on Unsplash. All photos here are free to download and use under the<p>Unsplash License.</p></Description>
                </Text>
                <Contents>
                    <SubTitle>Browse thousands of free images on Unsplash</SubTitle>
                    <Category data={category}/>
                </Contents>
                <SubTitle>Free high-resolution Unsplash photos</SubTitle>
                <Photos />
            </SContentContainer>
        </Container>
    )
}

const Container = styled.div`
`
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
const Thumbnail = styled.div`
    font-size: ${pxToRem(16)};
    line-height: 1.2;
    font-weight: 400;
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
const Contents = styled.div`
    
`;
const SubTitle = styled.div`
    color: #111;
    font-size: ${pxToRem(28)};
    font-weight: 700;
    margin-bottom: ${pxToRem(32)};
`;
const SContentContainer = styled(ContentContainer)`
    position:relative;
    top: ${pxToRem(30)};
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    padding: 0 ${pxToRem(15)};
`;
export default Explore;