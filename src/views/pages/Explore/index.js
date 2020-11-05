import React from 'react';
import styled from 'styled-components';
import Title from "../../components/Text/Title/Title";

import {pxToRem} from "../../../common/Text/Text.Styled";
import {Index, subTitle} from "../../components/Text/Title";
import {ContentContainer} from "../../../common/Layout/Components.Styled";
import {category} from "../../components/Category/CategoryList";

import SubTitle from "../../components/Text/Title/SubTitle";
import Features from "../../components/Main/Features";
import Category from "../../components/Category/Category";
import Top from "../../components/Main/Header/Top";

function Explore(props) {

    const {} = props;

    return (
        <Container>
            <Header>
                <Top/>
            </Header>
            <SContentContainer>
                <Title data={Index.explore}/>

                <SubTitle data={subTitle.browse}/>
                <Category data={category}/>

                <SubTitle data={subTitle.free}/>
                <Features/>
            </SContentContainer>
        </Container>
    )
}

const Container = styled.div`
`
const Header = styled.div`
    position:fixed;
    top: 0;
    left: 0;
    display:flex;
    flex-direction:column;
    width: 100%;
    background: #fff;
    padding: 0 ${pxToRem(20)};
    z-index: 100;
`;
const SContentContainer = styled(ContentContainer)`
    position:relative;
    top: ${pxToRem(30)};
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    padding: 0 ${pxToRem(15)};
`;
export default Explore;