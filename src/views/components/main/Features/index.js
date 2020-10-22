import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import PostList from "./PostList";
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
                post.map((item, index) => <PostList key={index} {...item}/>)
            }
        </Container>
    )
}

const Container = styled(ContentContainer)`
    position: relative;
    top: ${pxToRem(60)};
    display:flex;
    flex-direction:row;
    flex-wrap: wrap;
    //display: grid;
    //grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    //grid-gap: 0 5px;
    //grid-auto-rows: 10px;
    //place-items:center;
`

export default Contents;