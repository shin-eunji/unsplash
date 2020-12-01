import React, {useEffect} from 'react';
import styled from 'styled-components';
import {useSelector} from "react-redux";
import {searchActions} from "../../../../redux/actionCreators";
import PhotoList from "../../Search/PhotoList";
import {pxToRem} from "../../../../common/Text/Text.Styled";
import {Color} from "../../../../common/Color/Color.Styled";

function SearchLnb (props) {

    const {} = props;

    const {list, collections} = useSelector(state => state.search);

    useEffect((data) => {
        searchActions.searchPhotos(data);
        searchActions.searchCollections(data);
    }, [list, collections])


    return (
        <Container>
            <Photo>
                photos {list.total}
            </Photo>
            <Collection>{collections.total}</Collection>
        </Container>
    )
}

const Container = styled.div`
    display:flex;
    align-items:center;
    height: ${pxToRem(50)};
    border-bottom: 1px solid #eee;
    padding: ${pxToRem(15)};
`
const Photo = styled.div`
    color: ${Color.DARK};
    font-size: ${pxToRem(14)};
    font-weight: 500;
`;
const Collection = styled.div`
    
`;
export default SearchLnb;