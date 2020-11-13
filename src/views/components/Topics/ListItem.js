import React from 'react';
import styled from 'styled-components';
import {pxToRem} from "../../../common/Text/Text.Styled";

function ListItem (props) {

    const {
        urls
    } = props;

    return (
        <Container>
            <img src={urls.small}/>
        </Container>
    )
}

const Container = styled.div`
`
export default ListItem;