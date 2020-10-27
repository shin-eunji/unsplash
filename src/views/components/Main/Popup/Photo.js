import React from 'react';
import styled from 'styled-components';
import {AiOutlineArrowDown, AiOutlinePlus, GoHeart, ImLocation, IoMdShareAlt, RiInformationFill} from "react-icons/all";
import {HeartButton} from "../../../../common/Button/Button.Styled";

function Photo (props) {

    const {
        urls
    } = props;

    return (
        <Container>
            <PhotoImage>
                <img src={urls.small} alt="photo" />
            </PhotoImage>
            <Thumbnail>
                <Map>
                    <ImLocation/>
                    Jenny Lake, Wyoming, USA
                </Map>
                <ButtonGroup>
                    <PhotoButton>
                        <IoMdShareAlt/>
                        Share
                    </PhotoButton>
                    <PhotoButton>
                        <RiInformationFill/>
                        Info
                    </PhotoButton>
                </ButtonGroup>
            </Thumbnail>
        </Container>
    )
}

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width: 100%;
`
const PhotoImage = styled.div`
    img {
        width: auto;
    }
`;
const Thumbnail = styled.div`
    width: 100%;
    display:flex;
    align-items:center;
    justify-content: space-between;
`;
const Map = styled.div`
    
`;
const ButtonGroup = styled.div`
    display:flex;
    align-items:center;
    justify-content: flex-end;
`;
const PhotoButton = styled.button`
    display:flex;
    align-items:center;
    justify-content:center;
`;
export default Photo;