import React from 'react';
import styled from 'styled-components';
import {pxToRem} from "../../../../common/Text/Text.Styled";

import Logo from "./Contents/Logo";
import SearchForm from "../../SearchForm";
import Menu from "./Contents/Menu";
import Member from "./Contents/Member";
import {ContentContainer} from "../../../../common/Layout/Components.Styled";

function Top(props) {

    const {} = props;

    return (
        <Container>
            <SContentContainer>
                <Logo />

                <SearchContainer>
                    <SearchForm />
                </SearchContainer>

                <Menu/>
                <Member/>
            </SContentContainer>
        </Container>
    )
}

const Container = styled.div`
    display:flex;
    align-items:center;
    width: 100%;
    height: ${pxToRem(56)};
`
const SContentContainer = styled(ContentContainer)`
    display:flex;
    align-items:center;
    justify-content:space-between;
    width: 100%; 
`;
const SearchContainer = styled.div`
    flex: 1;
    height: ${pxToRem(40)};
    background: #eee;
    border: 1px solid transparent;
    border-radius: ${pxToRem(50)};
    margin-left: ${pxToRem(18)};
`;
export default Top;