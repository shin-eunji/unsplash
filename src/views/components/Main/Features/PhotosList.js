import React, {useState} from 'react';
import styled from 'styled-components';
import PhotoPopup from "../Popup";

import {useSelector} from "react-redux";
import {photoActions} from "../../../../redux/actionCreators";
import {pxToRem} from "../../../../common/Text/Text.Styled";
import PhotoOver from "./PhotoOver";

function PhotosList(props) {

    const {
        id,
        urls,
    } = props;

    const [ over, handleMouseover ] = useState(false)

    const { photoDetail } = useSelector(state => state.photo);
    const openPopup = () => photoActions.updateState({photoDetail: true});

    return (
        <Container key={id}
                   onClick={openPopup}
                   onMouseEnter={() => handleMouseover(true)}
                   onMouseLeave={() => handleMouseover(false)}
        >
            {
                photoDetail &&
                <PhotoPopup photoDetail={openPopup} urls={urls}/>
            }
            {
                over && <PhotoOver/>
            }
            <img src={urls.small} />
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
    &:hover::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(rgba(0,0,0,.15), rgba(0,0,0,0), rgba(0,0,0,.2));
        z-index: 1;
    }
`;

const InfoBox = styled.div`
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to top, rgba(0,0,0,.3), rgba(0,0,0,.0), rgba(0,0,0,.3));
      display:flex;
      flex-direction:row;
      align-items: flex-end;
      justify-content:flex-start;
`;

export default PhotosList;