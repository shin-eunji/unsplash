import React, {useEffect} from 'react';
import styled from 'styled-components';
import {photoActions} from "../../../redux/actionCreators";
import {useSelector} from "react-redux";

function Details (props) {

    const {

    } = props;

    useEffect((data) => {
        photoActions.searchPhoto(data)
        console.log("data", data);
    }, [])

    const {photo} = useSelector(state => state.photo)



    return (
        <Container>
            {
                photo.map((data, index) => <Details key={index} {...data} />)
            }
        </Container>
    )
}

const Container = styled.div`
`
export default Details;