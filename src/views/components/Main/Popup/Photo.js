import React from 'react';
import styled from 'styled-components';
import {AiOutlineArrowDown, AiOutlinePlus, GoHeart} from "react-icons/all";
import {HeartButton} from "../../../../common/Button/Button.Styled";

function Photo (props) {

    const {
        urls
    } = props;

    return (
        <Container>
            <img src={urls.small} alt="photo"/>
            <Map>
                
            </Map>
            <ButtonGroup>
                
            </ButtonGroup>
        </Container>
    )
}

const Container = styled.div`
`
const Map = styled.div`
    
`;
const ButtonGroup = styled.div`
    
`;
export default Photo;