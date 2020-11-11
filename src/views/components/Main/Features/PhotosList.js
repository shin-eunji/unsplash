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

    const [over, setOver] = useState(false)
    const [popup, setPopup] = useState(false)

    const mouseEnter = () => setOver(true);
    const mouseLeave = () => setOver(false);

    const openPopup = () => {
        setPopup(true)
        if (popup) {
            setPopup(false)
        }
    };

    useEffect(() => {
        appActions.updateState()
    }, [])


    return (
        <Container onClick={openPopup}>
            <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
            <img src={urls.small} alt={user.username}/>

                {
                    over &&
                    <PhotoOver id={id === id}
                               user={user}
                               links={links}
                    />
                }
                {
                    popup &&
                    <Popup id={id}
                           user={user}
                           urls={urls}
                           links={links}
                           popup={openPopup}
                    />
                }
            </div>
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