import React from 'react';
import styled from 'styled-components';
import {pxToRem} from "../../../common/Text/Text.Styled";
import {Color} from "../../../common/Color/Color.Styled";

function Sponsorship (props) {

    const {
        user,
        sponsorship,
    } = props;
    
    console.log("user", user);

    return (
        <Container>
            <Profile>
                <Image>
                    <img src={user.profile_image.small} alt="profile"/>

                </Image>
                <Text>
                    <Name>{sponsorship.sponsor.name}</Name>
                    <Tag>{sponsorship.tagline}</Tag>
                </Text>
            </Profile>
        </Container>
    )
}

const Container = styled.div`
    position:absolute;
    left: ${pxToRem(20)};
    bottom: ${pxToRem(20)};
    z-index: 10;
`
const Profile = styled.div`
    width: 100%;
    display:flex;
    align-items:center;
    justify-content:flex-start;
    background: none;
`;
const Image = styled.div`
    width: ${pxToRem(32)};
    height: ${pxToRem(32)};
    border-radius: ${pxToRem(40)};
    overflow:hidden;
`;
const Text = styled.div`
    display:flex;
    flex: 1;
    width: 100%;
    flex-direction:column;
    margin-left: ${pxToRem(10)};
`;
const Name = styled.div`
    text-shadow: 0 1px 8px rgba(0,0,0,.1);
    color: ${Color.WHITE};
    font-size: ${pxToRem(15)};
    line-height: 1.4;
`;
const Tag = styled.div`
    color: #000;  
    font-size: ${pxToRem(11)};
    line-height: 1.4;
`;
export default Sponsorship;