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
                <Route path={'/sign/login'} component={SignIn}/>
                <Route path={'/sign/join'} component={SignUp}/>
            </Switch>
        </Container>
    )
}

const Container = styled.div`
`
export default Sign;