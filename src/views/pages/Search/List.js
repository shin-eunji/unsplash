import React, {useEffect} from 'react';
import styled from 'styled-components';
import {useSelector} from "react-redux";
import {searchActions} from "../../../redux/actionCreators";
import Details from "./Details";

function List (props) {

    const {} = props;

    const {list = []} = useSelector(state => state.search)

    useEffect(() => {
        searchActions.searchPhotos()
    }, [])


    return (
        <Container>
            {
                list.map((item, index) => <Details key={index} {...item} />)
            }
        </Container>
    )
}

const Container = styled.div`
`
export default List;