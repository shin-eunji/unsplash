import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {pxToRem} from "../../../common/Text/Text.Styled";
import {MdPhoto} from "react-icons/all";
import {ContentContainer} from "../../../common/Layout/Components.Styled";
import {useSelector} from "react-redux";
import {navigate} from "../../../lib/History";

function Item (props) {

    const {
        title,
        slug,
        owners,
        status,
        description,
        total,
        cover_photo,
        featured
    } = props;
    
    return (
        <Container onClick={() => navigate(`/t/${slug}`)}>
            <Preview>
                <img src={cover_photo.urls.small} />
            </Preview>
            <Text>
                <Title>
                    <Tag>
                        <TagName>{title}</TagName>
                        <Thumbnail>by
                            {
                                owners.map((item) => <span>{item.name}</span>)
                            }
                        </Thumbnail>
                    </Tag>
                    <Profile>
                        {
                            owners.map((item) => <img src={item.profile_image.medium} />)
                        }
                    </Profile>
                </Title>
                <Description>{description}</Description>
                <PhotoCounter>
                    <MdPhoto color={'#d1d1d1'}/>
                    <Counter>{total} contributions</Counter>
                </PhotoCounter>
            </Text>
            <Status sort={featured}>
                <Icon sort={featured}></Icon>
                {status}
            </Status>
        </Container>
    )
}

const Container = styled.div`
    position:relative;
    border-radius: ${pxToRem(8)};
    box-shadow: 0px 0px 10px 5px rgba(0,0,0,.05);
    margin: ${pxToRem(12)};
    width: 30%;
    cursor: pointer;
    &:hover {
        box-shadow: 0 4px 24px rgba(0,0,0,.1);
    }
`
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
    span {
        margin-left: ${pxToRem(6)};
    }
`;
const Profile = styled.div`
    width: ${pxToRem(64)};
    height: ${pxToRem(64)};
    border-radius: ${pxToRem(64)};
    border: 1px solid #eee;
    overflow:hidden;
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
    color: #111;
    font-size: ${pxToRem(14)};
    font-weight: 500;  
    z-index: 30;
    text-transform: capitalize;
    ${props => props.sort === true && `
        background: #c2ebd3;
    `}  
    ${props => props.sort === false && `
        background: #f6cbc1;
    `}  
`;
const Icon = styled.div`
    width: ${pxToRem(8)};
    height: ${pxToRem(8)};
    display: inline-block;
    border-radius: ${pxToRem(10)};
    margin-right: ${pxToRem(6)};
    ${props => props.sort === true && `
        background: #3cb46e;
    `}  
    ${props => props.sort === false && `
        background: #e25c3d;
    `}  
`;
export default Item;