import React, {useEffect} from 'react';
import styled from 'styled-components';
import {photoActions, searchActions} from "../../../redux/actionCreators";

function Search (props) {

    const {
    } = props;

    useEffect((keyword) => {
        searchActions.searchPhoto(keyword)
        console.log("data", keyword);
    }, [])

    useEffect((data) => {
        searchActions.getPhoto(data)
        console.log("data", data);
    }, [])


    return (
        <Container>
            images.map((image) => {
            <Image key={image.id} image={image}/>
        })
        </Container>
    )
}

const Container = styled.div`
`
const Image = styled.div`
    
`;
export default Search;