import React from 'react';
import styled from 'styled-components';
import {Button} from "../../../../../common/Button/Button.Styled";
import {pxToRem, TextLink} from "../../../../../common/Text/Text.Styled";

function Member (props) {

    const {} = props;

    return (
        <Container>
            <LoginButton>Login</LoginButton>
            <JoinButton size={'small'} sort={'green'}>Join free</JoinButton>
        </Container>
    )
}

const Container = styled.div`
    display:flex;
    align-items:center;
`
const LoginButton = styled(TextLink)`
    color: #767676;
    font-size: ${pxToRem(14)};
    font-weight: 500;
    padding: ${pxToRem(24)};
    &:hover {
        color: #111;
    }
`;
const JoinButton = styled(Button)`
    
`;
export default Member;