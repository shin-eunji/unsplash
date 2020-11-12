import React, {useEffect} from 'react';
import styled from 'styled-components';
import Routes from "./Routes";
import {HISTORY} from './lib/History'
import {appActions} from "./redux/actionCreators";
import {pxToRem} from "./common/Text/Text.Styled";

function App (props) {

    const {
    } = props;

    useEffect(() => {
        appActions.updateState()
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
    position:relative;
    top: ${pxToRem(112)};
`
export default App;