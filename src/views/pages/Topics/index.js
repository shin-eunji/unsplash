import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {Index, subTitle} from "../../components/Text/Title";
import Title from "../../components/Text/Title/Title";
import {pxToRem} from "../../../common/Text/Text.Styled";
import {ContentContainer} from "../../../common/Layout/Components.Styled";
import SubTitle from "../../components/Text/Title/SubTitle";
import TopicsCard from "./TopicsCard";
// import {topics} from "./TopicsList";
import axios from "axios";
import Header from "../../components/Main/Header";
import Footer from "../../components/Main/Footer";
// import {useSelector} from "react-redux";

function Topics (props) {

    const {} = props;

    const [topics, setTopics] = useState([])

    useEffect(() => {
        axios.get('https://api.unsplash.com/topics/?client_id=t_jbP7JejOj1keyZ7UiEl1BZcoPHG3vxmy3rPUGhVRc')
            .then ((res) => {
                console.log("res", res);
                const data = res.data;
                setTopics(data)
            })
    }, [])

    return (
        <Container>
            <Header/>
            <SContentContainer>
                <Title data={Index.topics} />
                <SubTitle data={subTitle.all} />

                <List>
                    {
                        topics.map((data, index) => <TopicsCard key={index} {...data}/>).slice(0, 9)
                    }
                </List>
            </SContentContainer>
            <Footer/>
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