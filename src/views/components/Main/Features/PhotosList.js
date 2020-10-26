import React from 'react';
import styled from 'styled-components';
import PhotoPopup from "./PhotoPopup";
import PhotoOver from "./PhotoOver";

import {useSelector} from "react-redux";
import {photoActions} from "../../../../redux/actionCreators";
import {pxToRem} from "../../../../common/Text/Text.Styled";

function PhotosList(props) {

    const {
        id,
        urls,
    } = props;

    const {over, openPopup} = useSelector(state => state.photo)

    const hover = () => photoActions.updateState({over: true})
    const popup = () => photoActions.updateState({openPopup: true})

    return (
        <Container key={id}
                   onClick={popup}
        >
            <img src={urls.small}/>
                {
                    hover &&
                    <PhotoOver />
                }
                {
                    openPopup &&
                    <PhotoPopup openPopup={popup}/>
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
    margin-bottom: ${pxToRem(10)};
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