import React from 'react';
import styled from 'styled-components';
import {pxToRem} from "../../../common/Text/Text.Styled";

function Tags(props) {

    const {
        tags,
    } = props;

    return (
        <Container>
            {
                tags.map((item) => <Tag>{item.title}</Tag>)
            }
        </Container>
    )
}

const Container = styled.div`
`
const Tag = styled.div`
    
`;
export default Tags;