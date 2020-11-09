import React, {useEffect} from 'react';
import styled from 'styled-components';
import {photoActions} from "../../../redux/actionCreators";
import {useSelector} from "react-redux";

function Details (props) {

    const {
        urls
    } = props;


    return (
        <Container>
            <img src={urls.small} alt="photo"/>
        </Container>
    )
}

const Container = styled.div`
`
export default Details;