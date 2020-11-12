import React, {useEffect} from 'react';
import styled from 'styled-components';
import {useSelector} from "react-redux";
import {searchActions} from "../../../redux/actionCreators";
import Details from "./Details";
import {pxToRem} from "../../../common/Text/Text.Styled";

function List(props) {

    const {
        match
    } = props;

    const {list = []} = useSelector(state => state.search);

    useEffect(() => {
        searchActions.searchPhotos();
    }, [list])

    const query = match.params.query;


    return (
        <Container>
            <Contents>
            <Title>{query}</Title>
            <Tags>
                {
                    list.map((item, index) => <Details key={index} {...item} />)
                }
            </Tags>
            <Photos>
                {
                    list.map((item, index) => <img src={item.urls.small} alt="pros"/>)
                }
            </Photos>
            </Contents>
        </Container>
    )
}

const Container = styled.div`
`
const Contents = styled.div`
    
`;
const Title = styled.h2`
    font-size: ${pxToRem(46)};
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: ${pxToRem(16)};
`;
const Tags = styled.div`
    display:flex;
    overflow: hidden;
    overflow-x: scroll;
`;
const Photos = styled.div`
    
`;
export default List;