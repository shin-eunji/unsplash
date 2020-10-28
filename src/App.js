import React from 'react';
import styled from 'styled-components';
import Routes from "./Routes";

import Header from "./views/components/Main/Header";
import Footer from "./views/components/Main/Footer/Footer";

function App (props) {

    const {
    } = props;


    return (
        <Container>
            <Header />

            <Routes />

            <Footer/>
        </Container>
    )
}

const Container = styled.div`
`
export default App;