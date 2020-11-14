import React, {useState} from 'react';
import styled from 'styled-components';
import Sponsorship from "../Photos/Sponsorship";
import PhotoOver from "../Photos/PhotoOver";
import Popup from "../Photos/Popup";
import {pxToRem} from "../../../common/Text/Text.Styled";

function ListItem(props) {

    const {
        urls,
        user,
        sponsorship,
        alt_description
    } = props;

    // const [over, setOver] = useState(false)
    // const [popup, setPopup] = useState(false)
    //
    // const mouseEnter = () => setOver(true);
    // const mouseLeave = () => setOver(false);
    //
    // const openPopup = () => {
    //     setPopup(true)
    //     if (popup) {
    //         setPopup(false)
    //     }
    // };

    return (
        <Container
            // onClick={openPopup}
        >
            <Content
                // onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}
            >
                <img src={urls.small} />

                {/*{*/}
                {/*    sponsorship && <Sponsorship user={user} sponsorship={sponsorship} />*/}

                {/*}*/}

                {/*{*/}
                {/*    over && <PhotoOver/>*/}
                {/*}*/}

                {/*{*/}
                {/*    popup &&*/}
                {/*    <Popup/>*/}
                {/*}*/}
            </Content>
        </Container>
    )
}

const Container = styled.div`
    margin-bottom: ${pxToRem(20)};
`
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
export default ListItem;