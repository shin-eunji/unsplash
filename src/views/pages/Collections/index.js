import React, {useEffect} from 'react';
import styled from 'styled-components';
import {searchActions} from "../../../redux/actionCreators";
import {useSelector} from "react-redux";

function Collections (props) {

    const {} = props;

    const {search} = useSelector(state => state.search);

    useEffect((data) => {
        searchActions.search()
        console.log("data", data);
    }, [])


    return (
        <Container data={search}
                   render={(item, index) => <Item key={index} {...item}/>}
        >
            Collections
        </Container>
    )
}

const Container = styled.div`
`
const Item = styled.div`
    
`;
export default Collections;