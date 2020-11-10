import React from 'react';
import styled from 'styled-components';
import {AiOutlineArrowDown, AiOutlinePlus, GoHeart, ImLocation, IoMdShareAlt, RiInformationFill} from "react-icons/all";
import {HeartButton, lineButton} from "../../../../common/Button/Button.Styled";
import {pxToRem} from "../../../../common/Text/Text.Styled";

function Photo (props) {

    const {
        id,
        urls,
    } = props;

    return (
        <Container>
            <PhotoImage>
                <img id={id} src={urls.small} alt="photo" />
            </PhotoImage>
            <Thumbnail>
                <Map>
                    <ImLocation/>
                    Jenny Lake, Wyoming, USA
                </Map>
                <ButtonGroup>
                    <IconButton>
                        <IoMdShareAlt/>
                        <span>Share</span>
                    </IconButton>
                    <IconButton>
                        <RiInformationFill/>
                        <span>Info</span>
                    </IconButton>
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
const IconButton = styled(lineButton)`
    cursor: pointer;
    span {
        margin-left: ${pxToRem(4)};
    }
`;
export default Photo;