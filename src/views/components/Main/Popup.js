import React from 'react';
import styled from 'styled-components';

import { AiOutlineClose } from "react-icons/ai";

function Popup (props) {

    const {
        onClose
    } = props;

    return (
        <Container onClick={() => {
            onClose(false)
        }}>
            <PopupBox onClick={false}>
            </PopupBox>
            <Close onClick={() => {
                onClose(false)
            }}>
                <AiOutlineClose/>
            </Close>
        </Container>
    )
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,.5);
  display:flex;
  height: 3000px;
  justify-content:center;
  z-index: 100;
  cursor: zoom-out;
`
const PopupBox = styled.div`
    margin-top: 30px;
    align-items:center;
    background-color: #fff;
    border-radius: 5px;
    width: 90%;
    height: 300px;
    cursor: default;
    z-index: 101;
`;
const Close = styled.div`
    position: absolute;
    top: 10px;
    left: 10px;
    color: #fff;
    font-size: 24px;
    font-weight:bold;
    cursor: pointer;
`;
export default Popup;