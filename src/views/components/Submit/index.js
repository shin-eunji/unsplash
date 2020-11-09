import React from 'react';
import styled from 'styled-components';
import SignIn from "../../pages/Sign/SignIn";
import {pxToRem} from "../../../common/Text/Text.Styled";
import {appActions} from "../../../redux/actionCreators";

function SubmitPhotos (props) {

    const {} = props;

    const closeSubmit = () => {
        appActions.updateState({ submitPhoto: false })
    }

    return (
        <Container onClick={closeSubmit}>
            <ContentContainer>
                <SignIn/>
            </ContentContainer>
        </Container>
    )
}

const Container = styled.div`
    position:fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    display:flex;
    align-items:center;
    justify-content:center;
    padding: ${pxToRem(50)};
    background: rgba(0,0,0,.4);
    z-index: 100;
`
const ContentContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width: 60%;
    height: 80%;
    background: #fff;
    border-radius: ${pxToRem(5)};
`;
export default SubmitPhotos;