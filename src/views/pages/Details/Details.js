import React, {useEffect} from 'react';
import styled from 'styled-components';
import Top from "../../components/Main/Header/Top";
import {ContentContainer} from "../../../common/Layout/Components.Styled";

function Details (props) {

    const {
        urls
    } = props;


    return (
        <Container>
            <Top/>
            <SContentContainer>
                {/*<img src={urls.small} alt="photo"/>*/}
            </SContentContainer>
        </Container>
    )
}

const Container = styled.div`
`
const SContentContainer = styled(ContentContainer)`
    
`;
export default Details;