import React from 'react';
import styled from 'styled-components';
import {Route, Switch} from "react-router-dom";

import Main from "./views/pages/Main";
import Login from "./views/pages/Login";
import Page from "./views/pages/Page";
import Join from "./views/pages/Join";
import Search from "./views/pages/Search";


function App (props) {

    const {
        photo
    } = props;


    return (
        <Container>
          <Switch>
            <Route path={"/"} component={Main} exact={true}/>
            <Route path={"/login"} component={Login}/>
            <Route path={"/join"} component={Join}/>
            <Route path={"/search"} component={Search}/>
            <Route path={"/page"} component={Page}/>
          </Switch>

        </Container>
    )
}

const Container = styled.div`
`
export default App;