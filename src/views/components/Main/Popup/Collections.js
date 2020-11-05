import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import axios from "axios";
import {pxToRem} from "../../../../common/Text/Text.Styled";

function Collections (props) {

    const {} = props;

    const [post, setPost] = useState([])

    useEffect(() => {
        axios.get("https://api.unsplash.com/photos/?client_id=t_jbP7JejOj1keyZ7UiEl1BZcoPHG3vxmy3rPUGhVRc")
            .then(res => {
                const data = res.data;
                console.log("data", data);
                setPost(data);
            })
    }, [])

    return (
        <Container>
            <Title>Related photos</Title>
            <ContentContainer>
                {
                    post.map(item => <img src={item.urls.small} alt='photo'/>)
                }
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