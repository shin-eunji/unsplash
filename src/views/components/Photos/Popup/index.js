import React, {useEffect} from 'react';
import styled from 'styled-components';
import {appActions} from "../../../../redux/actionCreators";
import {ContentContainer} from "../../../../common/Layout/Components.Styled";
import {pxToRem} from "../../../../common/Text/Text.Styled";
import {AiOutlineClose} from "react-icons/all";
import Photo from "./Photo";
import Profile from "./Profile";

function Popup (props) {

    const {
        user,
        urls,
        sponsorship,
        alt_description,
    } = props;

    const closePopup = () => {
        appActions.updateState({ popup: false })
    }

    return (
        <Container onClick={closePopup}>

            <SContentContainer onClick={e => e.stopPropagation()}>
                <Profile user={user} />
                <Photo urls={urls} alt_description={alt_description} />
            </SContentContainer>

            <CloseButton onClick={closePopup}><AiOutlineClose/></CloseButton>
        </Container>
    )
}

const Container = styled.div`
    position:fixed;
    display:flex;
    align-items:center;
    justify-content:center;
    color: #fff;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.6);
    padding: ${pxToRem(32)}${pxToRem(120)} ${pxToRem(100)};
    z-index: 1000;
    cursor: zoom-out;
    overflow-y: scroll;
`
const SContentContainer = styled(ContentContainer)`
    position:absolute;
    top: ${pxToRem(32)};
    right: 0;
    left: 0;
    bottom: 0;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-start;
    width: 90%;
    height: 80%;
    background: #fff;
    border-radius: ${pxToRem(6)};
    padding: ${pxToRem(14)};
    overflow-y: scroll;
    cursor: default;
`;
const CloseButton = styled.button`
    position: fixed;
    top: ${pxToRem(10)};
    left: ${pxToRem(10)};
    color: #fff;
    font-size: ${pxToRem(20)};
    width: ${pxToRem(30)};
    height: ${pxToRem(30)};
    z-index: 101;
    border: none;
    background: none;
    cursor: pointer;
`;
export default Popup;