import React from 'react';
import styled from 'styled-components';
import {pxToRem} from "../../../../../common/Text/Text.Styled";
import {navigate} from "../../../../../lib/History";

function Logo (props) {

    const {} = props;

    return (
        <Container onClick={() => navigate('/')}>
            <Img/>
            <Text>
                Unsplash
                <p>Photos for everyone</p>
            </Text>
        </Container>
    )
}

const Container = styled.h1`
    display:flex;
    align-items:center;
    cursor: pointer;
`;
const Img = styled.div`
    width: ${pxToRem(32)};
    height: ${pxToRem(32)};
    background: url('https://unsplash.com/assets/core/logo-black-df2168ed0c378fa5506b1816e75eb379d06cfcd0af01e07a2eb813ae9b5d7405.svg') no-repeat;
`;
const Text = styled.div`
    font-size: ${pxToRem(15)};
    font-weight: 700;
    margin-left: ${pxToRem(12)};
    p {
        font-size: ${pxToRem(13)};
        font-weight: 500;
    }
`;
export default Logo;