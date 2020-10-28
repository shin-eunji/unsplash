import React from 'react';
import styled from 'styled-components';

function Details (props) {

    const {
        id
    } = props;
    

    return (
        <Container>
            <img key={id} />
        </Container>
    )
}

const Container = styled.div`
`
export default Details;