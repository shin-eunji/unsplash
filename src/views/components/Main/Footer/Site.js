import React from 'react';
import styled from 'styled-components';
import {navigate} from "../../../../lib/History";
import {pxToRem} from "../../../../common/Text/Text.Styled";

function Site (props) {

    const {
        to,
        name,
    } = props;

    return (
        <Container onClick={() => navigate(to)}>{name}
        </Container>
    )
}

const Container = styled.div`
    display:flex;
    flex: 1 0 30%;
    width: ${pxToRem(216)};
    color: #767676;
    font-size: ${pxToRem(15)};
    font-weight: 400;
    margin-bottom: ${pxToRem(8)};
`
const Text = styled.div`
`;
export default Site;