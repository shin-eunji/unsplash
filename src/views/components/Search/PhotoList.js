import React from 'react';
import styled from 'styled-components';
import Tags from "./Tags";
import {pxToRem} from "../../../common/Text/Text.Styled";

function PhotoList (props) {

    const {
        urls,
        alt_description,
        tags
    } = props;

    return (
        <Container >
            <img src={urls.small} alt={alt_description}/>
            <Tag>
                {
                    tags.map((item) => <Text>{item.title}</Text>)
                }
            </Tag>
        </Container>
    )
}

const Container = styled.div`
    display:flex;
    flex-direction:column;
    img {
        width: 100%;
    }
`
const Tag = styled.div`
    display:flex;
    align-items:center;
    justify-content:flex-start;
    padding: ${pxToRem(13)} 0;
`;
const Text = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    height: ${pxToRem(26)};
    background-color: #eee;
    margin-right: ${pxToRem(10)};
    padding: 0 ${pxToRem(8)};
    border-radius: ${pxToRem(2)};
    color: #767676;
    font-size: ${pxToRem(14)};
    text-transform: capitalize;
    cursor: pointer;
    &:hover {
        color: #111;
        background-color: #e1e1e1;
    }
`;
export default PhotoList;