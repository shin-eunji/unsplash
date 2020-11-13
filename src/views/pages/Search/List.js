import React, {useEffect} from 'react';
import styled from 'styled-components';
import {useSelector} from "react-redux";
import {photoActions, searchActions} from "../../../redux/actionCreators";
import Details from "./Details";
import {pxToRem} from "../../../common/Text/Text.Styled";
import {ContentContainer} from "../../../common/Layout/Components.Styled";

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
            <SContentContainer>
                <Header>
                <Title>{query}</Title>
                <Tags>
                    {
                        list.map((item, index) => <Details key={index} {...item} />)
                    }
                </Tags>
                </Header>
                <Photos>
                    {
                        list.map((item, index) => (
                            <Photo>
                                <img src={item.urls.small} alt={item.alt_description}/>
                            </Photo>
                        ))
                    }
                </Photos>
            </SContentContainer>
        </Container>
    )
}

const Container = styled.div`
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
const Tags = styled.div`
    display:flex;
    overflow: hidden;
    overflow-x: scroll;
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
const Photo = styled.div`
`;
export default List;