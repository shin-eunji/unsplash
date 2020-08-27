import React from 'react';
import styled from 'styled-components';

function PopupMenu (props) {

    const {
        handleMenu
    } = props;

    return (
        <Container onClick={() => {
            handleMenu(false)
        }}>
            PopupMenu
        </Container>
    )
}

const Container = styled.div`
    position: absolute;
    top: 10px;
    right: 100px;
    width: 100px;
    height: 100px;
    background-color: #000;
    z-index: 100;
`
export default PopupMenu;