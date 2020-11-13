import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {Route, Switch, withRouter} from "react-router-dom";

import Home from "./views/pages/Home";

import Sign from "./views/pages/Sign";
import SignIn from "./views/pages/Sign/SignIn";
import SignUp from "./views/pages/Sign/SignUp";

import Explore from "./views/pages/Explore";
import Header from "./views/components/Header";
import Index from "./views/components/Header/Lnb";
import TopicsLnb from "./views/components/Header/Lnb/TopicsLnb";
import Details from "./views/components/Topics/Details";
import Topics from "./views/pages/Topics";
import List from "./views/pages/Search/List";

function Routes (props) {

    const {
        location,
    } = props;

    const RenderHeader = (pathname) => {
        switch(pathname) {
            default: return <Header><Index/></Header>
            case '/collections': return <Header/>
            case '/t': return <Header><TopicsLnb/></Header>
            case '/s/photos': return <Header><TopicsLnb/></Header>
        }
    }

    return (
        <Container>
            <RenderHeader pathname={location.pathname}/>
            <Switch>
                <Route exact path={'/'} component={Home} />

                <Route exact path={'/t'} component={Topics} />
                <Route exact path={'/t/:slug'} component={Details} />

                <Route exact path={`/s/photos/:query`} component={List} />

                <Route exact path={'/explore'} component={Explore} />

                <Route exact path={'/Sign'} component={Sign} />
                <Route path={'/sign/login'} component={SignIn}/>
                <Route path={'/sign/join'} component={SignUp}/>


            </Switch>
        </Container>
    )
}

const Container = styled.div`
`
export default withRouter(Routes);