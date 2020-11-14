import React from 'react';
import styled from 'styled-components';
import TagList from "./TagList";

function Tags (props) {

    const {
        tags
    } = props;


    return (
        <Container>
            <TagList tags={tags}/>
        </Container>
    )
}

const Container = styled.div`
    display:flex;
    flex-direction:row;
`


export default Tags;