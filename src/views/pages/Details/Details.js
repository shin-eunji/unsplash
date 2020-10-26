import React from 'react';
import styled from 'styled-components';

function Details (props) {

    const {
        photo,
    } = props;
    
    console.log("photo", photo);

    return (
        <Container>
            <img src={photo.urls.small} />
        </Container>
    )
}

const Container = styled.div`
`
export default Details;