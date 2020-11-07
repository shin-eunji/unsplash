import React from 'react';
import styled from 'styled-components';

import {AiOutlineArrowDown, AiOutlinePlus, GoHeart} from "react-icons/all";
import {pxToRem} from "../../../../common/Text/Text.Styled";
import {photoActions} from "../../../../redux/actionCreators";
import {navigate} from "../../../../lib/History";

function PhotoOver (props) {

    const {
        id,
        user,
        links,
    } = props;


    return (
        <Container id={id}>
            <ButtonGroup>
                <Button>
                    <GoHeart/>
                </Button>
                <Button>
                    <AiOutlinePlus/>
                </Button>
            </ButtonGroup>
            <ProfileGroup>
                <Profile>
                    <ProfileImage>
                        <img src={user.profile_image.small} alt="profile"/>

                    </ProfileImage>
                    <UserName>
                        {user.name}
                    </UserName>
                </Profile>
                <DownloadButton href={links.html}>
                    <AiOutlineArrowDown />
                </DownloadButton>
            </ProfileGroup>
        </Container>
    )
}

const Container = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    display:flex;
    flex-direction:column;
    justify-content: space-between;
    padding: ${pxToRem(20)};
    z-index: 10;
`
const ButtonGroup = styled.div`
    display:flex;
    align-items:center;
    justify-content: flex-end;
`;
const Button = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width: ${pxToRem(40)};
    height: ${pxToRem(32)};
    background: rgba(255,255,255,.9);
    border-radius: ${pxToRem(5)};
    color: #767676;
    line-height: 0;
    margin-left: ${pxToRem(10)};
    border: none;
    cursor: pointer;
    &:hover {
          background: #fff;
          color: #000;
    }
`;
const ProfileGroup = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
`;
const Profile = styled.div`
    display:flex;
    align-items:center;
    justify-content:flex-start; 
`;
const ProfileImage = styled.div`
    width: ${pxToRem(32)};
    height: ${pxToRem(32)};
    border-radius: ${pxToRem(30)};
    background: #fff;
    margin-right: ${pxToRem(10)};
    overflow: hidden;
`;
const UserName = styled.div`
    flex: 1;
    color: #fff;
    text-shadow: 0 1px 8px rgba(0,0,0,.1);
    font-size: ${pxToRem(15)};
    font-weight: 400;
`;
const DownloadButton = styled.a`
    width: ${pxToRem(40)};
    height: ${pxToRem(32)};
    background: rgba(255,255,255,.9);
    border-radius: ${pxToRem(5)};
    line-height: 0;
    color: #767676;
    border: none;
    cursor: pointer;
    &:hover {
          background: #fff;
          color: #000;
    }
`;
export default PhotoOver;