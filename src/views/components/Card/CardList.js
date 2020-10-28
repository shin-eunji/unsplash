import React from 'react';
import styled from 'styled-components';
import Card from "./Card";
import {pxToRem} from "../../../common/Text/Text.Styled";

function CardList (props) {

    const {
        data
    } = props;

    return (
        <Container>
            {
                data.map((item, index) => <Card key={index} {...item} /> )
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
export default CardList;