import React from 'react';
import styled from 'styled-components';
import {Route, Switch, Redirect} from "react-router-dom";

import Home from "./views/pages/home";


function Routes (props) {

    const {} = props;

    return (
        <Container>
            <Switch>
                <Route path={'/'} component={Home} />
            </Switch>
        </Container>
    )
}

const Container = styled.div`
`
export default Routes;