import React, {useEffect} from 'react';
import styled from 'styled-components';
import {Switch, Route} from "react-router-dom";
import List from "./List";
import {useSelector} from "react-redux";
import {searchActions} from "../../../redux/actionCreators";

function Search (props) {

    const {
        match
    } = props;

    const query = match.params.query;
    const {detail} = useSelector(state => state.search);
    const data = detail[query]

    useEffect(() => {
        if(!data) {
            searchActions.getPhotos(query);
        }
    }, [query])

    return (
        <Container>
            <Switch>
                <Route exact path={`/s/photos/${query}`} component={List}/>
            </Switch>
        </Container>
    )
}

const Container = styled.div`
`
export default Search;