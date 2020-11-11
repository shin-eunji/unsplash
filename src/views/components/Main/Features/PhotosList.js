import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import PhotoPopup from "../Popup";

import {useSelector} from "react-redux";
import {appActions, photoActions} from "../../../../redux/actionCreators";
import {pxToRem} from "../../../../common/Text/Text.Styled";
import PhotoOver from "./PhotoOver";
import Popup from "../Popup";

function PhotosList(props) {

    const {
        id,
        urls,
        user,
        links,
    } = props;

    const {popup} = useSelector(state => state.app);
    const {over} = useSelector(state => state.app);

    const openPopup = () => {
        appActions.updateState({popup: true})
        if (popup) {
            appActions.updateState({popup: false})
        }

        console.log("Popup open");
    };

    useEffect(() => {
        appActions.updateState()
    }, [])

    const mouseEnter = () => appActions.updateState({over: true});
    const mouseLeave = () => appActions.updateState({over: false});

    return (
        <Container onClick={openPopup}
                   onMouseEnter={mouseEnter}
                   onMouseLeave={mouseLeave}
        >
            {
                over &&
                <PhotoOver id={id === id}
                           user={user}
                           links={links}
                />
            }
            <img src={urls.small} alt={user.username}/>

            {
                popup &&
                <Popup id={id}
                       user={user}
                       urls={urls}
                       links={links}
                       popup={openPopup}
                />
            }
        </Container>

    )
}

const Container = styled.div`
    position:relative;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    display: block;
    width: 100%;
    color: #60544D;
    height: auto;
    margin-bottom: ${pxToRem(20)};
    cursor: zoom-in;
    img {
        position:relative;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        display: block;
        width: 100%;
        height: auto;
        list-style: none;
        object-fit: cover;
    }
`;

export default PhotosList;