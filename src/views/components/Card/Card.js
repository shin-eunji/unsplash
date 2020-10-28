import React, {useState} from 'react';
import styled from 'styled-components';
import {pxToRem} from "../../../common/Text/Text.Styled";
import PhotoOver from "../Main/Features/PhotoOver";

function Card (props) {

    const {
        image,
        title,
        description,
        links,
    } = props;

    const [ over, handleMouseover ] = useState(false)

    return (
        <Container>
            <Image onMouseEnter={() => handleMouseover(true)}
                   onMouseLeave={() => handleMouseover(false)}>
                <img src={image} alt='photo'/>
                <Title>{title}</Title>
                {
                    over && <Over/>
                }
            </Image>
            <Text>{description}</Text>
            <Tag>
                {
                    links.map(item => <TagName>{item}</TagName>)
                }
            </Tag>
        </Container>
    )
}

const Container = styled.div`
    position:relative;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    margin: 0 ${pxToRem(12)};
`
const Image = styled.div`
    position:relative;
    display:flex;
    align-items:center;
    justify-content:center;
    img {
        position:relative;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        border-radius: ${pxToRem(6)};
        z-index: 9;
        cursor: pointer;
        &::after {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0; 
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,.6);
            z-index: 10;
        }
    }   
`;
const Over = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0; 
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.4);
`;
const Title = styled.div`
    position: absolute;
    display:flex;
    align-items:center;
    justify-content:center;
    z-index: 10;
    color: #fff;
    font-size: ${pxToRem(18)};
    font-weight: 400;
`;
const Text = styled.div`
    color: #111;
    font-size: ${pxToRem(15)};
    font-weight: 400;
    line-height: 1.4;
    margin: ${pxToRem(16)} 0;
`;
const Tag = styled.div`
    display:flex;
    align-items:center;
    justify-content:flex-start;
`;
const TagName = styled.div`
    height: ${pxToRem(26)};
    color: #777;
    font-size: ${pxToRem(14)};
    font-weight: 400;
    line-height: .7;
    background: #eee;
    border-radius: ${pxToRem(2)};
    padding: ${pxToRem(8)};
    margin-right: ${pxToRem(10)};
`;
export default Card;