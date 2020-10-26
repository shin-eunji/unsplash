import React from 'react';
import styled from 'styled-components';
import {Switch, Route, Redirect} from "react-router-dom";

import SignIn from "./SignIn";
import SignUp from "./SignUp";

function Sign (props) {

    const {} = props;

    return (
        <Container>
            <Switch>
                <Route path={'/Sign/login'} component={SignIn}/>
                <Route path={'/Sign/join'} component={SignUp}/>
            </Switch>
        </Container>
    )
}

const Container = styled.div`
`
export default Sign;