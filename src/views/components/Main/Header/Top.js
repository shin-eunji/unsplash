import React from 'react';
import styled from 'styled-components';
import {pxToRem} from "../../../../common/Text/Text.Styled";

import Logo from "./Contents/Logo";
import Search from "../../Search";
import Menu from "./Contents/Menu";
import Member from "./Contents/Member";

function Top(props) {

    const {} = props;

    return (
        <Container>
            <ContentContainer>
                <Logo />

                <SearchContainer>
                    <Search />
                </SearchContainer>

                <Menu/>
                <Member/>
            </ContentContainer>
        </Container>
    )
}

const Container = styled.div`
    display:flex;
    align-items:center;
    width: 100%;
    height: ${pxToRem(56)};
`
const ContentContainer = styled.div`
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