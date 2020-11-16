import React, {useEffect} from 'react';
import styled from 'styled-components';
import {useSelector} from "react-redux";
import {searchActions} from "../../../redux/actionCreators";
import Tags from "../../components/Search/Tags";
import {pxToRem} from "../../../common/Text/Text.Styled";
import {ContentContainer} from "../../../common/Layout/Components.Styled";
import PhotoList from "../../components/Search/PhotoList";

function Search(props) {

    const {
        match
    } = props;

    const {list = []} = useSelector(state => state.search);

    useEffect(() => {
        searchActions.searchPhotos();
    }, [list])

    const query = match.params.query;
    const collections = match.params.collections;


    return (
        <Container>
            <SContentContainer>

                <Header>
                    <Title>{query}</Title>
                    {collections}
                </Header>

                <Photos>
                    {
                        list.map((item, index) => (<PhotoList key={index} {...item}/>))
                    }
                </Photos>
            </SContentContainer>
        </Container>
    )
}

const Container = styled.div`
    position:relative;
    top: ${pxToRem(112)};
`
const SContentContainer = styled(ContentContainer)`
    
`;
const Header = styled.div`
    padding: ${pxToRem(72)} 0 ${pxToRem(60)};
`;
const Title = styled.h2`
    font-size: ${pxToRem(46)};
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: ${pxToRem(16)};
`;
const Photos = styled.div`
    line-height: 0;
    margin-top: 10px;
    -webkit-column-count: 4;
    -webkit-column-gap: 0px;
    -moz-column-count: 4;
    -moz-column-gap: 0px;
    column-count: 3;
    column-gap: ${pxToRem(20)};
`;
export default Search;