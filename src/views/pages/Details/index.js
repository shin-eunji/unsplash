import React, {useEffect} from 'react';
import styled from 'styled-components';
import Top from "../../components/Main/Header/Top";
import {ContentContainer} from "../../../common/Layout/Components.Styled";
import {searchActions} from "../../../redux/actionCreators";

function Details (props) {

    const {
    } = props;

    useEffect(() => {
        searchActions.getPhoto()
    }, [])


    return (
        <Container>
            <Top/>
            <SContentContainer>

            </SContentContainer>
        </Container>
    )
}

const Container = styled.div`
`
const SContentContainer = styled(ContentContainer)`
    
`;
export default Details;