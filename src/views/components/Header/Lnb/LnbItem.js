import React from 'react';
import styled from 'styled-components';
import {navigate} from "../../../../lib/History";
import {pxToRem, TextLink} from "../../../../common/Text/Text.Styled";

function LnbItem (props) {

    const {
        title,
        slug
    } = props;

    return (
        <Container>
            <Item onClick={() => navigate(`/t/${slug}`)}>{title}</Item>
        </Container>
    )

}

const Container = styled(TextLink)`
    display:flex;
`
const Item = styled.div`
    padding-left: ${pxToRem(32)};
    white-space: pre;
    cursor: pointer;
`;
export default LnbItem;