import React from 'react';
import styled from 'styled-components';
import Routes from "./Routes";

import Header from "./views/components/main/Header";
import PostDetails from "./views/components/main/Features/PostDetails";
import {photoActions} from "./redux/actionCreators";
import {useSelector} from "react-redux";

function App (props) {

    const {
    } = props;


    return (
        <Container>
            <Header/>

            <Routes/>
        </Container>
    )
}

const Container = styled.div`
`
export default App;