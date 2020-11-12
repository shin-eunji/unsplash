import React from 'react';
import styled from 'styled-components';
import {AiOutlineArrowDown, AiOutlinePlus, GoHeart, ImLocation, IoMdShareAlt, RiInformationFill} from "react-icons/all";
import {HeartButton, lineButton} from "../../../../common/Button/Button.Styled";
import {pxToRem} from "../../../../common/Text/Text.Styled";

function Photo (props) {

    const {
        urls,
        alt_description,
    } = props;

    return (
        <Container>
            <PhotoImage>
                <img src={urls.small} alt={alt_description} />
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
    flex: 1;
    flex-direction:column;
    width: 100%;
    justify-content:center;
`
const PhotoImage = styled.div`
    flex: 1;
    display:flex;
    align-items:center;
    justify-content:center;
    padding: ${pxToRem(20)};
    img {
        width: auto;
        height: 100%;
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