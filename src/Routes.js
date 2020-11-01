import React, {useState} from 'react';
import styled from 'styled-components';
import {Route, Switch} from "react-router-dom";

import Home from "./views/pages/Home";
import Details from "./views/pages/Details/Details";

import Sign from "./views/pages/Sign";
import SignIn from "./views/pages/Sign/SignIn";
import SignUp from "./views/pages/Sign/SignUp";

import Explore from "./views/pages/Explore";
import Topics from "./views/pages/Topics";


function Routes (props) {

    const {
    } = props;


    return (
        <Container>
            <Switch>
                <Route exact path={'/'} component={Home} />
                <Route exact path={`/photos`} component={Details} />
                <Route exact path={'/explore'} component={Explore} />
                <Route exact path={'/topics'} component={Topics} />


                <Route exact path={'/Sign'} component={Sign} />
                <Route path={'/Sign/login'} component={SignIn}/>
                <Route path={'/Sign/join'} component={SignUp}/>

            </Switch>
        </Container>
    )
}

const Container = styled.div`
`
export default Routes;