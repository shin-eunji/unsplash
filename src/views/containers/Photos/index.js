import React, {useEffect} from 'react';
import styled from 'styled-components';

import {pxToRem} from "../../../common/Text/Text.Styled";
import {useSelector} from "react-redux";
import {photoActions} from "../../../redux/actionCreators";

import Item from "./Item";
import {ContentContainer} from "../../../common/Layout/Components.Styled";

function Photos() {

    const {list} = useSelector(state => state.photo);

    useEffect(() => {
        photoActions.getPhotos()
    }, [])



    return (
        <SContentContainer>
            <Container>
                    <List>
                    {
                        list.map((item, index) => <Item key={index} {...item} />)
                    }
                    </List>
            </Container>
        </SContentContainer>
    )

}

const SContentContainer = styled(ContentContainer)`
    
`;
const Container = styled.div`
    line-height: 0;
    margin-top: 10px;
    -webkit-column-count: 4;
    -webkit-column-gap: 0px;
    -moz-column-count: 4;
    -moz-column-gap: 0px;
    column-count: 3;
    column-gap: ${pxToRem(20)};
`;
const List = styled.div`
`;
export default Photos;