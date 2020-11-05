import React from 'react';
import styled from 'styled-components';

import Header from "../../components/Main/Header";
import Visual from "../../components/Main/Visual";
import Features from "../../components/Main/Features";
import Footer from "../../components/Main/Footer";
import {useSelector} from "react-redux";
import PhotoOver from "../../components/Main/Features/PhotoOver";

function Home (props) {

    const {
    } = props;



    const {over} = useSelector(state => state.photo)

    return (
        <Container>
            <Header />
            <Visual />
            <Features/>
            <Footer/>

            {
                over && <PhotoOver />
            }
        </Container>
    )
}

const Container = styled.div`
    position:relative;
    top: 0;
    right: 0;
    height: 100%;
`
export default Home;