import React, {useEffect} from 'react';
import styled from 'styled-components';
import {useSelector} from "react-redux";
import {searchActions} from "../../../redux/actionCreators";
import {pxToRem} from "../../../common/Text/Text.Styled";
import {ContentContainer} from "../../../common/Layout/Components.Styled";
import PhotoList from "../../components/Search/PhotoList";
import qs from 'qs';
import {navigate} from "../../../lib/History";

function Search(props) {

    const {
        match,
        location
    } = props;
    

    const query = match.params.query;
    const collections = match.params.collections;
    const values = qs.parse(location.search, {ignoreQueryPrefix: true})
    const page = Number(values.page) || 1;
    const per_page = Number(values.per_page) || 5;

    const {list} = useSelector(state => state.search);

    const isFirstPage = page === 1;
    const isLastPage = page >= list.total_pages;
    const isCurrentPage = page;


    useEffect(() => {
        searchActions.searchPhotos({
            query,
            page,
            per_page
        });
    }, [query, page, per_page])

    const handlePage = (page) => {
        if(isCurrentPage !== page) {
            navigate(`/s/photos/beach?${qs.stringify({
                ...values,
                page
            })}`)
        }
    }

    return (
        <Container>
            <SContentContainer>

                <Header>
                    <Title>{query}</Title>
                    <Collections>{collections}</Collections>

                </Header>

                <Photos>
                    {
                        list.results.map((item, index) => (<PhotoList key={index} {...item}/>))
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
    text-transform: capitalize;
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
const Collections = styled.div`
    
`;
export default Search;