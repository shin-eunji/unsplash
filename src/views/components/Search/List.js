import React, {useEffect} from 'react';
import styled from 'styled-components';
import {searchActions} from "../../../redux/actionCreators";
import {useSelector} from "react-redux";

function PhotoList (props) {

    const {} = props;

    useEffect(() => {
        searchActions.searchPhoto()
    }, [])

    const {search} = useSelector(state => state.search)

    return (
        <Container>
            PhotoList
        </Container>
    )
}

const Container = styled.div`
`
export default PhotoList;