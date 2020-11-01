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

function Explore (props) {

    const {} = props;

    return (
        <Container>
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
    position:relative;
    top: ${pxToRem(112)};
`
const SContentContainer = styled(ContentContainer)`
    padding: ${pxToRem(60)} ${pxToRem(15)};
`;
export default Explore;