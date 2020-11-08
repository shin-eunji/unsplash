import React, {useEffect, useState} from 'react';
import styled from 'styled-components';


import {ContentContainer} from "../../../../common/Layout/Components.Styled";
import {pxToRem} from "../../../../common/Text/Text.Styled";
import {photoActions} from "../../../../redux/actionCreators";
import {useSelector} from "react-redux";
import PhotosList from "./PhotosList";

function Features() {

    useEffect((data) => {
        photoActions.listPhoto(data)
        console.log("data", data);
    }, [])

    const {list} = useSelector(state => state.photo)


    return (
        <Container>
            {
                list.map((data, index) => <PhotosList key={index} {...data}/>)
            }
        </Container>
    )

}

const Container = styled(ContentContainer)`
    line-height: 0;
    margin-top: 10px;
    -webkit-column-count: 4;
    -webkit-column-gap: 0px;
    -moz-column-count: 4;
    -moz-column-gap: 0px;
    column-count: 3;
    column-gap: ${pxToRem(20)};
`


export default Features;