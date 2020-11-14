import React from 'react';
import styled from 'styled-components';
import {pxToRem} from "../../../common/Text/Text.Styled";

function TagList(props) {

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
    display:flex;
    align-items:center;
    overflow: hidden;
    overflow-x: scroll;
`
const Tag = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width: ${pxToRem(135)};
    height: ${pxToRem(40)};
    border: 1px solid #d1d1d1;
    border-radius: 5px;
    text-align:center;
    overflow: hidden;
`;
export default TagList;