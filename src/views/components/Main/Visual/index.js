import React from 'react';
import styled from 'styled-components';
import SearchForm from "../../SearchForm";
import {Color} from "../../../../common/Color/Color.Styled";
import {pxToRem} from "../../../../common/Text/Text.Styled";
import Thumbnail from "./Thumbnail";
import Tag from "./Tag";


function Visual(props) {

    const {} = props;

    return (
        <Container>
            <SContentContainer>
                <Text>
                    <Title>Unsplash</Title>
                    <Description>The internet’s source of <a href="#">freely-usable images.</a><br/>
                        Powered by creators everywhere.</Description>
                </Text>

                <SearchContainer>
                    <SearchForm/>
                </SearchContainer>

                <Tag/>
            </SContentContainer>
            <Thumbnail/>
        </Container>
    )
}

const Container = styled.div`
    position:relative;
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content:center;
    height: ${pxToRem(600)};
    margin-top: ${pxToRem(112)};
    background: url("https://source.unsplash.com/category/nature/1600x900") 50% 70% / cover no-repeat;
    margin-bottom: ${pxToRem(48)};
    &:before {
        content: '';
        position:absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background: rgba(0,0,0,.25);
        z-index: 1;
    }
`
const SContentContainer = styled.div`
    position:relative;
    width: ${pxToRem(864)};
    margin: 0 auto;
    z-index: 10;
`;
const Text = styled.div`
    display:flex;
    flex-direction:column;
    z-index: 2;
    color: ${Color.WHITE};
`;
const Title = styled.div`
    font-size: ${pxToRem(48)};
    font-weight: 800;
    z-index: 100;
`;
const Description = styled.div`
    font-size: ${pxToRem(18)};
    font-weight: 300;
    margin: ${pxToRem(20)} 0;
    line-height: 1.4;
    a {
        color: #fff;
        font-weight: 300;
        opacity: .8;
        text-decoration: underline;
    }
`;
const SearchContainer = styled.div`
    display:flex;
    flex-wrap:wrap;
    flex-direction:row;
    align-items: center;
    background: #fff;
    border-radius: ${pxToRem(5)};
    padding: ${pxToRem(6)} ${pxToRem(10)};
`;
export default Visual;