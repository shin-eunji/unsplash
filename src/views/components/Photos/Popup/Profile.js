import React from 'react';
import styled from 'styled-components';
import {Button, HeartButtonZ, lineButton} from "../../../../common/Button/Button.Styled";
import {AiOutlinePlus, GoHeart} from "react-icons/all";
import {pxToRem} from "../../../../common/Text/Text.Styled";
import {navigate} from "../../../../lib/History";

function Profile (props) {

    const {
        user,
        id
    } = props;

    return (
        <Container>
            <ContentContainer>
                <ProfileGroup>
                    <Image>
                        <img id={id} src={user.profile_image.small} alt="profile"/>
                    </Image>
                    <Name>
                        <User>{user.name}</User>    
                        <UserName>{user.username}</UserName>    
                    </Name>
                </ProfileGroup>

                <ButtonGroup>
                    <IconButton>
                        <GoHeart/>
                    </IconButton>
                    <IconButton>
                        <AiOutlinePlus/>
                    </IconButton>
                    <DownloadButton sort={'green'} size={'small'}>Download free</DownloadButton>
                </ButtonGroup>
            </ContentContainer>
        </Container>
    )
}

const Container = styled.div`
    position:relative;
    width: 100%;
    height: ${pxToRem(50)};
    background: #fff;
    z-index: 20;
`
const ContentContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
    margin: ${pxToRem(10)};
    
`;
const ProfileGroup = styled.div`
    display:flex;
    align-items:center;
    justify-content:flex-start;
`;
const Image = styled.div`
    width: ${pxToRem(32)};
    height: ${pxToRem(32)};
    background: #fff;
    margin-right: ${pxToRem(10)};
    img {
        border-radius: ${pxToRem(300)};
    
    }
`;
const Name = styled.div`
    display:flex;
    align-items:center;
    flex: 1;
`;
const User = styled.div`
    color: #000;
    text-shadow: 0 1px 8px rgba(0,0,0,.1);
    font-size: ${pxToRem(15)};
    font-weight: 400;
    
`;
const UserName = styled.div`
    
`;
const ButtonGroup = styled.div`
    display:flex;
    align-items:center;
    justify-self: flex-end;
`;
const IconButton = styled(lineButton)`
    
`;
const DownloadButton = styled(Button)`
    
`;
export default Profile;