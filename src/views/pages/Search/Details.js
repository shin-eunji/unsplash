import React, {useEffect} from 'react';
import styled from 'styled-components';
import Tags from "../../components/Search/Tags";

function Details (props) {

    const {
        tags
    } = props;


    return (
        <Container>
            <Tags tags={tags}/>
        </Container>
    )
}

const Container = styled.div`
    display:flex;
    flex-direction:row;
`


export default Details;