import React from 'react';
import styled from 'styled-components';
import {Route, Switch} from "react-router-dom";

import Home from "./views/pages/home";
import Details from "./views/pages/Details/Details";
import Sign from "./views/pages/sign";
import SignIn from "./views/pages/sign/SignIn";
import SignUp from "./views/pages/sign/SignUp";


function Routes (props) {

    const {
    } = props;

    return (
        <Container>
            <Switch>
                <Route exact path={'/'} component={Home} />
                <Route path={'/photo'} component={Details} />

                <Route exact path={'/sign'} component={Sign} />
                <Route path={'/sign/login'} component={SignIn}/>
                <Route path={'/sign/join'} component={SignUp}/>
            </Switch>
        </Container>
    )
}

const Container = styled.div`
`
export default Routes;