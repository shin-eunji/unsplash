import React from 'react';
import styled from 'styled-components';
import {photoActions} from "../../../../redux/actionCreators";
import {ContentContainer} from "../../../../common/Layout/Components.Styled";
import {pxToRem} from "../../../../common/Text/Text.Styled";
import {AiOutlineClose} from "react-icons/all";

function PostDetails (props) {

    const {
    } = props;

    const onClose = () => {
        photoActions.updateState({over: false})
    }

    return (
        <Container onClick={onClose}>
            <SContentContainer>

            </SContentContainer>
            <ButtonClose onClick={onClose}>
                <AiOutlineClose/>
            </ButtonClose>
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
    background: rgba(0,0,0,.05);
    padding: ${pxToRem(32)}${pxToRem(120)} ${pxToRem(100)};
    z-index: 100;
    cursor: zoom-out;
`
const SContentContainer = styled(ContentContainer)`
    position:absolute;
    top: ${pxToRem(32)};
    right: 0;
    left: 0;
    bottom: 0;
    display:flex;
    align-items:center;
    justify-content:center;
    width: 80%;
    height: 80%;
    background: #fff;
    border-radius: ${pxToRem(6)};
`;
const ButtonClose = styled.button`
    position: absolute;
    top: ${pxToRem(10)};
    left: ${pxToRem(10)};
    color: #fff;
    font-size: ${pxToRem(20)};
    width: ${pxToRem(30)};
    height: ${pxToRem(30)};
    z-index: 101;
    border: none;
    background: none;
`;
export default PostDetails;