import React from 'react';
import styled from 'styled-components';
import {Index, subTitle} from "../../components/Text/Title";
import Title from "../../components/Text/Title/Title";
import {pxToRem} from "../../../common/Text/Text.Styled";
import {ContentContainer} from "../../../common/Layout/Components.Styled";
import SubTitle from "../../components/Text/Title/SubTitle";
import TopicsCard from "./TopicsCard";
import {topics} from "./TopicsList";

function Topics (props) {

    const {} = props;

    return (
        <Container>
            <SContentContainer>
                <Title data={Index.topics} />
                <SubTitle data={subTitle.all} />

                <List>
                    {
                        topics.map((item, index) => <TopicsCard key={index} {...item}/>)
                    }
                </List>
            </SContentContainer>
        </Container>
    )
}

const Container = styled.div`
    position:relative;
    top: ${pxToRem(112)};
`
const SContentContainer = styled(ContentContainer)`
    
`;
const List = styled.div`
    display:flex;
    align-items:center;
    flex-wrap: wrap;
    justify-content: space-between;
    flex: 1 0 30%;
`;
export default Topics;