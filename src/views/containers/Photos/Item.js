import React, {useState} from 'react';
import styled from 'styled-components';
import Popup from "../../components/Photos/Popup";
import {pxToRem} from "../../../common/Text/Text.Styled";
import Sponsorship from "../../components/Photos/Sponsorship";
import PhotoOver from "../../components/Photos/PhotoOver";

function Item(props) {

    const {
        alt_description,
        sponsorship,
        user,
        urls,
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

    return (
        <Container onClick={openPopup}>
            <Content onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                <img src={urls.small} alt={alt_description}/>

                {
                    sponsorship && <Sponsorship user={user} sponsorship={sponsorship} />
                }

                {
                    over && <PhotoOver user={user} sponsorship={sponsorship}/>
                }

                {
                    popup && <Popup urls={urls} user={user} sponsorship={sponsorship} alt_description={alt_description}/>
                }
            </Content>
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
    cursor: zoom-in;
    margin-bottom: ${pxToRem(20)};
`;
const Content = styled.div`
    position:relative;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
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

export default Item;