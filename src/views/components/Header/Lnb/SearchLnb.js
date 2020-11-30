import React, {useEffect} from 'react';
import styled from 'styled-components';
import {useSelector} from "react-redux";
import {searchActions} from "../../../../redux/actionCreators";
import PhotoList from "../../Search/PhotoList";

function SearchLnb (props) {

    const {} = props;

    const {list = []} = useSelector(state => state.search);

    useEffect(() => {
        searchActions.searchPhotos();
    }, [list])


    return (
        <Container>
            {
                list.results.map((item, index) => (
                    <div key={index} {...item}>
                        <SearchList>
                            <List>photos {item.total_photos}</List>
                        </SearchList>
                    </div>
                ))
            }
        </Container>
    )
}

const Container = styled.div`
`
const SearchList = styled.div`
    
`;
const List = styled.div`
    
`;
export default SearchLnb;