import React, {useState} from 'react';
import styled from 'styled-components';

import {useSelector} from "react-redux";
import {appActions, photoActions} from "../../../../redux/actionCreators";
import {pxToRem} from "../../../../common/Text/Text.Styled";
import PhotoOver from "./PhotoOver";
import Popup from "../Popup";

function PhotosList(props) {

    const {
        id,
        user,
        urls,
        links,
    } = props;

    const {show} = useSelector(state => state.app, id);

    const {photoDetails} = useSelector(state => state.app);

    const handlePopup = () => appActions.updateState({photoDetails: true})


    return (
        <Container key={id}
                   onClick={handlePopup}
                   onMouseEnter={() => appActions.updateState({show: true})}
                   onMouseLeave={() => appActions.updateState({show: false})}
        >

            {
                show &&
                <PhotoOver id={id === id}
                           user={user}
                           links={links}
                />
            }

            <img src={urls.small}/>

            {
                photoDetails &&
                <Popup photoDetails={handlePopup}
                            id={id}
                            user={user}
                            urls={urls}
                            links={links}
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