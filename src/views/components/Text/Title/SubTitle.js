import React from 'react';
import styled from 'styled-components';
import {pxToRem} from "../../../../common/Text/Text.Styled";

function SubTitle (props) {

    const {
        data
    } = props;

    return (
        <Container>
            {
                data.map((item) => <Text>{item}</Text>)
            }
        </Container>
    )
}

const Container = styled.div`
`
const Text = styled.div`
    color: #111;
    font-size: ${pxToRem(28)};
    font-weight: 700;
    margin-bottom: ${pxToRem(32)};
`;
export default SubTitle;