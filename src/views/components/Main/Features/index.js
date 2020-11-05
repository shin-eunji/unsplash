import React, {useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios'

import {ContentContainer} from "../../../../common/Layout/Components.Styled";
import {pxToRem} from "../../../../common/Text/Text.Styled";

import PhotosList from "./PhotosList";
import {useSelector} from "react-redux";
import {photoActions} from "../../../../redux/actionCreators";

function Features () {

    const { post } = useSelector(state => state.photo)

    useEffect(() => {
        axios.get("https://api.unsplash.com/photos/?client_id=t_jbP7JejOj1keyZ7UiEl1BZcoPHG3vxmy3rPUGhVRc")
            .then(res => {
                const data = res.data;
                console.log("data", data);
                photoActions.listPhoto(data)
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
    line-height: 0;
    column-count: 3;
    column-gap: ${pxToRem(20)};
    row-gap: ${pxToRem(20)};
    padding: 0;
`

export default Features;