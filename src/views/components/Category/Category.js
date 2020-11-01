import React from 'react';
import styled from 'styled-components';
import CategoryContents from "./CategoryContents";
import {pxToRem} from "../../../common/Text/Text.Styled";

function Category (props) {

    const {
        data
    } = props;

    return (
        <Container>
            {
                data.map((item, index) => <CategoryContents key={index} {...item} /> )
            }
        </Container>
    )
}

const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
    margin-bottom: ${pxToRem(72)};  
`
export default Category;