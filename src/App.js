import React, {useEffect} from 'react';
import styled from 'styled-components';
import Routes from "./Routes";
import {HISTORY} from './lib/History'

function App (props) {

    const {
    } = props;

    useEffect(() => {
        HISTORY.listen((location, action) => {
            if(action === 'PUSH') {
                window.scrollTo(0, 0)
            }
        })
    },[])

    return (
        <Container>
            <Routes />
        </Container>
    )
}

const Container = styled.div`
`
export default App;