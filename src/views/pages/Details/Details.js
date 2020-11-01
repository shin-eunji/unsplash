import React from 'react';
import styled from 'styled-components';

function Details (props) {

    const {
        id,
        urls
    } = props;
    

    return (
        <Container>
            <img key={id} src={urls.raw} />
        </Container>
    )
}

const Container = styled.div`
`
export default Details;