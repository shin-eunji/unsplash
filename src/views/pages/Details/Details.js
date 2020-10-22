import React from 'react';
import styled from 'styled-components';

function Details (props) {

    const {
        imageRef,
        urls,
        alt_description
    } = props;

    return (
        <Container>
            <img ref={imageRef}
                 src={urls.small}
                 alt={alt_description}/>
        </Container>
    )
}

const Container = styled.div`
`
export default Details;