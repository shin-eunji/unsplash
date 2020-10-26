import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import PhotosList from "./PhotosList";
import axios from 'axios'
import {ContentContainer} from "../../../../common/Layout/Components.Styled";
import {pxToRem} from "../../../../common/Text/Text.Styled";

function Contents () {

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
            {
                post.map((item, index) => <PhotosList key={index} {...item}/>)
            }
        </Container>
    )
}

const Container = styled(ContentContainer)`
    position: relative;
    top: ${pxToRem(60)};
    
    line-height: 0;
    margin-top: 10px;
    -webkit-column-count: 4;
    -webkit-column-gap: 0px;
    -moz-column-count: 4;
    -moz-column-gap: 0px;
    column-count: 3;
    column-gap: 10px;
`

export default Contents;