import React from 'react';
import styled from 'styled-components';

import {AiOutlineArrowDown, AiOutlinePlus, GoHeart} from "react-icons/all";
import {pxToRem} from "../../../common/Text/Text.Styled";
import {Color} from "../../../common/Color/Color.Styled";

function PhotoOver (props) {

    const {
        user,
        sponsorship
    } = props;


    return (
        <Container>
            <Contents>
                <Header>
                    {
                        sponsorship && <Sponsor>Sponsored</Sponsor>
                    }

                    <ButtonGroup>
                        <Button><GoHeart/></Button>
                        <Button><AiOutlinePlus/></Button>
                    </ButtonGroup>
                </Header>

                <Footer>
                    <Profile>
                        <ProfileImage>
                            <img src={user.profile_image.small} alt="profile"/>

                        </ProfileImage>
                        <UserName>
                            {user.name}
                        </UserName>
                    </Profile>
                    <DownloadButton><AiOutlineArrowDown /></DownloadButton>
                </Footer>
            </Contents>
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
    z-index: 10;
    &::after {
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
`
const Contents = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: ${pxToRem(20)};
`;
const Header = styled.div`
    display:flex;
    align-items:center;
    justify-content: flex-end;
    width: 100%;
`;
const Sponsor = styled.div`
    color: ${Color.WHITE};
    font-size: ${pxToRem(11)};
    letter-spacing: .02em;
    text-shadow: 0 1px 8px rgba(0,0,0,.1);
`;
const ButtonGroup = styled.div`
    display:flex;
    flex: 1;
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
const Footer = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
    width: 100%;
`;
const Profile = styled.div`
    display:flex;
    flex: 1;
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
    display:flex;
    align-items:center;
    justify-content:center;
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