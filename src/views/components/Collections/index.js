import React, {useEffect} from 'react';
import styled from 'styled-components';
import {useSelector} from "react-redux";
import {searchActions} from "../../../redux/actionCreators";

function Collections (props) {

    const {} = props;

    const {collections} = useSelector(state => state.search);

    useEffect(() => {
        searchActions.searchCollections({
            query,
            page,
            per_page,
        });
    }, [query, page, per_page])

    return (
        <Container>
            Collections
        </Container>
    )
}

const Container = styled.div`
`
export default Collections;