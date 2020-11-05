import React from 'react';
import styled from 'styled-components';
import {pxToRem} from "../../../common/Text/Text.Styled";
import {MdPhoto} from "react-icons/all";

function TopicsCard (props) {

    const {
        title,
        description,
        total_photos,
        cover_photo,
        status,
    } = props;

    const counter = num => (num/1000).toFixed(0) + 'K';


    return (
        <Container>
            <Preview>
                <img src={cover_photo.urls.small} height={'180'}/>
            </Preview>
            <Text>
                <Title>
                    <Tag>
                        <TagName>{title}</TagName>
                        <Thumbnail>by Unsplash</Thumbnail>
                    </Tag>
                    <Profile></Profile>
                </Title>
                <Description>{description}</Description>
                <PhotoCounter>
                    <MdPhoto color={'#d1d1d1'}/>
                    <Counter>{total_photos} contributions</Counter>
                    {
                        total_photos == counter
                    }
                </PhotoCounter>
            </Text>
            <Status>
                <span></span>
                {status}
            </Status>
        </Container>
    )
}

const Container = styled.div`
    position:relative;
    flex: 1 0 30%;
    border-radius: ${pxToRem(8)};
    box-shadow: 0px 0px 10px 5px rgba(0,0,0,.05);
    margin: ${pxToRem(12)};
`;
const Preview = styled.div`
    position:relative;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: ${pxToRem(124)};
    border-top-left-radius: ${pxToRem(8)};
    border-top-right-radius: ${pxToRem(8)};
    overflow:hidden;
    img {
        position: absolute;
        top: -60%;
        right: 0;
        left: 0;
        width: 100%;
        height: auto;
        z-index: 9;
    }
    &:before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: rgba(0,0,0,.2);
        z-index: 10;
    }
`;
const Text = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    padding: ${pxToRem(24)} ${pxToRem(32)};
`;
const Title = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: ${pxToRem(16)};
`;
const Tag = styled.div`
    display:flex;
    flex-direction:column;
`;
const TagName = styled.div`
    color: #111;
    font-size: ${pxToRem(18)};
    font-weight: 700;
    margin-bottom: ${pxToRem(10)};
`;
const Thumbnail = styled.div`
    color: #767676;
    font-size: ${pxToRem(15)};
    font-weight: 400;
`;
const Profile = styled.div`
    width: ${pxToRem(64)};
    height: ${pxToRem(64)};
    border-radius: ${pxToRem(64)};
    border: 1px solid #eee;
    background: url('https://images.unsplash.com/profile-1544707963613-16baf868f301?auto=format&fit=crop&w=64&h=64&q=60&crop=faces&bg=fff');
`;
const Description = styled.div`
    display: -webkit-box;
    width: 100%;
    height: ${pxToRem(40)};
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2; 
    -webkit-box-orient: vertical;
    color: #111;
    font-size: ${pxToRem(15)};
    font-weight: 400;
    line-height: 1.5;
    margin-bottom: ${pxToRem(28)};
    
`;
const PhotoCounter = styled.div`
    display:flex;
    align-items:center;
    justify-content:flex-start;
`;
const Counter = styled.div`
    margin-left: ${pxToRem(16)};
    color: #111;
    font-size: ${pxToRem(14)};
    font-weight: 500;
`;
const Status = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    position: absolute;
    top: ${pxToRem(16)};
    left: ${pxToRem(16)};
    width: ${pxToRem(66)};
    height: ${pxToRem(24)};
    border-radius: 3px;
    background-color: #c2ebd3;
    --circle-color: #3cb46e;
    color: #111;
    font-size: ${pxToRem(14)};
    font-weight: 400;  
    z-index: 30;
    span {
        width: ${pxToRem(8)};
        height: ${pxToRem(8)};
        border-radius: 100%;
        background-color: var(--circle-color);
        display: inline-block;
        margin-right: ${pxToRem(6)};
    }
`;
export default TopicsCard;