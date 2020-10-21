import React from 'react';
import styled from 'styled-components';

function Tag (props) {

    const {
        user
    } = props;

    return (
        <Container>
                <h4>Trending:</h4>
                {/*<TagList tag={users}/>*/}
                <p>{user.name}</p>
        </Container>
    )
}

const Container = styled.div`

`
const TagList = styled.div`
    font-weight: 600;
    margin-left: 3px;
`;
export default Tag;