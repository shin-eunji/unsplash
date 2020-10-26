import React from 'react';
import styled from 'styled-components';

import {AiOutlineArrowDown, AiOutlinePlus, AiTwotoneHeart} from "react-icons/all";
import {pxToRem} from "../../../../common/Text/Text.Styled";

function PhotoOver (props) {

    const {
        user
    } = props;

    return (
        <Container>
            <ButtonGroup>
                <Button>
                    <AiTwotoneHeart/>
                </Button>
                <Button>
                    <AiOutlinePlus/>
                </Button>
            </ButtonGroup>
            <ProfileGroup>
                <Profile>
                    <ProfileImage/>
                    <UserName>
                        Brain
                    </UserName>
                </Profile>
                <DownloadButton>
                    <AiOutlineArrowDown/>
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
    background: #fff;
    border: 1px solid #aaa;
    border-radius: ${pxToRem(5)};
    color: #767676;
    line-height: 0;
    margin-left: ${pxToRem(10)};
    
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
    width: ${pxToRem(20)};
    height: ${pxToRem(20)};
    border: 1px solid #eee;
    border-radius: ${pxToRem(30)};
    background: #fff;
    margin-right: ${pxToRem(10)};
`;
const UserName = styled.div`
    flex: 1;
    color: #fff;
    text-shadow: 0 1px 8px rgba(0,0,0,.1);
    font-size: ${pxToRem(15)};
    font-weight: 400;
`;
const DownloadButton = styled.button`
    width: ${pxToRem(40)};
    height: ${pxToRem(32)};
    background: #fff;
    border: 1px solid #aaa;
    border-radius: ${pxToRem(5)};
    line-height: 0;
    color: #767676;
`;
export default PhotoOver;