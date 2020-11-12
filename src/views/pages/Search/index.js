import React from 'react';
import styled from 'styled-components';
import {Switch, Route} from "react-router-dom";
import List from "./List";

function Search (props) {

    const {} = props;

    return (
        <Container>
            <Switch>
                <Route exact path={'/search/photos'} component={List}/>
            </Switch>
        </Container>
    )
}

const Container = styled.div`
`
export default Search;