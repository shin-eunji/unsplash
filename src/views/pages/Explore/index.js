import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Title from "../../components/Text/Title/Title";
import {Index, subTitle} from "../../components/Text/Title";
import {ContentContainer} from "../../../common/Layout/Components.Styled";
import {pxToRem} from "../../../common/Text/Text.Styled";
import SubTitle from "../../components/Text/Title/SubTitle";
import PhotosList from "../../components/Main/Features/PhotosList";
import axios from "axios";
import Features from "../../components/Main/Features";
import CardList from "../../components/Card/CardList";
import {cardList} from "../../components/Card";

function Explore (props) {

    const {} = props;

    return (
        <Container>
            <SContentContainer>
                <Title data={Index.explore}/>

                <SubTitle data={subTitle.browse}/>
                <CardList data={cardList}/>

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