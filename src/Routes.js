import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {Route, Switch, withRouter} from "react-router-dom";

import Header from "./views/components/Header";
import Footer from "./views/containers/Home/Footer";

import Home from "./views/pages/Home";
import Lnb from "./views/components/Header/Lnb";
import Sign from "./views/pages/Sign";
import SignIn from "./views/pages/Sign/SignIn";
import SignUp from "./views/pages/Sign/SignUp";
import Explore from "./views/pages/Explore";
import Details from "./views/components/Topics/Details";
import Topics from "./views/pages/Topics";
import Search from "./views/pages/Search";
import SearchLnb from "./views/components/Header/Lnb/SearchLnb";

function Routes (props) {

    const {
        location,
    } = props;


    const RenderHeader = ({pathname}) => {
        if(pathname === '/explore') {
            return <Header/>
        } else if(pathname.startsWith('/s/photos/')) {
            return <Header><SearchLnb/></Header>
        } else {
            return <Header><Lnb/></Header>
        }
    }

    const RenderFooter = ({pathname}) => {
        switch(pathname) {
            default: return <Footer/>
            case '/explore': return null
            case '/s/photos/:query': return null
            case '/sign/login': return null
            case '/sign/join': return null
        }
    }


    return (
        <Container>
            <RenderHeader pathname={location.pathname}/>
            <Switch>
                <Route exact path={'/'} component={Home}/>

                <Route exact path={'/t'} component={Topics} />
                <Route exact path={'/t/:slug'} component={Details} />

                <Route exact path={`/s/photos/:query`} component={Search} />

                <Route exact path={'/explore'} component={Explore} />

                <Route exact path={'/sign'} component={Sign} />
                <Route path={'/sign/login'} component={SignIn}/>
                <Route path={'/sign/join'} component={SignUp}/>
            </Switch>
            <RenderFooter pathname={location.pathname}/>
        </Container>
    )
}

const Container = styled.div`
`
export default withRouter(Routes);