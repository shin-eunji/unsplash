import React from 'react';
import styled from 'styled-components';
import {pxToRem} from "../../../common/Text/Text.Styled";
import {MdPhoto} from "react-icons/all";

function TopicsCard (props) {

    const {
        image,
        tagName,
        thumbnail,
        description,
        counter,
    } = props;

    return (
        <Container>
            <img src={image} alt=""/>
            <Text>
                <Title>
                    <Tag>
                        <TagName>{tagName}</TagName>
                        <Thumbnail>{thumbnail}</Thumbnail>
                    </Tag>
                    <Profile></Profile>
                </Title>
                <Description>{description}</Description>
                <PhotoCounter>
                    <MdPhoto color={'#d1d1d1'}/>
                    <Counter>{counter}</Counter>
                </PhotoCounter>
            </Text>
        </Container>
    )
}

const Container = styled.div`
    flex: 1 0 30%;
    border-radius: ${pxToRem(8)};
    box-shadow: 0px 0px 10px 5px rgba(0,0,0,.05);
    margin: ${pxToRem(12)};
    img {
        width: 100%;
        height: ${pxToRem(130)};
        background: url('https://images.unsplash.com/reserve/nTr1589kTgyXCOdStCGm_MikaRuusunen.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=438&h=136.875&q=60');
        border-top-left-radius: ${pxToRem(8)};
        border-top-right-radius: ${pxToRem(8)};
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
export default TopicsCard;