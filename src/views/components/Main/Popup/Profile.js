import React from 'react';
import styled from 'styled-components';
import {Button, HeartButtonZ} from "../../../../common/Button/Button.Styled";
import {AiOutlinePlus, GoHeart} from "react-icons/all";
import {pxToRem} from "../../../../common/Text/Text.Styled";
import {navigate} from "../../../../lib/History";

function Profile (props) {

    const {} = props;

    return (
        <Container>
            <ContentContainer>
                <ProfileGroup>
                    <ProfileImage/>
                    <UserName>
                        Brain
                    </UserName>
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
const ProfileImage = styled.div`
    width: ${pxToRem(32)};
    height: ${pxToRem(32)};
    border: 1px solid #eee;
    border-radius: ${pxToRem(30)};
    background: #fff;
    margin-right: ${pxToRem(10)};
`;
const UserName = styled.div`
    flex: 1;
    color: #000;
    text-shadow: 0 1px 8px rgba(0,0,0,.1);
    font-size: ${pxToRem(15)};
    font-weight: 400;
`;
const ButtonGroup = styled.div`
    display:flex;
    align-items:center;
    justify-self: flex-end;
`;
const IconButton = styled.button`
    display:flex;
    align-items:center;
    justify-content:center;
    width: 40px;
    height: ${pxToRem(32)};
    border-radius: ${pxToRem(5)};
    line-height: 0;
    margin-right: ${pxToRem(10)};
    color: #767676;
    background-color: #fff;
    border: 1px solid #d1d1d1;
    cursor: pointer;
    &:hover {
        color: #111;
        border-color: #767676;
    }
`;
const DownloadButton = styled(Button)`
    
`;
export default Profile;