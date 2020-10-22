import React from 'react';
import styled from 'styled-components';
import Search from "../../Search";
import {Color} from "../../../../common/Color/Color.Styled";
import {pxToRem} from "../../../../common/Text/Text.Styled";


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
                    <Search/>
                </SearchContainer>

                <Tag>
                    <TagTitle>Trending:</TagTitle>
                    <TagItem/>
                </Tag>
            </SContentContainer>
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
    background: url("https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1467&q=80") 50% 70% / cover no-repeat;
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
const Tag = styled.div`
    font-size: ${pxToRem(15)};
    font-weight: 600;
    display:flex;
    flex-direction:row;
    align-items:center;
    margin: ${pxToRem(10)} 0;
    color: ${Color.WHITE};
`;
const TagItem = styled.div`
    font-weight: 600;
    margin-left: 3px;
`;
const TagTitle = styled.div`
    
`;
export default Visual;